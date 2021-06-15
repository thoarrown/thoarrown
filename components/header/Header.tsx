import React, { useCallback } from "react";
import Link from "next/link";
import Router from "next/router";
import { useTheme } from "next-themes";

export const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const onClickToggleDark = () => setTheme(theme === "dark" ? "light" : "dark");

  const [isMounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const handleHome = useCallback(() => Router.push("/"), []);
  return (
    <div className="bg-white-opacity dark:bg-darker-blue-opacity py-4 md:px-6 px-4 md:fixed w-full text-darker-blue dark:text-white border-b-[1px] border-blue ">
      <div className="md:max-w-[100rem] mx-auto flex justify-between items-center md:flex-row flex-col relative">
        <div className="cursor-pointer" onClick={handleHome}>
          <h2 className="md:text-2xl text-lg font-medium text-center md:text-left ">
            ThoArrow
          </h2>
          <p className="md:text-sm text-xs text-center md:text-left ">
            Software Engineer
          </p>
        </div>
        <div className="inline-block mt-2 md:mt-0">
          {menu.map((item, idx) => (
            <Link href={item.slug} key={`menu-${idx}`}>
              <a className="font-semibold md:ml-10 ml-6 hover:text-blue ">
                {item.title}
              </a>
            </Link>
          ))}
          <button
            className="md:ml-10 md:mr-10 self-end absolute right-0 top-0 md:relative"
            onClick={onClickToggleDark}
          >
            {isMounted ? (theme === "dark" ? "🌙" : "☀️") : "🌤️"}
          </button>
        </div>
      </div>
    </div>
  );
};

const menu = [
  { title: "Blog", slug: "/" },
  {
    title: "Projects",
    slug: "/projects",
  },
  { title: "About", slug: "/about" },
];
