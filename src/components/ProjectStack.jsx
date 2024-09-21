import { useContext } from "react";
import { BgContext } from "../context/BgContext";

const ProjectStack = () => {
  const { colorScheme } = useContext(BgContext);
  return (
    <div
      className={`border py-8 pl-6 order-2 md:order-1 col-span-1 md:col-span-2 lg:col-span-1 relative  flex flex-col gap-y-5 md:gap-y-8 rounded-3xl  ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text} ${colorScheme.bgopacity} ${colorScheme.text}`}
    >
      <div className="flex flex-col gap-y-2">
        <h3 className="uppercase text-gray-400 text-sm  tracking-widest">
          COMPANY
        </h3>
        <p className="text-lg">Shrink</p>
      </div>
      <div className="flex flex-col gap-y-2">
        <h3 className="uppercase text-gray-400 text-sm  tracking-widest">
          MY ROLE
        </h3>
        <p className="text-lg">Full Stack Developer</p>
      </div>
      <div className="flex flex-col gap-y-2">
        <h3 className="uppercase text-gray-400 text-sm  tracking-widest">
          TOOLS
        </h3>
        <ul className="flex flex-col gap-1">
          <li className="text-lg">ReactJS</li>
          <li className="text-lg">MongoDB</li>
          <li className="text-lg">Express Js</li>
          <li className="text-lg">NodeJs</li>
          <li className="text-lg">Web speech API</li>
          <li className="text-lg">ReactJS</li>
        </ul>
      </div>
      <div className="flex flex-col gap-y-2">
        <h3 className="uppercase text-gray-400 text-sm  tracking-widest">
          TIMELINE
        </h3>
        <p className="text-lg"> 2021-2022</p>
      </div>
    </div>
  );
};

export default ProjectStack;
