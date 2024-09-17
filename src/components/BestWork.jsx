import { useContext } from "react";
import { BgContext } from "../context/BgContext";

const BestWork = () => {
  const { colorScheme } = useContext(BgContext);
  return (
    <div
      className={`grid overflow-hidden  px-8 col-span-1 min-w-full  py-8 rounded-3xl row-span-3 ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text}  ${colorScheme.bgopacity} ${colorScheme.text}`}
    >
      BestWork
    </div>
  );
};

export default BestWork;
