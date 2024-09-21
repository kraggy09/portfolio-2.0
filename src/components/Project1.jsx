import { useContext } from "react";
import { BgContext } from "../context/BgContext";
import { useNavigate } from "react-router-dom";

const Project1 = () => {
  const { colorScheme } = useContext(BgContext);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/work/ai-intervue");
      }}
      className={`relative border hover:cursor-pointer group col-span-12 md:col-span-6 xl:order-2 order-4 xl:col-span-3 md:row-span-3 row-span-2 xl:row-span-4 rounded-3xl flex justify-center items-center overflow-hidden ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text} ${colorScheme.bgopacity} ${colorScheme.text}`}
      aria-label="Project Placeholder 1"
      id="P1"
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

export default Project1;
