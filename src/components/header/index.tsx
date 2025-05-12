"use client";

import { useThemeSwitcher } from "@/store/theme-switcher";
import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

export default function Header() {
  const theme = useThemeSwitcher();

  useEffect(() => {
    document.getElementById("root")?.classList.toggle("dark", theme.dark);
  }, [theme.dark]);

  return (
    <header className="bg-white dark:bg-gray-700 shadow-sm sticky top-0 z-10">
      <div className="flex justify-between px-4 md:px-20 py-8 items-center">
        <p className="font-bold md:text-2xl">Where in the world?</p>
        <div
          className="flex gap-2.5 items-center text-[0.75rem] px-1.5 rounded-2xl border-1 border-transparent bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:border-1 hover:border-gray-300 cursor-pointer transition-all duration-200 hover:shadow-sm select-none"
          onClick={() => theme.switch()}
          onKeyDown={() => {}}
        >
          {!theme.dark ? (
            <Moon className="size-3 md:size-4" />
          ) : (
            <Sun className="size-3 md:size-4" />
          )}
          <p className="font-bold md:text-[1rem]">
            {!theme.dark ? "Dark Mode" : "Light Mode"}
          </p>
        </div>
      </div>
    </header>
  );
}
