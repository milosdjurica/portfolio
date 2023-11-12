export default MobileMenu;

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
          <DropdownMenuItem
            asChild
            key={link.url}
            className={`${
              pathname === link.url ? "text-[#17D26E]" : ""
            } text-lg p-3 hover:text-[#17D26E] font-semibold`}
          >
            <Link href={link.url}>
              <span>{link.title}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
