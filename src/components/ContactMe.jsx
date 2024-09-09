import { useContext } from "react";
import { BgContext } from "../context/BgContext";

const ContactMe = () => {
  const { colorScheme } = useContext(BgContext);
  return (
    <div
      className={`border xl:order-7 col-span-12 xl:col-span-6 order-9 row-span-4 rounded-3xl flex justify-center items-center  ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text}  ${colorScheme.bgopacity} ${colorScheme.text}`}
      aria-label="Design Section"
      id="contact-me"
    >
      Contact Me
    </div>
  );
};

export default ContactMe;
