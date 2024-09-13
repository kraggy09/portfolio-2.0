import { useContext } from "react";
import { BgContext } from "../context/BgContext";

const Project3 = () => {
  const { colorScheme } = useContext(BgContext);
  return (
    <div
      className={`relative overflow-hidden border col-span-12 order-6 group xl:col-span-4 row-span-2 md:row-span-3 xl:row-span-4 rounded-3xl flex justify-center items-center ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text} ${colorScheme.bgopacity} ${colorScheme.text}`}
      aria-label="Project Placeholder 3"
      id="P3"
    >
      <img
        src="/p1.jpg"
        className="w-full h-full sm:h-auto md:h-full transition-transform duration-300 object-cover sm:object-contain md:object-cover rounded-3xl max-h-[300px]"
        alt=""
      />
      {/* Text appears and slides up on hover */}
      <div className="absolute bottom-4 right-4 z-10 text-white text-lg opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        Hello
      </div>
    </div>
  );
};

export default Project3;
