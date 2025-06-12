import Experience from "../components/Experience";
import Combined from "../components/Combined";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(useGSAP);

const AboutPage = () => {
  const navigate = useNavigate();

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from("#about-experience", {
      opacity: 0,
      x: -80,
      duration: 1,
      ease: "power3.out",
    }).from(
      "#about-combined",
      {
        opacity: 0,
        x: 80,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.8"
    );
  }, []);

  return (
    <div className="relative lg:p-3 p-2 flex items-center justify-center transition duration-500 ease-in min-h-screen w-full overflow-hidden">
      <div className="relative  h-full flex items-center  flex-col w-full gap-4 border-2 border-gray-400 rounded-3xl min-h-[95vh] p-2 lg:p-5">
        <div className="my-12 ">X</div>
        <button
          onClick={() => navigate("/")}
          className="absolute top-6 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/70 text-white transition-colors duration-300 z-10"
          aria-label="Close about page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="grid lg:gap-x-9 lg:px-16 gap-y-8 gap-x-3 md:grid-cols-2 ">
          <div id="about-experience">
            <Experience />
          </div>
          <div id="about-combined">
            <Combined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
