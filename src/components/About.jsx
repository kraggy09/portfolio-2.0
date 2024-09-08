import { useContext } from "react";
import { BgContext } from "../context/BgContext";

const About = () => {
  const { colorScheme } = useContext(BgContext);
  console.log(colorScheme);

  return (
    <article
      className={`border ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text}  ${colorScheme.bgopacity} ${colorScheme.text} col-span-6 row-span-4 flex px-6 justify-center gap-y-5 flex-col rounded-3xl `}
      aria-labelledby="intro-header"
      id="about-main"
    >
      <h1 id="intro-header" className="text-3xl font-semibold">
        Hi, I’m Kaif Shakh⎯
      </h1>
      <p className="text-xl text-gray-400">
        Full Stack Developer with hands-on experience in creating impactful
        webapps, currently based in Mumbai.
      </p>
    </article>
  );
};

export default About;
