import React from "react";
import Navbar from "./Navbar";
import ThemeChanger from "../ThemeChanger";

function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-4xl green font-bold">Miloš Đurica</h1>
      <Navbar />
      {/* <ThemeChanger /> */}
    </header>
  );
}

export default Header;
