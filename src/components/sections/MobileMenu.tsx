// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { FiMenu, FiXCircle } from "react-icons/fi";

// import Icons from "../Icons";
// import { links } from "@/src/constants/links";

// export function MobileMenu() {
//   const [isOpenMenu, setIsOpenMenu] = useState(false);

//   const pathname = usePathname();

//   return (
//     <div className="md:hidden">
//       {isOpenMenu ? (
//         <>
//           <div className="fixed z-10 top-0 left-0 w-full h-full bg-black/80">
//             <div
//               className="relative mx-auto my-10 p-6 w-[60%]
//               space-y-10 bg-black/90 z-10
//               rounded-lg shadow-lg shadow-[#18D26E]"
//             >
//               <div className="flex justify-between green-underline pb-3">
//                 <Icons />
//                 <FiXCircle
//                   className="hover:green-text cursor-pointer text-3xl"
//                   onClick={() => setIsOpenMenu(!isOpenMenu)}
//                 />
//               </div>

//               <div
//                 className="space-y-8 text-2xl font-semibold
//               flex flex-col justify-start items-start
//               "
//               >
//                 {links.map((link): any => {
//                   if (pathname === link.url) {
//                     return (
//                       <h3 key={link.url} className="green-text">
//                         {link.title}
//                       </h3>
//                     );
//                   }
//                   return (
//                     <Link
//                       key={link.url}
//                       onClick={() => setIsOpenMenu(!isOpenMenu)}
//                       href={link.url}
//                     >
//                       <p>{link.title}</p>
//                     </Link>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </>
//       ) : (
//         <FiMenu
//           className="text-3xl cursor-pointer hover:green-text"
//           onClick={() => setIsOpenMenu(!isOpenMenu)}
//         />
//       )}
//     </div>
//   );
// }

export default MobileMenu;

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { links } from "@/src/constants/links";

import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import Icons from "../Icons";
import { usePathname } from "next/navigation";

export function MobileMenu() {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <FiMenu className="w-[30px] h-[30px] text-white" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 mr-4 md:hidden 
      bg-black/95 text-white flex flex-col justify-between
      shadow-md shadow-[#18D26E] border-lg border-[#18D26E]"
      >
        <div className="p-3 green-underline">
          <Icons />
        </div>
        {links.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            className={`${
              pathname === link.url ? "text-[#17D26E]" : ""
            } text-lg p-3 hover:text-[#17D26E] font-semibold`}
          >
            <span>{link.title}</span>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
