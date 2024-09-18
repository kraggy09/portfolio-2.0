import { useContext } from "react";
import { BgContext } from "../context/BgContext";

const AboutHolder = () => {
  const { colorScheme } = useContext(BgContext);
  return (
    <div className="row-span-3 grid grid-rows-2 gap-y-3 gap-x-5 grid-cols-2">
      <div
        className={`row-span-1 xl:row-span-2 xl:col-span-1 col-span-2 rounded-3xl border ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text}  ${colorScheme.bgopacity} ${colorScheme.text}`}
      ></div>
      <div
        className={`row-span-1 xl:row-span-2 xl:col-span-1 col-span-2 rounded-3xl border ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text}  ${colorScheme.bgopacity} ${colorScheme.text}`}
      ></div>
    </div>
  );
};

export default AboutHolder;
