import { useContext, useRef } from "react";
import { BgContext } from "../context/BgContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Switch = () => {
  const { colorScheme, isDarkMode, setIsDarkMode } = useContext(BgContext);
  const switchRef = useRef(null);
  const innerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      innerRef.current,
      { x: isDarkMode ? "100%" : "0%" },
      { x: isDarkMode ? "0%" : "100%", duration: 0.3, ease: "power3.inOut" }
    );
  }, [isDarkMode]);

  return (
    <div
      className={` order-8 col-span-5 md:col-span-3 xl:col-span-2 row-span-2 xl:row-span-4 rounded-3xl flex justify-center items-center ${colorScheme.bg} ${colorScheme.text} ${colorScheme.bgopacity}`}
      aria-label="Theme Switcher"
      id="switch"
      ref={switchRef}
    >
      <div
        onClick={() => setIsDarkMode((prev) => !prev)}
        className="bg-gray-400 flex justify-center  rounded-xl min-w-20 min-h-8 relative overflow-hidden cursor-pointer"
      >
        <div
          ref={innerRef}
          className="w-1/2  bg-black rounded-xl h-full absolute top-0 left-0 flex items-center justify-center transition-transform duration-300 ease-in-out"
        >
          {isDarkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="w-6 h-6 text-yellow-400" // Use Tailwind classes for styling
            >
              <g fill="currentColor">
                <path d="M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z"></path>
              </g>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="w-6 h-6 text-yellow-400" // Use Tailwind classes for styling
            >
              <g fill="currentColor">
                <path d="M120,40V32a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-8-8A8,8,0,0,0,50.34,61.66Zm0,116.68-8,8a8,8,0,0,0,11.32,11.32l8-8a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l8-8a8,8,0,0,0-11.32-11.32l-8,8A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l8,8a8,8,0,0,0,11.32-11.32ZM40,120H32a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Zm88,88a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-8A8,8,0,0,0,128,208Zm96-88h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z"></path>
              </g>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default Switch;
