"use client";
import { ChevronDown, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import ListItem from "./list-item";

interface FilterByRegionProp {
  filter: (keyword: string) => void;
  regions: string[];
}

export default function FilterByRegion({
  filter,
  regions,
}: FilterByRegionProp) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>();

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

  useEffect(() => {
    if (selected !== undefined) {
      filter(selected);
    }
  }, [selected, filter]);

  return (
    <div
      ref={dropdownRef}
      className="relative max-w-1/2 md:max-w-[15rem] hover:cursor-pointer select-none w-full"
    >
      <div
        className={twMerge(
          "flex items-center justify-between px-6 py-5 bg-white dark:bg-gray-700 rounded-lg shadow-sm",
          isOpen ? "outline-2 dark:outline-gray-500 outline-gray-100" : "",
        )}
      >
        <p
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={() => {}}
          className="text-[0.75rem] md:text-[0.8125rem] md:tracking-tight text-gray-500 dark:text-white"
        >
          {selected ?? "Filter by Region"}
        </p>
        {selected ? (
          <X
            size={12}
            onClick={() => {
              setSelected(undefined);
              setIsOpen(false);
              filter("");
            }}
          />
        ) : (
          <ChevronDown
            size={12}
            className={twMerge(
              isOpen ? "-rotate-180" : "-rotate-0",
              "duration-300",
            )}
          />
        )}
      </div>
      <ul
        className={twMerge(
          "absolute top-16.5 left-0 px-2 py-2 w-full md:text-[0.8125rem] md:tracking-tight bg-white dark:bg-gray-700 rounded-lg shadow-sm text-[0.75rem] duration-300 transition-all ease-out z-2",
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-4 opacity-0 pointer-events-none",
        )}
      >
        {regions?.map((val) => (
          <ListItem
            key={val}
            click={() => {
              setSelected(val);
              setIsOpen(false);
            }}
          >
            {val}
          </ListItem>
        ))}
      </ul>
    </div>
  );
}
