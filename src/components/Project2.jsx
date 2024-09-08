import { useContext } from "react";
import { BgContext } from "../context/BgContext";

const Project2 = () => {
  const { colorScheme } = useContext(BgContext);
  return (
    <div
      className={`border  col-span-3 row-span-4 rounded-3xl flex justify-center items-center  ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text}  ${colorScheme.bgopacity} ${colorScheme.text}`}
      aria-label="Project Placeholder 2"
      id="P2"
    >
      P2
    </div>
  );
};

export default Project2;
