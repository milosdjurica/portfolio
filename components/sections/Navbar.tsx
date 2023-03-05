import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Navbar() {
  const links = [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/about",
      title: "About",
    },
    {
      url: "/projects",
      title: "Projects",
    },
    {
      url: "/skills",
      title: "Skills",
    },
    {
      url: "/resume",
      title: "Resume",
    },
    {
      url: "/contact",
      title: "Contact",
    },
  ];

  const router = useRouter();
  const baseClassName = "cursor-pointer lg:text-lg";

  return (
    <nav>
      <ul className="hidden md:flex px-4 py-2 space-x-5  lg:space-x-10">
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
