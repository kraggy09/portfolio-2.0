import { useContext } from "react";
import { BgContext } from "../context/BgContext";

const Stack = () => {
  const { colorScheme } = useContext(BgContext);
  return (
    <div
      className={`border order-7 col-span-7 md:col-span-9 xl:col-span-4 row-span-2 xl:row-span-4 rounded-3xl flex justify-center items-center  ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text}  ${colorScheme.bgopacity} ${colorScheme.text}`}
      aria-label="Stack Section"
      id="stack"
    >
      Stack
    </div>
  );
};

export default Stack;
