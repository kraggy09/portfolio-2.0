import { useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { BgContext } from "../context/BgContext";

const ProjectStack = ({ data }) => {
  const { colorScheme } = useContext(BgContext);
  return (
    <div
      className={`border py-8 pl-6 order-2 md:order-1 col-span-1 md:col-span-2 lg:col-span-1 relative  flex flex-col gap-y-5 md:gap-y-8 rounded-3xl ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text} ${colorScheme.bgopacity} ${colorScheme.text}`}
    >
      <div className="flex flex-col gap-y-2">
        <h3 className="uppercase text-gray-400 text-sm tracking-widest">
          COMPANY
        </h3>
        <p className="text-lg">{data.company}</p>
      </div>
      <div className="flex flex-col gap-y-2">
        <h3 className="uppercase text-gray-400 text-sm tracking-widest">
          MY ROLE
        </h3>
        <p className="text-lg">{data.role}</p>
      </div>
      <div className="flex flex-col gap-y-2">
        <h3 className="uppercase text-gray-400 text-sm tracking-widest">
          TOOLS
        </h3>
        <ul className="flex flex-col gap-1">
          {data.tools.map((t) => (
            <li key={t} className="text-lg">
              {t}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-y-2">
        <h3 className="uppercase text-gray-400 text-sm tracking-widest">
          TIMELINE
        </h3>
        <p className="text-lg">{data.timeline}</p>
      </div>
    </div>
  );
};

// Define PropTypes
ProjectStack.propTypes = {
  data: PropTypes.shape({
    company: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    timeline: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectStack;
