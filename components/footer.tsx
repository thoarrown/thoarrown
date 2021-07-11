import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { FaDev } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
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

const CopyRight = () => {
  return <div className="mt-4">Copyright © 2021 ThoArrow</div>;
};

const Footer = () => (
  <footer className="text-sm bg-gray-50 dark:bg-gray-950 px-8 pt-10 pb-12 sm:pt-14 sm:pb-16 border-t border-gray-200 dark:border-gray-800 dark:text-gray-400 lg:px-0">
    <div className="max-w-[90rem] mx-auto">
      <nav className="mt-6">
        <div className="mt-4 flex flex-row space-x-5">
          {socialURLs.map((url) => (
            <a
              key={url}
              className="text-darker-blue hover:text-gray dark:text-white dark:hover:text-blue"
              title={getLabel(url)}
              aria-label={getLabel(url)}
              href={url}
            >
              {renderIcon(url)}
            </a>
          ))}
        </div>
      </nav>
      <CopyRight />
    </div>
  </footer>
);

export default Footer;
