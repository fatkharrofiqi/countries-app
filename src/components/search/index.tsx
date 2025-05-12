"use client";

import { Search } from "lucide-react";
import { useEffect, useState } from "react";

interface SearchInputProp {
  search: (keyword: string) => void;
}

export default function SearchInput({ search }: SearchInputProp) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      search(inputValue);
    }, 300);

    return () => clearTimeout(timeout);
  }, [inputValue, search]);

  return (
    <div className="relative w-full max-w-sm">
      <div className="absolute inset-y-0 flex items-center px-8 pointer-events-none">
        <Search className="size-4 md:size-5" />
      </div>
      <input
        type="text"
        className="w-full pl-19 pr-6 py-5 text-[0.75rem] md:text-[0.875rem] placeholder:text-gray-500 dark:placeholder:text-white rounded-lg bg-white dark:bg-gray-700 shadow-m focus:outline-2 focus:outline-gray-100 dark:focus:outline-gray-500 shadow-sm"
        placeholder="Search for a country..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}
