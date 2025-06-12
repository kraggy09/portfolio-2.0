import { useContext } from "react";
import { BgContext } from "../context/BgContext";

const ContactMe = () => {
  const { colorScheme } = useContext(BgContext);
  return (
    <div
      className={`border xl:order-7 col-span-12 md:flex hidden xl:col-span-6 order-9 row-span-4 rounded-3xl justify-center items-center ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text} ${colorScheme.bgopacity} ${colorScheme.text} flex flex-col gap-4 p-6`}
      aria-label="Contact Section"
      id="contact-me"
    >
      <h2 className="text-2xl font-semibold">Get in Touch</h2>
      <p className="text-gray-400 text-center">
        I'm currently available for freelance work and full-time opportunities.
        Let's discuss how we can work together to bring your ideas to life.
      </p>
      <div className="flex flex-col items-center gap-2">
        <a
          href="mailto:kaifshakh@gmail.com"
          className="text-blue-500 hover:underline"
        >
          kaifshakh@gmail.com
        </a>
        <p className="text-sm text-gray-500">Based in Bangalore, India</p>
      </div>
    </div>
  );
};

export default ContactMe;
