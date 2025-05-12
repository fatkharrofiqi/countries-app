import type { ReactNode } from "react";

interface ListItemProp {
  children: ReactNode;
  click: () => void;
}

export default function ListItem({ children, click }: ListItemProp) {
  return (
    <li
      className="hover:bg-gray-100 dark:hover:bg-gray-600 px-4 py-2 rounded-md cursor-pointer"
      onClick={() => click()}
      onKeyDown={() => {}}
    >
      {children}
    </li>
  );
}
