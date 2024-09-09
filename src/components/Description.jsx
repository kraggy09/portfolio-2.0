import { useContext } from "react";
import { BgContext } from "../context/BgContext";

const Description = () => {
  const { colorScheme } = useContext(BgContext);
  return (
    <article
      id="description"
      className={`border  col-span-9 order-3 xl:col-span-5 row-span-2 xl:row-span-4 xl:order-5 rounded-3xl flex flex-col p-6  gap-y-4  ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text}  ${colorScheme.bgopacity} ${colorScheme.text}`}
      aria-labelledby="about-header"
    >
      <h2
        id="about-header"
        className="uppercase text-gray-400 text-lg tracking-widest"
      >
        About
      </h2>

      <p className="pr-16 text-xl font-semibold tracking-wide leading-snug">
        Driven full stack developer with a passion for creating efficient
        solutions and a knack for tackling complex challenges.
      </p>
    </article>
  );
};

export default Description;
