import React, { useRef, useEffect } from 'react';
import { Minus, Square, Copy, X } from 'lucide-react';
import { useWindowManager } from '@/context/WindowManagerContext';
import { cn } from '@/utils/misc';

interface WindowProps {
  id: string;
  title: string;
  icon?: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
  defaultPosition?: { x: number; y: number };
  defaultSize?: { width: number; height: number };
  minSize?: { width: number; height: number };
}

export function Window({
  id,
  title,
  icon = '🪟',
  children,
  className,
  defaultPosition = { x: 120, y: 80 },
  defaultSize = { width: 780, height: 520 },
  minSize = { width: 360, height: 260 },
}: WindowProps) {
  const {
    windows,
    activeWindowId,
    focusWindow,
    closeWindow,
    minimizeWindow,
    toggleMaximize,
    updatePosition,
    updateSize,
    registerWindow,
  } = useWindowManager();

  const win = windows[id];

  // Register window config if not already in store
  useEffect(() => {
    registerWindow({
      id,
      title,
      icon: typeof icon === 'string' ? icon : '🪟',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 100,
      position: defaultPosition,
      size: defaultSize,
      minSize,
    });
  }, [id, title, icon, defaultPosition, defaultSize, minSize, registerWindow]);

  const windowRef = useRef<HTMLDivElement>(null);

  // Dragging state
  const isDraggingRef = useRef(false);
  const dragStartPosRef = useRef({ x: 0, y: 0 });
  const windowStartPosRef = useRef({ x: 0, y: 0 });

  // Resizing state
  const isResizingRef = useRef<string | null>(null);
  const resizeStartPosRef = useRef({ x: 0, y: 0 });
  const windowStartSizeRef = useRef({ width: 0, height: 0 });
  const windowStartOriginRef = useRef({ x: 0, y: 0 });

  // Title bar drag handler
  const handleTitlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only left click
    if (e.button !== 0 || win?.isMaximized) return;

    focusWindow(id);
    isDraggingRef.current = true;
    dragStartPosRef.current = { x: e.clientX, y: e.clientY };
    windowStartPosRef.current = { ...(win?.position || defaultPosition) };

    const handlePointerMove = (moveEvent: PointerEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = moveEvent.clientX - dragStartPosRef.current.x;
      const deltaY = moveEvent.clientY - dragStartPosRef.current.y;

      const newX = Math.max(0, windowStartPosRef.current.x + deltaX);
      const newY = Math.max(0, windowStartPosRef.current.y + deltaY);

      updatePosition(id, { x: newX, y: newY });
    };

    const handlePointerUp = () => {
      isDraggingRef.current = false;
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
  };

  // Resize handler for handles
  const handleResizePointerDown = (direction: string, e: React.PointerEvent) => {
    if (e.button !== 0 || win?.isMaximized) return;
    e.stopPropagation();

    focusWindow(id);
    isResizingRef.current = direction;
    resizeStartPosRef.current = { x: e.clientX, y: e.clientY };
    windowStartSizeRef.current = { ...(win?.size || defaultSize) };
    windowStartOriginRef.current = { ...(win?.position || defaultPosition) };

    const minW = win?.minSize?.width || minSize.width;
    const minH = win?.minSize?.height || minSize.height;

    const handlePointerMove = (moveEvent: PointerEvent) => {
      if (!isResizingRef.current) return;
      const deltaX = moveEvent.clientX - resizeStartPosRef.current.x;
      const deltaY = moveEvent.clientY - resizeStartPosRef.current.y;

      let newWidth = windowStartSizeRef.current.width;
      let newHeight = windowStartSizeRef.current.height;
      let newX = windowStartOriginRef.current.x;
      let newY = windowStartOriginRef.current.y;

      if (direction.includes('e')) {
        newWidth = Math.max(minW, windowStartSizeRef.current.width + deltaX);
      }
      if (direction.includes('s')) {
        newHeight = Math.max(minH, windowStartSizeRef.current.height + deltaY);
      }
      if (direction.includes('w')) {
        const potentialWidth = windowStartSizeRef.current.width - deltaX;
        if (potentialWidth >= minW) {
          newWidth = potentialWidth;
          newX = windowStartOriginRef.current.x + deltaX;
        }
      }
      if (direction.includes('n')) {
        const potentialHeight = windowStartSizeRef.current.height - deltaY;
        if (potentialHeight >= minH) {
          newHeight = potentialHeight;
          newY = windowStartOriginRef.current.y + deltaY;
        }
      }

      updateSize(id, { width: newWidth, height: newHeight });
      if (newX !== windowStartOriginRef.current.x || newY !== windowStartOriginRef.current.y) {
        updatePosition(id, { x: newX, y: newY });
      }
    };

    const handlePointerUp = () => {
      isResizingRef.current = null;
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
  };

  if (!win || !win.isOpen) return null;

  const isActive = activeWindowId === id;

  const windowStyle: React.CSSProperties = win.isMaximized
    ? {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: 'calc(100vh - 44px)', // Account for taskbar
        zIndex: win.zIndex,
        display: win.isMinimized ? 'none' : 'flex',
      }
    : {
        position: 'absolute',
        left: `${win.position.x}px`,
        top: `${win.position.y}px`,
        width: `${win.size.width}px`,
        height: `${win.size.height}px`,
        zIndex: win.zIndex,
        display: win.isMinimized ? 'none' : 'flex',
      };

  return (
    <div
      ref={windowRef}
      style={windowStyle}
      onPointerDown={() => focusWindow(id)}
      className={cn(
        'flex flex-col select-none overflow-hidden transition-shadow duration-150',
        win.isMaximized ? 'rounded-none' : 'rounded-t-lg rounded-b-sm',
        // OS Window Outer Bevel & Frame
        isActive
          ? 'shadow-[0_12px_36px_rgba(0,0,0,0.45),_0_2px_8px_rgba(0,0,0,0.25)] border-[3px] border-[#0055ea] dark:border-[#1e3a8a]'
          : 'shadow-[0_8px_24px_rgba(0,0,0,0.3)] border-[3px] border-[#7b9bb9] dark:border-[#374151]',
        'bg-[#ece9d8] dark:bg-[#1f2937]',
        className
      )}
    >
      {/* Title Bar */}
      <div
        onPointerDown={handleTitlePointerDown}
        onDoubleClick={() => toggleMaximize(id)}
        className={cn(
          'flex items-center justify-between px-2.5 h-8 cursor-move select-none',
          'rounded-t-[4px] relative overflow-hidden',
          isActive
            ? 'bg-[linear-gradient(to_bottom,#0058ee_0%,#3593ff_12%,#288eff_48%,#0055eb_90%,#004ad5_100%)] text-white'
            : 'bg-[linear-gradient(to_bottom,#7697ca_0%,#a3c1e2_12%,#93b4d8_48%,#7294c2_90%,#5a7da9_100%)] text-gray-200'
        )}
      >
        {/* Title and Icon */}
        <div className="flex items-center gap-2 overflow-hidden pointer-events-none">
          <span className="text-base shrink-0 flex items-center justify-center">
            {typeof icon === 'string' ? icon : icon}
          </span>
          <span className="font-bold text-xs md:text-sm tracking-wide truncate drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">
            {title}
          </span>
        </div>

        {/* Window Control Buttons */}
        <div className="flex items-center gap-1 shrink-0 ml-2">
          {/* Minimize Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              minimizeWindow(id);
            }}
            title="Minimize"
            className="w-5 h-5 flex items-center justify-center rounded-[3px] text-white bg-[linear-gradient(to_bottom,#387df2,#0b4fbe)] hover:brightness-115 active:brightness-90 border border-white/40 shadow-xs cursor-pointer"
          >
            <Minus className="w-3 h-3 stroke-[2.5]" />
          </button>

          {/* Maximize / Restore Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleMaximize(id);
            }}
            title={win.isMaximized ? 'Restore' : 'Maximize'}
            className="w-5 h-5 flex items-center justify-center rounded-[3px] text-white bg-[linear-gradient(to_bottom,#387df2,#0b4fbe)] hover:brightness-115 active:brightness-90 border border-white/40 shadow-xs cursor-pointer"
          >
            {win.isMaximized ? (
              <Copy className="w-2.5 h-2.5 stroke-[2.5]" />
            ) : (
              <Square className="w-2.5 h-2.5 stroke-[2.5]" />
            )}
          </button>

          {/* Close Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              closeWindow(id);
            }}
            title="Close"
            className="w-5 h-5 flex items-center justify-center rounded-[3px] text-white bg-[linear-gradient(to_bottom,#e85338,#be1b0b)] hover:brightness-115 active:brightness-90 border border-white/40 shadow-xs cursor-pointer"
          >
            <X className="w-3.5 h-3.5 stroke-[3]" />
          </button>
        </div>
      </div>

      {/* Menu / Tool Bar Strip */}
      <div className="flex items-center gap-4 px-3 py-0.5 text-xs text-gray-700 dark:text-gray-300 bg-[#f1efe2] dark:bg-[#111827] border-b border-[#d8d4c4] dark:border-gray-700">
        <span className="hover:text-blue-600 cursor-pointer">File</span>
        <span className="hover:text-blue-600 cursor-pointer">Edit</span>
        <span className="hover:text-blue-600 cursor-pointer">View</span>
        <span className="hover:text-blue-600 cursor-pointer">Help</span>
      </div>

      {/* Window Body */}
      <div className="flex-1 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-y-auto overflow-x-hidden p-4 md:p-6 relative">
        {children}
      </div>

      {/* Window Status Bar */}
      <div className="flex items-center justify-between px-3 py-1 bg-[#ece9d8] dark:bg-[#1f2937] border-t border-[#d8d4c4] dark:border-gray-700 text-[11px] text-gray-600 dark:text-gray-400">
        <span>Ready</span>
        <div className="flex items-center gap-2">
          <span>{win.isMaximized ? 'Maximized' : `${win.size.width} × ${win.size.height}`}</span>
        </div>
      </div>

      {/* Resizing Handles (hidden when maximized) */}
      {!win.isMaximized && (
        <>
          {/* East (right) */}
          <div
            onPointerDown={(e) => handleResizePointerDown('e', e)}
            className="absolute top-0 right-0 w-2 h-full cursor-e-resize z-50"
          />
          {/* South (bottom) */}
          <div
            onPointerDown={(e) => handleResizePointerDown('s', e)}
            className="absolute bottom-0 left-0 w-full h-2 cursor-s-resize z-50"
          />
          {/* West (left) */}
          <div
            onPointerDown={(e) => handleResizePointerDown('w', e)}
            className="absolute top-0 left-0 w-2 h-full cursor-w-resize z-50"
          />
          {/* North (top) */}
          <div
            onPointerDown={(e) => handleResizePointerDown('n', e)}
            className="absolute top-0 left-0 w-full h-2 cursor-n-resize z-50"
          />
          {/* South-East (bottom right corner) */}
          <div
            onPointerDown={(e) => handleResizePointerDown('se', e)}
            className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize z-50 flex items-end justify-end p-0.5"
          >
            <div className="w-2 h-2 border-r-2 border-b-2 border-gray-400" />
          </div>
          {/* South-West (bottom left corner) */}
          <div
            onPointerDown={(e) => handleResizePointerDown('sw', e)}
            className="absolute bottom-0 left-0 w-4 h-4 cursor-sw-resize z-50"
          />
        </>
      )}
    </div>
  );
}
