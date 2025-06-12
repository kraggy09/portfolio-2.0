import { useContext } from "react";

import Marquee from "react-fast-marquee";
import { BgContext } from "../context/BgContext";
import PropTypes from "prop-types";

const Stack = ({ css }) => {
  const { colorScheme, isDarkMode } = useContext(BgContext);

  const stacks = [
    "/html.png",
    "/css.png",
    "/js.png",
    "/reactjs.png",
    "/redux.png",
    "/express.png",
    "/nodejs.png",
    "/mongodb.png",
    "/git.png",
    "/postman.png",
  ];

  return (
    <div
      className={` ${css} relative px-6 overflow-hidden flex-col  ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text} ${colorScheme.bgopacity}`}
      aria-label="Stack Section"
      id="stack"
    >
      <h1 className="absolute top-10 left-5 text-3xl font-bold">Stack I Use</h1>
      <div className="mt-6">
        <Marquee
          pauseOnHover={true}
          className="hover:cursor-pointer"
          speed={20}
        >
          {/* Displaying the skills */}
          {stacks.map((skill, index) => (
            <div
              key={index}
              className={`p-2  mx-3   rounded-xl ${
                isDarkMode ? colorScheme.bg : "bg-slate-100"
              } ${colorScheme.bgopacity}`}
            >
              <img className="h-[50px] " src={skill} alt={`skill-${index}`} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

Stack.propTypes = {
  css: PropTypes.string.isRequired,
};

export default Stack;
