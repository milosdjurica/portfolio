"use client";

import { links } from "@/src/constants/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const pathname = usePathname();
  const baseClassName = "font-bold cursor-pointer lg:text-lg";

  return (
    <nav>
      <ul className="hidden md:flex px-4 py-2 space-x-5 lg:space-x-10">
        {links.map((el: any) => {
          return (
            <Link key={el.url} href={el.url}>
              <li
                className={
                  pathname === el.url
                    ? "green-underline " + baseClassName
                    : baseClassName
                }
              >
                {el.title}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
