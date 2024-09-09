import { useContext } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FiFacebook, FiGithub, FiInstagram, FiTwitter } from "react-icons/fi";
import { TbBrandLeetcode } from "react-icons/tb";
import { BgContext } from "../context/BgContext";
import SocialLink from "./SocialLink.jsx";

const socialMediaLinks = [
  {
    href: "https://www.linkedin.com",
    label: "LinkedIn Profile",
    Icon: CiLinkedin,
  },
  { href: "https://www.github.com", label: "GitHub Profile", Icon: FiGithub },
  {
    href: "https://www.leetcode.com",
    label: "LeetCode Profile",
    Icon: TbBrandLeetcode,
  },
  {
    href: "https://www.twitter.com",
    label: "Twitter Profile",
    Icon: FiTwitter,
  },
  {
    href: "https://www.instagram.com",
    label: "Instagram Profile",
    Icon: FiInstagram,
  },
  {
    href: "https://www.facebook.com",
    label: "Facebook Profile",
    Icon: FiFacebook,
  },
];

const Socials = () => {
  const { colorScheme } = useContext(BgContext);

  return (
    <nav
      className="row-span-3 rounded-3xl gap-4 items-center p-2 grid grid-cols-6 xl:grid-cols-3 xl:grid-rows-2 order-3 xl:order-1"
      aria-label="Social Media Links"
      id="socials"
    >
      {socialMediaLinks.map((social) => (
        <SocialLink
          key={social.href}
          href={social.href}
          label={social.label}
          Icon={social.Icon}
          colorScheme={colorScheme}
        />
      ))}
    </nav>
  );
};

export default Socials;
