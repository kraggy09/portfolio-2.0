import { useContext } from "react";
import { BgContext } from "../context/BgContext";

const Exp1 = () => {
  const { colorScheme } = useContext(BgContext);

  return (
    <article
      className={`relative row-span-5 border px-8  py-8 rounded-3xl overflow-hidden ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text} ${colorScheme.bgopacity}`}
    >
      <header>
        <h1
          className={`lg:text-3xl text-2xl py-3 my-3 pr-32 border-b-2 ${colorScheme.border}`}
        >
          What I&apos;m About
        </h1>
        <h2
          id="about-header"
          className="uppercase text-gray-400 text-sm py-3 tracking-widest"
        >
          My Story
        </h2>
      </header>

      <section>
        <p className="lg:text-xl text-lg max-w-[500px] lg:leading-loose leading-loose">
          I am a Full Stack Developer with a strong foundation in
          <span className="font-semibold text-green-500 italic"> MongoDB</span>,
          <span className="font-semibold text-gray-500 italic">
            {" "}
            Express.js
          </span>
          ,<span className="font-semibold text-green-800 italic"> Node.js</span>
          , and
          <span className="font-semibold text-sky-500 italic"> React.js</span>.
          I build scalable and efficient web applications, ensuring optimal
          performance and user experience. Additionally, I have experience in
          <span className="font-semibold text-blue-500 italic">
            {" "}
            automation
          </span>{" "}
          and
          <span className="font-semibold text-blue-500 italic">
            {" "}
            data scraping
          </span>
          , which complement my development skills.
        </p>
      </section>

      <section>
        <h2
          id="what-i-do-now"
          className="uppercase text-gray-400 text-sm mt-6 mb-3 tracking-widest"
        >
          What I Do Now
        </h2>
        <p className="lg:text-xl text-lg max-w-[500px] lg:leading-loose leading-loose">
          I’m focused on <strong>enhancing full-stack solutions</strong> and{" "}
          <strong>automation</strong>, leveraging my skills to drive efficiency
          and innovation. I also develop projects that improve processes and
          user experiences.
        </p>
      </section>
    </article>
  );
};

export default Exp1;
