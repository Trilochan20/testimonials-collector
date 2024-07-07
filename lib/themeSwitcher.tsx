"use client";

import { SunIcon, MoonIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  if (!mounted) return <>...</>;

  if (currentTheme === "dark") {
    return (
      <div style={{ cursor: "pointer" }}>
        <SunIcon className="h-6 w-6" onClick={() => setTheme("light")} />
      </div>
    );
  }

  if (currentTheme === "light") {
    return (
      <div style={{ cursor: "pointer" }}>
        <MoonIcon
          className="h-6 w-6 text-slate-900"
          onClick={() => setTheme("dark")}
        />
      </div>
    );
  }
}
