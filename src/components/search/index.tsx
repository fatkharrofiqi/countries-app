import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="relative w-full max-w-sm">
      <div className="absolute inset-y-0 flex items-center px-8 pointer-events-none">
        <Search className="size-4 md:size-5" />
      </div>
      <input
        type="text"
        className="w-full pl-19 pr-6 py-5 text-[0.75rem] md:text-[0.875rem] placeholder:text-gray-500 dark:placeholder:text-white rounded-lg bg-white dark:bg-gray-700 shadwo-m focus:outline-2 focus:outline-gray-100 dark:focus:outline-gray-500 shadow-sm"
        placeholder="Search for a country..."
      />
    </div>
  );
}
