import { useContext } from "react";
import { BgContext } from "../context/BgContext";

const ProjectDesc = () => {
  const { colorScheme } = useContext(BgContext);
  return (
    <div
      className={`border min-w-[300px] order-1 md:order-2  py-8 pl-6  relative md:col-span-3 lg:col-span-2  rounded-3xl
        flex flex-col gap-y-8 md:gap-y-12
        ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text} ${colorScheme.bgopacity} ${colorScheme.text}`}
    >
      {" "}
      <div className="flex flex-col gap-y-2">
        <h2 className="uppercase text-gray-400 text-sm  tracking-widest">
          DESCRIPTION
        </h2>
        <p className="text-xl">
          Managing finances with tools for tracking expenses and budgeting
        </p>
      </div>
      <div className="flex flex-col gap-y-2">
        <h2 className="uppercase text-gray-400 text-sm  tracking-widest">
          CONTEXT
        </h2>
        <p className="leading-loose text-xl  md:max-w-[450px]  lg:max-w-[650px]">
          An app that is a powerful tool designed to help users manage their
          financial responsibilities effectively. The app offers a range of
          features, including credit card tracking, transaction management,
          subscription and bill management, expense control, and budgeting
          tools.
        </p>
      </div>
      <div>
        <button className="px-3 py-2 text-lg rounded-xl border">
          Check the app
        </button>
      </div>
    </div>
  );
};

export default ProjectDesc;
