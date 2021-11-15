import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { FaDev } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import Link from "next/link";

import { ME } from "~/constants/share";

const socialURLs = [
  `https://twitter.com/${ME.username}`,
  `https://github.com/${ME.username}`,
  `https://dev.to/${ME.username}`,
  `https://linkedin.com/in/thoarrow`,
  `https://1drv.ms/b/s!Asetgy13Xz5Xgle-MD81Yr4oCYxL`,
];

const renderIcon = (url: string) => {
  const size = "1.5em";
  if (url.includes("twitter"))
    return <FiTwitter className=" stroke-current" size={size} />;
  if (url.includes("dev.to"))
    return <FaDev className="fill-current" size={size} />;
  if (url.includes("github"))
    return <FiGithub className="stroke-current" size={size} />;
  if (url.includes("1drv"))
    return <ImProfile className="stroke-current" size={size} />;
  if (url.includes("linkedin"))
    return <FiLinkedin className="stroke-current" size={size} />;
};

const getLabel = (url: string) => {
  if (url.includes("twitter")) return `Twitter @${ME.username}`;
  if (url.includes("dev.to")) return `DEV @${ME.username}`;
  if (url.includes("github")) return `Github @${ME.username}`;
  if (url.includes("linkedin")) return `LinkedIn @${ME.username}`;
};

const Footer = () => (
  <footer className="text-sm bg-gray-50 dark:bg-gray-950 px-8 pt-10 pb-12 sm:pt-14 sm:pb-16 dark:text-gray-400 lg:px-0 my-16 dark:bg-dark-blue bg-blue">
    <div className="md:max-w-[90rem] mx-auto">
      <h3 className="text-3xl font-bold">Hi, I'm Tho</h3>
    </div>
    <div className="md:max-w-[90rem] mx-auto grid md:grid-flow-col grid-flow-row lg:grid-cols-6 md:grid-cols-6 lg:gap-16 md:gap-8">
      {/* Col 1 */}
      <div className="md:col-span-3 md:pt-28 my-8 md:my-0">
        <p className="text-sm md:text-base">
          As a Software Engineer (SE) in Ho Chi Minh City. I interested to
          develop software to solve problems in real life.
          <br />
          Especially, I love writing blogs to inspire people and would like to
          contribute to the community.
        </p>
      </div>
      {/* Col 2 */}
      <div className="flex flex-col md:pt-8 my-8 md:my-0">
        <h4 className="mb-8 text-base md:text-lg font-light">Explore</h4>
        <ul className="flex gap-4 flex-col text-sm md:text-base ">
          <li className="hover:opacity-50">
            <Link href="/">
              <a className="block">Blog</a>
            </Link>
          </li>
          <li className="hover:opacity-50">
            <Link href="/portfolio">
              <a className="block">Portfolio</a>
            </Link>
          </li>
          <li className="hover:opacity-50">
            <Link href="/cv">
              <a className="block">Resume</a>
            </Link>
          </li>
        </ul>
      </div>
      {/* Col 3 */}
      <div className="md:col-span-2 md:pt-8 my-8 md:my-0">
        <h4 className="mb-8 text-lg font-light">Info</h4>
        <ul className="text-sm md:text-base">
          <li>thoarrown@gmail.com</li>
          <li>+84.388.199.772</li>
        </ul>
        <div className="flex flex-row mt-10 gap-4">
          {socialURLs.map((url) => (
            <a
              key={url}
              className="text-darker-blue hover:text-gray dark:text-white dark:hover:text-blue"
              title={getLabel(url)}
              aria-label={getLabel(url)}
              href={url}
              rel="nofollow"
              target="_blank"
            >
              {renderIcon(url)}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
