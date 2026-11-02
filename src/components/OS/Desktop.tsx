import { useEffect, useState } from 'react';
import {
  WindowManagerProvider,
  useWindowManager,
} from '@/context/WindowManagerContext';
import { Window } from '@/components/OS/Window';
import { Taskbar } from '@/components/OS/Taskbar';

// Portfolio Section Components
import { AboutMe } from '@/components/AboutMe/AboutMe';
import { Experience } from '@/components/Experience/Experience';
import { Technologies } from '@/components/Skills/Skills';
import { References } from '@/components/References/References';

import {
  User,
  Briefcase,
  Code2,
  Award,
  FileText,
  Linkedin,
  Trash2,
} from 'lucide-react';
import { cn } from '@/utils/misc';

interface DesktopIconProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  onOpen: () => void;
  isExternal?: boolean;
}

function DesktopIcon({ label, icon, onOpen }: DesktopIconProps) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        setIsSelected(true);
        onOpen();
      }}
      onBlur={() => setIsSelected(false)}
      className={cn(
        'group flex flex-col items-center justify-center p-2 rounded-md w-24 gap-1.5 cursor-pointer text-center select-none outline-none transition-colors',
        isSelected
          ? 'bg-[#316ac5]/50 border border-dotted border-white/80'
          : 'hover:bg-white/10 hover:backdrop-blur-xs'
      )}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-lg shadow-sm group-hover:scale-105 transition-transform">
        {icon}
      </div>
      <span className="text-white text-xs font-semibold px-1 py-0.5 rounded leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] line-clamp-2">
        {label}
      </span>
    </button>
  );
}

function DesktopCanvas() {
  const { openWindow } = useWindowManager();

  // Auto-open primary window on initial load
  useEffect(() => {
    // Open About Me by default
    openWindow('about-me', {
      title: 'About Me - Saúl Maldonado',
      icon: '🧑‍💻',
      position: { x: Math.max(20, window.innerWidth / 2 - 420), y: 40 },
      size: { width: Math.min(840, window.innerWidth - 40), height: 560 },
    });
  }, [openWindow]);

  const desktopIcons: DesktopIconProps[] = [
    {
      id: 'about-me',
      label: 'About Me',
      icon: (
        <div className="w-11 h-11 rounded-lg bg-[linear-gradient(to_bottom,#60a5fa,#2563eb)] text-white flex items-center justify-center shadow-md border border-white/30">
          <User className="w-6 h-6" />
        </div>
      ),
      onOpen: () =>
        openWindow('about-me', {
          title: 'About Me - Saúl Maldonado',
          icon: '🧑‍💻',
          position: { x: 60, y: 40 },
        }),
    },
    {
      id: 'experience',
      label: 'My Experience',
      icon: (
        <div className="w-11 h-11 rounded-lg bg-[linear-gradient(to_bottom,#fbbf24,#d97706)] text-white flex items-center justify-center shadow-md border border-white/30">
          <Briefcase className="w-6 h-6" />
        </div>
      ),
      onOpen: () =>
        openWindow('experience', {
          title: 'Work Experience',
          icon: '💼',
          position: { x: 120, y: 70 },
        }),
    },
    {
      id: 'technologies',
      label: 'Technologies',
      icon: (
        <div className="w-11 h-11 rounded-lg bg-[linear-gradient(to_bottom,#34d399,#059669)] text-white flex items-center justify-center shadow-md border border-white/30">
          <Code2 className="w-6 h-6" />
        </div>
      ),
      onOpen: () =>
        openWindow('technologies', {
          title: 'Technologies & Skills',
          icon: '⚡',
          position: { x: 180, y: 100 },
        }),
    },
    {
      id: 'references',
      label: 'References',
      icon: (
        <div className="w-11 h-11 rounded-lg bg-[linear-gradient(to_bottom,#c084fc,#7c3aed)] text-white flex items-center justify-center shadow-md border border-white/30">
          <Award className="w-6 h-6" />
        </div>
      ),
      onOpen: () =>
        openWindow('references', {
          title: 'Professional References',
          icon: '📜',
          position: { x: 220, y: 130 },
        }),
    },
    {
      id: 'resume',
      label: 'Resume (CV)',
      isExternal: true,
      icon: (
        <div className="w-11 h-11 rounded-lg bg-[linear-gradient(to_bottom,#f87171,#dc2626)] text-white flex items-center justify-center shadow-md border border-white/30">
          <FileText className="w-6 h-6" />
        </div>
      ),
      onOpen: () => {
        window.open(
          'https://docs.google.com/document/d/1CkjShwaErm3X8dNuLtzPqajTejWy-GxA/edit?usp=drive_link&ouid=101233696113083242593&rtpof=true&sd=true',
          '_blank'
        );
      },
    },
    {
      id: 'github',
      label: 'GitHub',
      isExternal: true,
      icon: (
        <div className="w-11 h-11 rounded-lg bg-[linear-gradient(to_bottom,#374151,#111827)] text-white flex items-center justify-center shadow-md border border-white/30">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </div>
      ),
      onOpen: () => {
        window.open('https://www.github.com/saulmn', '_blank');
      },
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      isExternal: true,
      icon: (
        <div className="w-11 h-11 rounded-lg bg-[linear-gradient(to_bottom,#0284c7,#0369a1)] text-white flex items-center justify-center shadow-md border border-white/30">
          <Linkedin className="w-6 h-6" />
        </div>
      ),
      onOpen: () => {
        window.open('https://www.linkedin.com/in/saulmn/', '_blank');
      },
    },
    {
      id: 'trash',
      label: 'Recycle Bin',
      icon: (
        <div className="w-11 h-11 rounded-lg bg-[linear-gradient(to_bottom,#9ca3af,#4b5563)] text-white flex items-center justify-center shadow-md border border-white/30">
          <Trash2 className="w-6 h-6" />
        </div>
      ),
      onOpen: () => {
        alert('Recycle Bin is empty!');
      },
    },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden select-none bg-[radial-gradient(circle_at_top,#2980b9,#2c3e50)]">
      {/* Windows XP Bliss Style Rolling Hill Background Graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-500 via-sky-600 to-blue-900" />

      {/* Subtle Scanline / Retro Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" />

      {/* Desktop Icons Column */}
      <div className="absolute top-4 left-4 z-10 flex flex-col flex-wrap gap-4 max-h-[calc(100vh-80px)]">
        {desktopIcons.map((icon) => (
          <DesktopIcon key={icon.id} {...icon} />
        ))}
      </div>

      {/* Windows Application Containers */}
      <Window
        id="about-me"
        title="About Me - Saúl Maldonado"
        icon="🧑‍💻"
        defaultPosition={{ x: 100, y: 40 }}
        defaultSize={{ width: 840, height: 560 }}
      >
        <AboutMe />
      </Window>

      <Window
        id="experience"
        title="Work Experience"
        icon="💼"
        defaultPosition={{ x: 160, y: 70 }}
        defaultSize={{ width: 880, height: 600 }}
      >
        <Experience />
      </Window>

      <Window
        id="technologies"
        title="Technologies & Skills"
        icon="⚡"
        defaultPosition={{ x: 220, y: 100 }}
        defaultSize={{ width: 840, height: 560 }}
      >
        <Technologies />
      </Window>

      <Window
        id="references"
        title="Professional References"
        icon="📜"
        defaultPosition={{ x: 260, y: 130 }}
        defaultSize={{ width: 780, height: 520 }}
      >
        <References />
      </Window>

      {/* Taskbar at bottom */}
      <Taskbar />
    </div>
  );
}

export function Desktop() {
  return (
    <WindowManagerProvider>
      <DesktopCanvas />
    </WindowManagerProvider>
  );
}
