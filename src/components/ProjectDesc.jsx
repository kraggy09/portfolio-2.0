import { useContext } from "react";
import { BgContext } from "../context/BgContext";

const ProjectDesc = () => {
  const { colorScheme } = useContext(BgContext);
  return (
    <div
      className={`border min-w-[300px]  relative md:col-span-3 lg:col-span-2  rounded-3xl  ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text} ${colorScheme.bgopacity} ${colorScheme.text}`}
    >
      {" "}
      <div>
        <h2>DESCRIPTION</h2>
        <p>Managing finances with tools for tracking expenses and budgeting</p>
      </div>
      <div>
        <h2>CONTEXT</h2>
        <p className="max-w-[600px]">
          An app that is a powerful tool designed to help users manage their
          financial responsibilities effectively. The app offers a range of
          features, including credit card tracking, transaction management,
          subscription and bill management, expense control, and budgeting
          tools.
        </p>
      </div>
      <button>Check the app</button>
    </div>
  );
};

export default ProjectDesc;
