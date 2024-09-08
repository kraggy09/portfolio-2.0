import { useContext } from "react";
import { BgContext } from "../context/BgContext";

const Project1 = () => {
  const { colorScheme } = useContext(BgContext);
  return (
    <div
      className={`border  col-span-3 row-span-4 rounded-3xl flex justify-center items-center  ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text}  ${colorScheme.bgopacity} ${colorScheme.text}`}
      aria-label="Project Placeholder 1"
      id="P1"
    >
      P1
    </div>
  );
};

export default Project1;
