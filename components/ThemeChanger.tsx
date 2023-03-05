import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeChanger() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  if (currentTheme === "dark") {
    return (
      <BsMoon
        className="w-12 h-10 p-2 themeChanger"
        role="button"
        onClick={() => setTheme("light")}
      />
    );
  } else {
    return (
      <BsSun
        className="w-12 h-10 p-2 themeChanger"
        role="button"
        onClick={() => setTheme("dark")}
      />
    );
  }
}
