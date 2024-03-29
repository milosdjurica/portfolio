"use client";

import React from "react";
import { MobileMenu } from "./MobileMenu";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-3xl sm:text-4xl font-bold">Miloš Đurica</h1>
      <Navbar />
      <div className="md:hidden">
        <MobileMenu />
      </div>
    </header>
  );
}

export default Header;
