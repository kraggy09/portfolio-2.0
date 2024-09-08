import { useContext } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FiFacebook, FiGithub, FiInstagram, FiTwitter } from "react-icons/fi";
import { TbBrandLeetcode } from "react-icons/tb";
import { BgContext } from "../context/BgContext";

const Socials = () => {
  const { colorScheme } = useContext(BgContext);
  return (
    <nav
      className="row-span-3 rounded-3xl gap-4 items-center p-2 grid grid-cols-3 grid-rows-2"
      aria-label="Social Media Links"
      id="socials"
    >
      <a
        href="https://www.linkedin.com"
        className={`border m-auto p-3 rounded-3xl ${colorScheme.border} ${colorScheme.bg} ${colorScheme.bgopacity} ${colorScheme.text}`}
        aria-label="LinkedIn Profile"
      >
        <CiLinkedin size={40} />
      </a>
      <a
        href="https://www.github.com"
        className={`border m-auto p-3 rounded-3xl ${colorScheme.border} ${colorScheme.bg} ${colorScheme.bgopacity} ${colorScheme.text}`}
        aria-label="GitHub Profile"
      >
        <FiGithub size={40} />
      </a>
      <a
        href="https://www.leetcode.com"
        className={`border m-auto p-3 rounded-3xl ${colorScheme.border} ${colorScheme.bg} ${colorScheme.bgopacity} ${colorScheme.text}`}
        aria-label="LeetCode Profile"
      >
        <TbBrandLeetcode size={40} />
      </a>
      <a
        href="https://www.twitter.com"
        className={`border m-auto p-3 rounded-3xl ${colorScheme.border} ${colorScheme.bg} ${colorScheme.bgopacity} ${colorScheme.text}`}
        aria-label="Twitter Profile"
      >
        <FiTwitter size={40} />
      </a>
      <a
        href="https://www.instagram.com"
        className={`border m-auto p-3 rounded-3xl ${colorScheme.border} ${colorScheme.bg} ${colorScheme.bgopacity} ${colorScheme.text}`}
        aria-label="Instagram Profile"
      >
        <FiInstagram size={40} />
      </a>
      <a
        href="https://www.facebook.com"
        className={`border m-auto p-3 rounded-3xl ${colorScheme.border} ${colorScheme.bg} ${colorScheme.bgopacity} ${colorScheme.text}`}
        aria-label="Facebook Profile"
      >
        <FiFacebook size={40} />
      </a>
    </nav>
  );
};

export default Socials;
