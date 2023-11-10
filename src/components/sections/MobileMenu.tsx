"use client";

import { links } from "@/constants/links";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FiMenu, FiXCircle } from "react-icons/fi";
import Icons from "../Icons";

function MobileMenu() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const router = useRouter();

  const pathname = usePathname();

  return (
    <div className="md:hidden">
      {isOpenMenu ? (
        <>
          <div className="fixed z-10 top-0 left-0 w-full h-full bg-black/80">
            <div
              className="relative mx-auto my-10 p-6 w-[80%] sm:w-[80%]
              space-y-10 bg-black/90 z-10
              rounded-lg shadow-lg shadow-[#18D26E]"
            >
              <div className="flex justify-between green-underline pb-3">
                <Icons />
                <FiXCircle
                  className="hover:green-text cursor-pointer text-3xl"
                  onClick={() => setIsOpenMenu(!isOpenMenu)}
                />
              </div>

              <div
                className="space-y-8 text-2xl font-semibold
              flex flex-col justify-start items-start 
              "
              >
                {links.map((link): any => {
                  if (pathname === link.url) {
                    return (
                      <h3 key={link.url} className="green-text">
                        {link.title}
                      </h3>
                    );
                  }
                  return (
                    <Link
                      key={link.url}
                      onClick={() => setIsOpenMenu(!isOpenMenu)}
                      href={link.url}
                    >
                      <p>{link.title}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      ) : (
        <FiMenu
          className="text-3xl cursor-pointer hover:green-text"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        />
      )}
    </div>
  );
}

export default MobileMenu;
