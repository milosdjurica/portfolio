import React from "react";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-4xl font-bold">Miloš Đurica</h1>
      <Navbar />
      <MobileMenu />
    </header>
  );
}

export default Header;
