"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "motion/react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({
  data,
  title,
  description,
}: {
  data: TimelineEntry[];
  title: string;
  description?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-background dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2
          className={
            "text-4xl mb-4 font-semibold max-w-4xl " +
            "text-gray-800 dark:text-gray-100 " +
            "[text-shadow:0_1px_0_rgba(255,255,255,0.8)] dark:[text-shadow:none]"
          }
        >
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base max-w-sm">
          {description}
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Aqua gel sphere timeline dot */}
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center">
                {/* Outer ring — brushed metal bevel */}
                <div
                  className={
                    "h-10 w-10 rounded-full flex items-center justify-center " +
                    "bg-[linear-gradient(to_bottom,_#e8e8e8_0%,_#c0c0c0_100%)] " +
                    "dark:bg-[linear-gradient(to_bottom,_#3a3f50_0%,_#1e2230_100%)] " +
                    "border border-t-white border-l-white border-b-gray-400 border-r-gray-400 " +
                    "dark:border-t-gray-600 dark:border-b-gray-800 " +
                    "shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
                  }
                >
                  {/* Inner gel sphere */}
                  <div
                    className={
                      "h-4 w-4 rounded-full relative overflow-hidden " +
                      "bg-[linear-gradient(to_bottom,_rgba(255,255,255,0.9)_0%,_rgba(150,200,255,0.8)_35%,_rgba(30,120,255,0.9)_70%,_rgba(0,80,200,1)_100%)] " +
                      "shadow-[0_2px_4px_rgba(0,80,200,0.5),_inset_0_1px_1px_rgba(255,255,255,0.8)]"
                    }
                  >
                    {/* Specular highlight */}
                    <span
                      className="absolute top-0.5 left-0.5 w-1.5 h-1 rounded-full bg-white/70"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
              <h3
                className={
                  "hidden md:block text-xl md:pl-20 md:text-5xl font-bold " +
                  "text-gray-500 dark:text-gray-500 " +
                  "[text-shadow:0_1px_0_rgba(255,255,255,0.7)] dark:[text-shadow:none]"
                }
              >
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3
                className={
                  "md:hidden block text-2xl mb-4 text-left font-bold " +
                  "text-gray-500 dark:text-gray-500 " +
                  "[text-shadow:0_1px_0_rgba(255,255,255,0.7)] dark:[text-shadow:none]"
                }
              >
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}

        {/* Timeline track */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-300 dark:via-gray-600 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-[linear-gradient(to_bottom,_rgba(0,80,200,0)_0%,_rgba(30,120,255,0.8)_30%,_rgba(150,200,255,1)_100%)] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
