import Link from "next/link";

interface TagProp {
  label: string;
}

export default function Tag({ label }: TagProp) {
  return (
    <Link
      href={`/countries/${label}`}
      type="button"
      className="w-24 h-7 text-[0.75rem] flex items-center justify-center bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 shadow-sm hover:cursor-pointer"
    >
      {label}
    </Link>
  );
}
