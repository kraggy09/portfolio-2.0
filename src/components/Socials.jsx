import { useContext } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

import { MdOutlineWhatsapp } from "react-icons/md";

import { TbBrandLeetcode } from "react-icons/tb";
import { BgContext } from "../context/BgContext";
import SocialLink from "./SocialLink.jsx";

const socialMediaLinks = [
  {
    href: "https://www.linkedin.com/in/kaif-shaikh-bb2260194/",
    label: "LinkedIn Profile",
    Icon: CiLinkedin,
  },
  {
    href: "https://www.github.com/kraggy09",
    label: "GitHub Profile",
    Icon: FiGithub,
  },
  {
    href: "https://www.leetcode.com/kraggy",
    label: "LeetCode Profile",
    Icon: TbBrandLeetcode,
  },
  {
    href: "https://x.com/kaifshaikh_2002",
    label: "X Profile",
    Icon: BsTwitterX,
  },
  {
    href: "https://www.instagram.com/kaifshaikh_2002/",
    label: "Instagram Profile",
    Icon: FiInstagram,
  },
  {
    href: "https://api.whatsapp.com/send?phone=919607744000&text=Hi+Kaif+Shaikh",
    label: "Whatsapp Profile",
    Icon: MdOutlineWhatsapp,
  },
];

const Socials = () => {
  const { colorScheme } = useContext(BgContext);

  return (
    <nav
      className="row-span-3 rounded-3xl gap-4 items-center p-2 grid grid-cols-3 sm:grid-cols-6  xl:grid-cols-3 xl:grid-rows-2 order-3 xl:order-1"
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
