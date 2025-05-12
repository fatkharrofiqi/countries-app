"use client";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import ListItem from "./list-item";

export default function FilterByRegion() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");
  const state = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative max-w-1/2 md:max-w-[15rem] hover:cursor-pointer select-none w-full"
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={() => {}}
        className={twMerge(
          "flex items-center justify-between px-6 py-5 bg-white dark:bg-gray-700 rounded-lg shadow-sm",
          isOpen ? "outline-2 dark:outline-gray-500 outline-gray-100" : "",
        )}
      >
        <p className="text-[0.75rem] md:text-[0.8125rem] md:tracking-tight text-gray-500 dark:text-white">
          Filter by Region
        </p>
        <ChevronDown
          size={12}
          className={twMerge(
            isOpen ? "-rotate-180" : "-rotate-0",
            "duration-300",
          )}
        />
      </div>
      <ul
        className={twMerge(
          "absolute top-16.5 left-0 px-2 py-2 w-full md:text-[0.8125rem] md:tracking-tight bg-white dark:bg-gray-700 rounded-lg shadow-sm text-[0.75rem] duration-300 transition-all ease-out z-10",
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-4 opacity-0 pointer-events-none",
        )}
      >
        {state.map((val) => (
          <ListItem key={val}>{val}</ListItem>
        ))}
      </ul>
    </div>
  );
}
