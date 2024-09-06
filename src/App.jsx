import { useContext, useEffect } from "react";
import { BgContext } from "./context/BgContext";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FiFacebook, FiGithub, FiInstagram, FiTwitter } from "react-icons/fi";
import { TbBrandLeetcode } from "react-icons/tb";

const App = () => {
  const { isDarkMode } = useContext(BgContext);

  useEffect(() => {
    // Apply background styles to the body
    if (isDarkMode) {
      document.body.style.background =
        "linear-gradient(rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0.94)), " +
        'url("https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png")';
      document.body.style.backgroundSize = "64px";
      document.body.style.backgroundRepeat = "repeat";
      document.body.style.backgroundColor = "#000";
    } else {
      document.body.style.background =
        "linear-gradient(rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.94)), " +
        'url("https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png")';
      document.body.style.backgroundSize = "64px";
      document.body.style.backgroundRepeat = "repeat";
      document.body.style.backgroundColor = "#fff";
    }

    // Clean up styles on component unmount
    return () => {
      document.body.style.background = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundColor = "";
    };
  }, [isDarkMode]);

  return (
    <div className="relative p-5 flex items-center justify-center h-full min-h-full w-full">
      <main
        className="relative grid grid-cols-12 h-full w-full gap-4 border-2 border-gray-400 rounded-3xl p-5"
        role="main"
      >
        {/* Main Content */}
        <section
          className="grid grid-cols-12 grid-rows-12 col-span-10 h-full w-full gap-4"
          aria-labelledby="about-section"
        >
          <article
            className="border border-gray-400 col-span-6 row-span-4 flex px-6 justify-center gap-y-5 flex-col rounded-3xl bg-white bg-opacity-50"
            aria-labelledby="intro-header"
          >
            <h1 id="intro-header" className="text-3xl font-semibold">
              Hi, I’m Kaif Shaikh ⎯
            </h1>
            <p className="text-xl text-gray-400">
              Full Stack Developer with hands-on experience in creating
              impactful webapps, currently based in Mumbai.
            </p>
          </article>

          {/* Placeholder Sections */}
          <div
            className="border border-gray-400 col-span-3 row-span-4 rounded-3xl flex justify-center items-center bg-white bg-opacity-5"
            aria-label="Project Placeholder 1"
          >
            P1
          </div>
          <div
            className="border border-gray-400 col-span-3 row-span-4 rounded-3xl flex justify-center items-center bg-white bg-opacity-5"
            aria-label="Project Placeholder 2"
          >
            P2
          </div>

          {/* Author Image */}
          <div
            aria-label="Website Author Photo"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/a/ACg8ocKTZ55merox7A6INcTdRruPq0MZCRBPVhZiiEFcZym0RbjG_Q1C_Q=s288 ")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="border border-gray-400 col-span-3 row-span-4 rounded-3xl flex justify-center items-center bg-white bg-opacity-5"
          >
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocKTZ55merox7A6INcTdRruPq0MZCRBPVhZiiEFcZym0RbjG_Q1C_Q=s288"
              alt="Kaif Shaikh"
              className="hidden"
            />
          </div>

          <article
            id="about-section"
            className="border border-gray-400 col-span-5 row-span-4 rounded-3xl flex flex-col p-6 bg-white bg-opacity-5 gap-y-4"
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

          {/* Additional Content Sections */}
          <div
            className="border border-gray-400 col-span-4 row-span-4 rounded-3xl flex justify-center items-center bg-white bg-opacity-5"
            aria-label="Project Placeholder 3"
          >
            P3
          </div>
          <div
            className="border border-gray-400 col-span-5 row-span-4 rounded-3xl flex justify-center items-center bg-white bg-opacity-5"
            aria-label="Design Section"
          >
            Design
          </div>
          <div
            className="border border-gray-400 col-span-4 row-span-4 rounded-3xl flex justify-center items-center bg-white bg-opacity-5"
            aria-label="Stack Section"
          >
            Stack
          </div>
          <div
            className="border border-gray-400 col-span-3 row-span-4 rounded-3xl flex justify-center items-center bg-white bg-opacity-5"
            aria-label="Theme Switcher"
          >
            Switch
          </div>
        </section>

        {/* Sidebar Content */}
        <aside
          className="grid grid-rows-12 col-span-2 gap-5"
          role="complementary"
        >
          {/* Social Icons */}
          <nav
            className="row-span-3 rounded-3xl gap-4 items-center p-2 grid grid-cols-3 grid-rows-2"
            aria-label="Social Media Links"
          >
            <a
              href="https://www.linkedin.com"
              className="bg-white border border-gray-400 bg-opacity-15 m-auto p-3 rounded-3xl"
              aria-label="LinkedIn Profile"
            >
              <CiLinkedin size={40} />
            </a>
            <a
              href="https://www.github.com"
              className="bg-white border border-gray-400 bg-opacity-15 m-auto p-3 rounded-3xl"
              aria-label="GitHub Profile"
            >
              <FiGithub size={40} />
            </a>
            <a
              href="https://www.leetcode.com"
              className="bg-white border border-gray-400 bg-opacity-15 m-auto p-3 rounded-3xl"
              aria-label="LeetCode Profile"
            >
              <TbBrandLeetcode size={40} />
            </a>
            <a
              href="https://www.twitter.com"
              className="bg-white border border-gray-400 bg-opacity-15 m-auto p-3 rounded-3xl"
              aria-label="Twitter Profile"
            >
              <FiTwitter size={40} />
            </a>
            <a
              href="https://www.instagram.com"
              className="bg-white border border-gray-400 bg-opacity-15 m-auto p-3 rounded-3xl"
              aria-label="Instagram Profile"
            >
              <FiInstagram size={40} />
            </a>
            <a
              href="https://www.facebook.com"
              className="bg-white border border-gray-400 bg-opacity-15 m-auto p-3 rounded-3xl"
              aria-label="Facebook Profile"
            >
              <FiFacebook size={40} />
            </a>
          </nav>

          {/* Resume Section */}
          <section
            className="border border-gray-400 row-span-5 overflow-hidden rounded-3xl flex flex-col gap-y-4 p-6 bg-white bg-opacity-5"
            aria-labelledby="resume-header"
          >
            <h2
              id="resume-header"
              className="uppercase text-gray-400 text-lg tracking-widest"
            >
              Resume
            </h2>
            <IoDocumentTextOutline scale={50} size={150} aria-hidden="true" />
            <a
              href="https://drive.google.com/file/d/1uBmZJx8gtZDs3Kw6KtsIp5iYJ_L2XHMt/preview"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
            >
              Download Resume
            </a>
          </section>

          {/* Contact Section */}
          <section
            className="border border-gray-400 row-span-4 rounded-3xl flex justify-center items-center bg-white bg-opacity-5"
            aria-labelledby="contact-header"
          >
            <h2 id="contact-header">Contact</h2>
          </section>
        </aside>
      </main>
    </div>
  );
};

export default App;
