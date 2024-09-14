import { useContext } from "react";
import { BgContext } from "../context/BgContext";
import { CgArrowTopRight } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Description = () => {
  const { colorScheme } = useContext(BgContext);
  const navigate = useNavigate();
  return (
    <article
      onClick={() => {
        navigate("/about");
        console.log("hi");
      }}
      id="description"
      className={`group border relative hover:cursor-pointer col-span-12 md:col-span-9 order-3 xl:col-span-5 row-span-2 xl:row-span-4 xl:order-5 rounded-3xl flex flex-col p-6 gap-y-4 ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text} ${colorScheme.bgopacity} ${colorScheme.text}`}
      aria-labelledby="about-header"
    >
      <h2
        id="about-header"
        className="uppercase text-gray-400 text-md sm:text-lg tracking-widest"
      >
        About
      </h2>

      <p className="md:pr-16 pr-2 text-lg sm:text-xl font-semibold tracking-wide leading-snug">
        Driven full stack developer with a passion for creating efficient
        solutions and a knack for tackling complex challenges.
      </p>
      <div className="absolute right-4 bottom-4 border rounded-full p-1 transition-transform ease-in-out duration-300  group-hover:scale-125 hover:cursor-pointer">
        <CgArrowTopRight className="sm:w-8 sm:h-8 w-5 h-5" />
      </div>
    </article>
  );
};

export default Description;
