import { useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { BgContext } from "../context/BgContext";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

const ProjectDesc = ({ data }) => {
  const { colorScheme } = useContext(BgContext);
  return (
    <div
      className={`border min-w-[300px] order-1 md:order-2 py-8 pl-6 relative md:col-span-3 lg:col-span-2 rounded-3xl
        flex flex-col gap-y-8 md:gap-y-12
        ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text} ${colorScheme.bgopacity} ${colorScheme.text}`}
    >
      <div className="flex flex-col gap-y-2">
        <h2 className="uppercase text-gray-400 text-sm tracking-widest">
          DESCRIPTION
        </h2>
        <p className="text-xl">{data.description}</p>
      </div>
      <div className="flex flex-col gap-y-2">
        <h2 className="uppercase text-gray-400 text-sm tracking-widest">
          CONTEXT
        </h2>
        <p className="leading-loose text-xl md:max-w-[450px] lg:max-w-[650px]">
          {data.context}
        </p>
      </div>
      <div className="flex gap-x-4">
        <a
          href={data.links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 flex items-center justify-center gap-x-3 text-lg rounded-xl border"
        >
          Live <CiGlobe />
        </a>
        <a
          href={data.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 flex items-center justify-center gap-x-3 text-lg rounded-xl border"
        >
          GitHub <FaGithub />
        </a>
      </div>
    </div>
  );
};

// Define PropTypes
ProjectDesc.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    links: PropTypes.shape({
      live: PropTypes.string.isRequired,
      github: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProjectDesc;
