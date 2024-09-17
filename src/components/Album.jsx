import { useContext } from "react";
import { BgContext } from "../context/BgContext";

const Album = () => {
  const { colorScheme } = useContext(BgContext);

  return (
    <div
      className={`col-span-1 rounded-3xl ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text}  ${colorScheme.bgopacity} ${colorScheme.text}`}
    >
      Album
    </div>
  );
};

export default Album;
