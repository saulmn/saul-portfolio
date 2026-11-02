import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

export interface WindowItem {
  id: string;
  title: string;
  icon?: string; // Icon identifier or emoji
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
  minSize: { width: number; height: number };
  defaultPosition?: { x: number; y: number };
  defaultSize?: { width: number; height: number };
}

export interface WindowManagerContextType {
  windows: Record<string, WindowItem>;
  activeWindowId: string | null;
  openWindow: (id: string, initialConfig?: Partial<WindowItem>) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  toggleMinimize: (id: string) => void;
  toggleMaximize: (id: string) => void;
  focusWindow: (id: string) => void;
  updatePosition: (id: string, position: { x: number; y: number }) => void;
  updateSize: (id: string, size: { width: number; height: number }) => void;
  registerWindow: (config: WindowItem) => void;
}

const WindowManagerContext = createContext<WindowManagerContextType | null>(null);

const DEFAULT_MIN_SIZE = { width: 360, height: 260 };

export function WindowManagerProvider({ children }: { children: React.ReactNode }) {
  const [windows, setWindows] = useState<Record<string, WindowItem>>({});
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null);
  const [, setTopZIndex] = useState<number>(100);

  // Focus a window and bring it to top z-index
  const focusWindow = useCallback((id: string) => {
    setTopZIndex((prevZ) => {
      const nextZ = prevZ + 1;
      setWindows((prev) => {
        if (!prev[id]) return prev;
        return {
          ...prev,
          [id]: {
            ...prev[id],
            zIndex: nextZ,
            isMinimized: false,
          },
        };
      });
      return nextZ;
    });
    setActiveWindowId(id);
  }, []);

  // Register window definition if not already present
  const registerWindow = useCallback((config: WindowItem) => {
    setWindows((prev) => {
      if (prev[config.id]) return prev;
      return {
        ...prev,
        [config.id]: {
          ...config,
          minSize: config.minSize || DEFAULT_MIN_SIZE,
        },
      };
    });
  }, []);

  // Open window (or restore if minimized) and focus it
  const openWindow = useCallback(
    (id: string, initialConfig?: Partial<WindowItem>) => {
      setTopZIndex((prevZ) => {
        const nextZ = prevZ + 1;
        setWindows((prev) => {
          const current = prev[id] || {
            id,
            title: initialConfig?.title || id,
            icon: initialConfig?.icon || '📁',
            isOpen: true,
            isMinimized: false,
            isMaximized: false,
            zIndex: nextZ,
            position: initialConfig?.position || { x: 80 + Object.keys(prev).length * 28, y: 60 + Object.keys(prev).length * 28 },
            size: initialConfig?.size || { width: 720, height: 500 },
            minSize: initialConfig?.minSize || DEFAULT_MIN_SIZE,
          };

          return {
            ...prev,
            [id]: {
              ...current,
              ...initialConfig,
              isOpen: true,
              isMinimized: false,
              zIndex: nextZ,
            },
          };
        });
        return nextZ;
      });
      setActiveWindowId(id);
    },
    []
  );

  // Close window
  const closeWindow = useCallback((id: string) => {
    setWindows((prev) => {
      if (!prev[id]) return prev;
      return {
        ...prev,
        [id]: {
          ...prev[id],
          isOpen: false,
          isMinimized: false,
        },
      };
    });
    setActiveWindowId((current) => (current === id ? null : current));
  }, []);

  // Minimize window
  const minimizeWindow = useCallback((id: string) => {
    setWindows((prev) => {
      if (!prev[id]) return prev;
      return {
        ...prev,
        [id]: {
          ...prev[id],
          isMinimized: true,
        },
      };
    });
    setActiveWindowId((current) => (current === id ? null : current));
  }, []);

  // Toggle minimize/restore from Taskbar
  const toggleMinimize = useCallback(
    (id: string) => {
      setWindows((prev) => {
        const win = prev[id];
        if (!win) return prev;

        if (win.isMinimized) {
          // Restore and focus
          focusWindow(id);
          return {
            ...prev,
            [id]: { ...win, isMinimized: false },
          };
        }

        if (activeWindowId === id) {
          // If already active, minimize it
          setActiveWindowId(null);
          return {
            ...prev,
            [id]: { ...win, isMinimized: true },
          };
        }

        // If open but not focused, bring to focus
        focusWindow(id);
        return prev;
      });
    },
    [activeWindowId, focusWindow]
  );

  // Toggle maximize
  const toggleMaximize = useCallback((id: string) => {
    setWindows((prev) => {
      const win = prev[id];
      if (!win) return prev;
      return {
        ...prev,
        [id]: {
          ...win,
          isMaximized: !win.isMaximized,
        },
      };
    });
    focusWindow(id);
  }, [focusWindow]);

  // Update position after dragging
  const updatePosition = useCallback((id: string, position: { x: number; y: number }) => {
    setWindows((prev) => {
      if (!prev[id]) return prev;
      return {
        ...prev,
        [id]: {
          ...prev[id],
          position,
        },
      };
    });
  }, []);

  // Update size after resizing
  const updateSize = useCallback((id: string, size: { width: number; height: number }) => {
    setWindows((prev) => {
      if (!prev[id]) return prev;
      return {
        ...prev,
        [id]: {
          ...prev[id],
          size,
        },
      };
    });
  }, []);

  const value = useMemo(
    () => ({
      windows,
      activeWindowId,
      openWindow,
      closeWindow,
      minimizeWindow,
      toggleMinimize,
      toggleMaximize,
      focusWindow,
      updatePosition,
      updateSize,
      registerWindow,
    }),
    [
      windows,
      activeWindowId,
      openWindow,
      closeWindow,
      minimizeWindow,
      toggleMinimize,
      toggleMaximize,
      focusWindow,
      updatePosition,
      updateSize,
      registerWindow,
    ]
  );

  return <WindowManagerContext.Provider value={value}>{children}</WindowManagerContext.Provider>;
}

export function useWindowManager() {
  const context = useContext(WindowManagerContext);
  if (!context) {
    throw new Error('useWindowManager must be used within a WindowManagerProvider');
  }
  return context;
}
