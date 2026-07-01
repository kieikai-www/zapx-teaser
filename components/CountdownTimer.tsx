"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2027-01-01T00:00:00+09:00");

function calcRemaining() {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-4xl md:text-6xl font-black tabular-nums text-zapx-cyan glow-cyan">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-xs md:text-sm text-muted-foreground tracking-widest uppercase">
        {label}
      </span>
    </div>
  );
}

export function CountdownTimer() {
  const [remaining, setRemaining] = useState<ReturnType<typeof calcRemaining> | null>(null);

  useEffect(() => {
    function tick() {
      setRemaining(calcRemaining());
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!remaining) return null;

  return (
    <div className="flex items-end gap-4 md:gap-8">
      <Unit value={remaining.days} label="日" />
      <span className="text-3xl md:text-5xl font-thin text-zapx-cyan mb-2">:</span>
      <Unit value={remaining.hours} label="時間" />
      <span className="text-3xl md:text-5xl font-thin text-zapx-cyan mb-2">:</span>
      <Unit value={remaining.minutes} label="分" />
      <span className="text-3xl md:text-5xl font-thin text-zapx-cyan mb-2">:</span>
      <Unit value={remaining.seconds} label="秒" />
    </div>
  );
}
