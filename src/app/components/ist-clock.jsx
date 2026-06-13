"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ISTClock() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    function update() {
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    }
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="sticky top-0 z-[60] bg-slate-900 border-b border-slate-800 py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        {/* IST Clock — left side */}
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500" />
          </span>
          <span className="text-slate-400 text-sm font-medium">
            🇮🇳 India Standard Time
          </span>
          <span className="text-white font-mono text-base font-semibold tracking-wider">
            {time ?? "--:--:-- --"}
          </span>
          <span className="text-slate-500 text-sm">IST</span>
        </div>

        {/* Right side — availability badge */}
        <div className="flex items-center gap-3">
          <span className="text-slate-400 text-sm hidden sm:block">
            Available for new projects
          </span>
        </div>
      </div>
    </div>
  );
}
