import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

export const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const onClickToggleDark = () => setTheme(theme === "dark" ? "light" : "dark");

  const [isMounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="body">
        <h2>Tho Arrow</h2>
        <p>Software Engineer</p>
      </div>
      <div>
        <Link href={"/"}>
          <a>Blog</a>
        </Link>
        <Link href={"/projects"}>
          <a>Projects</a>
        </Link>
        <Link href={"/about"}>
          <a>About</a>
        </Link>

        <button onClick={onClickToggleDark}>
          {isMounted ? (theme === "dark" ? "🌙" : "☀️") : "🌤️"}
        </button>
      </div>
    </div>
  );
};
