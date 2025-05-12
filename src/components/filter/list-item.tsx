import type { ReactNode } from "react";

interface ListItemProp {
  children: ReactNode;
}

export default function ListItem({ children }: ListItemProp) {
  return (
    <li className="hover:bg-gray-600 px-4 py-2 rounded-md cursor-pointer">
      {children}
    </li>
  );
}
