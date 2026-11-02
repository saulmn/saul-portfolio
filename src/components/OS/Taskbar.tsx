import { useState, useEffect, useRef } from 'react';
import {
  Clock,
  Volume2,
  Wifi,
  User,
  Briefcase,
  Code2,
  Award,
  FileText,
  Mail,
  Linkedin,
  Power,
  RotateCcw,
} from 'lucide-react';
import { useWindowManager } from '@/context/WindowManagerContext';
import { cn } from '@/utils/misc';

export function Taskbar() {
  const { windows, activeWindowId, toggleMinimize, openWindow } = useWindowManager();
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [timeStr, setTimeStr] = useState('');
  const startMenuRef = useRef<HTMLDivElement>(null);
  const startButtonRef = useRef<HTMLButtonElement>(null);

  // Live system clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Close start menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        startMenuRef.current &&
        !startMenuRef.current.contains(event.target as Node) &&
        startButtonRef.current &&
        !startButtonRef.current.contains(event.target as Node)
      ) {
        setIsStartOpen(false);
      }
    };
    if (isStartOpen) {
      document.addEventListener('pointerdown', handleClickOutside);
    }
    return () => document.removeEventListener('pointerdown', handleClickOutside);
  }, [isStartOpen]);

  const openWindowsList = Object.values(windows).filter((w) => w.isOpen);

  return (
    <>
      {/* Start Menu Popup */}
      {isStartOpen && (
        <div
          ref={startMenuRef}
          className={cn(
            'fixed bottom-11 left-0 z-[9999] w-[340px] md:w-[420px] rounded-t-lg overflow-hidden select-none',
            'shadow-[0_12px_48px_rgba(0,0,0,0.6),_0_2px_8px_rgba(0,0,0,0.4)]',
            'border-2 border-[#0055ea] dark:border-[#1e3a8a] bg-[#0055ea] dark:bg-[#1e3a8a]'
          )}
        >
          {/* Start Menu Header */}
          <div className="flex items-center gap-3 p-3 bg-[linear-gradient(to_bottom,#0058ee_0%,#288eff_60%,#0055eb_100%)] text-white">
            <div className="w-10 h-10 rounded-md overflow-hidden border-2 border-white/60 shadow-sm shrink-0 bg-white">
              <img
                src="./assets/about-me/saul.webp"
                alt="Saúl"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm md:text-base leading-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                Saúl Maldonado
              </span>
              <span className="text-xs text-blue-100 font-medium">
                Computer Science Engineer
              </span>
            </div>
          </div>

          <div className="h-[2px] bg-[linear-gradient(to_right,#e48a00,#ffba2e,#e48a00)]" />

          {/* Start Menu Body (2 Columns) */}
          <div className="flex flex-row bg-white dark:bg-gray-900 min-h-[300px]">
            {/* Left Column: Apps & Windows */}
            <div className="flex-1 p-2 flex flex-col gap-1 border-r border-[#d4d0c8] dark:border-gray-800">
              <button
                type="button"
                onClick={() => {
                  openWindow('about-me', {
                    title: 'About Me - Saúl Maldonado',
                    icon: '🧑‍💻',
                  });
                  setIsStartOpen(false);
                }}
                className="flex items-center gap-3 p-2 rounded hover:bg-[#316ac5] hover:text-white text-gray-800 dark:text-gray-100 group text-left transition-colors cursor-pointer"
              >
                <div className="w-8 h-8 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold">About Me</div>
                  <div className="text-[10px] text-gray-500 group-hover:text-blue-100">
                    Background, bio & interests
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => {
                  openWindow('experience', {
                    title: 'Work Experience',
                    icon: '💼',
                  });
                  setIsStartOpen(false);
                }}
                className="flex items-center gap-3 p-2 rounded hover:bg-[#316ac5] hover:text-white text-gray-800 dark:text-gray-100 group text-left transition-colors cursor-pointer"
              >
                <div className="w-8 h-8 rounded bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold">Experience</div>
                  <div className="text-[10px] text-gray-500 group-hover:text-blue-100">
                    Career timeline & roles
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => {
                  openWindow('technologies', {
                    title: 'Technologies & Skills',
                    icon: '⚡',
                  });
                  setIsStartOpen(false);
                }}
                className="flex items-center gap-3 p-2 rounded hover:bg-[#316ac5] hover:text-white text-gray-800 dark:text-gray-100 group text-left transition-colors cursor-pointer"
              >
                <div className="w-8 h-8 rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold">Technologies</div>
                  <div className="text-[10px] text-gray-500 group-hover:text-blue-100">
                    Stack, languages & tools
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => {
                  openWindow('references', {
                    title: 'Professional References',
                    icon: '📜',
                  });
                  setIsStartOpen(false);
                }}
                className="flex items-center gap-3 p-2 rounded hover:bg-[#316ac5] hover:text-white text-gray-800 dark:text-gray-100 group text-left transition-colors cursor-pointer"
              >
                <div className="w-8 h-8 rounded bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold">References</div>
                  <div className="text-[10px] text-gray-500 group-hover:text-blue-100">
                    Recommendations & vouchers
                  </div>
                </div>
              </button>
            </div>

            {/* Right Column: Folders & Links */}
            <div className="w-36 md:w-44 p-2 bg-[#d3e5fa] dark:bg-[#111827] flex flex-col gap-1 text-gray-800 dark:text-gray-200">
              <a
                href="https://docs.google.com/document/d/1CkjShwaErm3X8dNuLtzPqajTejWy-GxA/edit?usp=drive_link&ouid=101233696113083242593&rtpof=true&sd=true"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-1.5 rounded hover:bg-[#316ac5] hover:text-white text-xs font-semibold group cursor-pointer"
              >
                <FileText className="w-4 h-4 text-blue-600 group-hover:text-white" />
                <span>Resume / CV</span>
              </a>

              <a
                href="https://www.github.com/saulmn"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-1.5 rounded hover:bg-[#316ac5] hover:text-white text-xs font-semibold group cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current text-gray-700 dark:text-gray-300 group-hover:text-white" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/saulmn/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-1.5 rounded hover:bg-[#316ac5] hover:text-white text-xs font-semibold group cursor-pointer"
              >
                <Linkedin className="w-4 h-4 text-blue-700 group-hover:text-white" />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:saulmn.2599@gmail.com"
                className="flex items-center gap-2 p-1.5 rounded hover:bg-[#316ac5] hover:text-white text-xs font-semibold group cursor-pointer"
              >
                <Mail className="w-4 h-4 text-red-500 group-hover:text-white" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Start Menu Footer */}
          <div className="flex items-center justify-between px-3 py-2 bg-[linear-gradient(to_bottom,#1f2f87_0%,#3159cf_100%)] text-white text-xs">
            <button
              type="button"
              onClick={() => {
                window.location.reload();
              }}
              className="flex items-center gap-1.5 hover:brightness-125 cursor-pointer font-medium"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restart OS</span>
            </button>
            <button
              type="button"
              onClick={() => setIsStartOpen(false)}
              className="flex items-center gap-1.5 hover:brightness-125 cursor-pointer font-medium"
            >
              <Power className="w-3.5 h-3.5 text-amber-300" />
              <span>Close Menu</span>
            </button>
          </div>
        </div>
      )}

      {/* Taskbar Bar */}
      <footer className="fixed bottom-0 left-0 right-0 h-11 z-[9990] flex items-center justify-between select-none bg-[linear-gradient(to_bottom,#1f2f87_0%,#3159cf_8%,#2351cb_20%,#18369e_100%)] border-t border-t-blue-400 shadow-[0_-2px_10px_rgba(0,0,0,0.3)]">
        {/* Start Button */}
        <div className="flex items-center h-full">
          <button
            ref={startButtonRef}
            type="button"
            onClick={() => setIsStartOpen((prev) => !prev)}
            className={cn(
              'h-full px-4 flex items-center gap-2 font-black italic text-white text-sm md:text-base cursor-pointer',
              'rounded-r-xl shadow-[2px_0_5px_rgba(0,0,0,0.3)] border-r border-green-300/40',
              'transition-all duration-100',
              isStartOpen
                ? 'bg-[linear-gradient(to_bottom,#206b24_0%,#358a3a_60%,#206b24_100%)] brightness-90 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]'
                : 'bg-[linear-gradient(to_bottom,#388e3c_0%,#4caf50_40%,#2e7d32_100%)] hover:brightness-110 active:brightness-95'
            )}
          >
            {/* Windows Flag Icon / Logo */}
            <span className="w-4 h-4 grid grid-cols-2 gap-0.5 transform -skew-y-6">
              <span className="bg-red-500 rounded-tl-xs" />
              <span className="bg-green-400 rounded-tr-xs" />
              <span className="bg-blue-500 rounded-bl-xs" />
              <span className="bg-yellow-400 rounded-br-xs" />
            </span>
            <span className="tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              start
            </span>
          </button>
        </div>

        {/* Taskbar Window Buttons (Open Apps) */}
        <div className="flex-1 flex items-center gap-1.5 px-3 h-full overflow-x-auto no-scrollbar">
          {openWindowsList.map((win) => {
            const isActive = activeWindowId === win.id && !win.isMinimized;
            return (
              <button
                key={win.id}
                type="button"
                onClick={() => toggleMinimize(win.id)}
                className={cn(
                  'h-8 px-2.5 max-w-[180px] flex items-center gap-2 rounded-sm text-xs font-semibold truncate cursor-pointer transition-all',
                  isActive
                    ? 'bg-[linear-gradient(to_bottom,#192a6c,#1f3e9c)] text-white shadow-[inset_0_1px_3px_rgba(0,0,0,0.7)] border border-blue-400/50'
                    : 'bg-[linear-gradient(to_bottom,#3869e0_0%,#2049b8_100%)] text-blue-100 hover:brightness-115 active:brightness-95 border border-blue-300/30'
                )}
                title={win.title}
              >
                <span className="text-sm shrink-0">{win.icon || '🪟'}</span>
                <span className="truncate drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">
                  {win.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* System Tray (Notification Area) */}
        <div className="flex items-center gap-3 px-3.5 h-full bg-[linear-gradient(to_bottom,#0d62d2_0%,#0952b5_100%)] border-l border-blue-400/40 text-white text-xs shadow-[inset_0_1px_3px_rgba(0,0,0,0.4)]">
          <span title="Network: Connected"><Wifi className="w-3.5 h-3.5 stroke-[2.5]" /></span>
          <span title="Volume: 100%"><Volume2 className="w-3.5 h-3.5 stroke-[2.5]" /></span>
          <div className="flex items-center gap-1 font-bold pl-1 tracking-wider drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
            <Clock className="w-3.5 h-3.5" />
            <span>{timeStr || '12:00 PM'}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
