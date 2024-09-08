import { useContext } from "react";
import { BgContext } from "../context/BgContext";

const Project3 = () => {
  const { colorScheme } = useContext(BgContext);
  return (
    <div
      className={`border  col-span-4 row-span-4 rounded-3xl flex justify-center items-center  ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text}  ${colorScheme.bgopacity} ${colorScheme.text}`}
      aria-label="Project Placeholder 3"
      id="P3"
    >
      P3
    </div>
  );
};

export default Project3;
