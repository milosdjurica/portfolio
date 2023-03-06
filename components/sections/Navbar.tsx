import { links } from "@/constants/links";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Navbar() {
  const router = useRouter();
  const baseClassName = "font-bold cursor-pointer lg:text-lg";

  return (
    <nav>
      <ul className="hidden md:flex px-4 py-2 space-x-5 lg:space-x-10">
        {links.map((el: any) => {
          return (
            <Link key={el.url} href={el.url}>
              <li
                className={
                  router.pathname === el.url
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
