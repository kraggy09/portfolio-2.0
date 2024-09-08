import { useContext } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BgContext } from "../context/BgContext";

const Resume = () => {
  const { colorScheme } = useContext(BgContext);
  return (
    <section
      className={`border row-span-5 overflow-hidden rounded-3xl flex flex-col gap-y-4 p-6 ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text}  ${colorScheme.bgopacity} ${colorScheme.text}`}
      aria-labelledby="resume-header"
      id="resume"
    >
      <h2
        id="resume-header"
        className="uppercase text-gray-400 text-lg tracking-widest"
      >
        Resume
      </h2>
      <IoDocumentTextOutline
        scale={50}
        size={150}
        color={colorScheme.color}
        aria-hidden="true"
        className="mx-auto"
      />
      <a
        href="https://drive.google.com/file/d/1uBmZJx8gtZDs3Kw6KtsIp5iYJ_L2XHMt/preview"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Resume"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
