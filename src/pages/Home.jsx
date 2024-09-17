import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Project1 from "../components/Project1";
import About from "../components/About";
import Project2 from "../components/Project2";
import ProfilePic from "../components/ProfilePic";
import Description from "../components/Description";
import Project3 from "../components/Project3";
import ContactMe from "../components/ContactMe";
import Stack from "../components/Stack";
import Switch from "../components/Switch";

import Resume from "../components/Resume";
import Random from "../components/Random";
import Socials from "../components/Socials";
// import gsap from "gsap";
gsap.registerPlugin(useGSAP);
const Home = () => {
  useGSAP(() => {
    // First timeline for section 1 animations
    let tl1 = gsap.timeline();
    tl1
      .from("#about-main", {
        opacity: 0,
        y: -150,
        duration: 1,
        ease: "power3.out",
      })
      .from(
        "#P1",
        {
          opacity: 0,
          y: -150,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .from(
        "#P2",
        {
          opacity: 0,
          y: -150,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .from(
        "#socials a",
        {
          opacity: 0,
          y: -150,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.8"
      );

    // Second timeline for profile and resume animations
    let tl2 = gsap.timeline();
    tl2
      .from("#profile-pic", {
        x: -300,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
      .from(
        "#resume",
        {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      );

    // Third timeline for contact, stack, and switch animations
    let tl3 = gsap.timeline();
    tl3
      .from("#contact-me", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
      .from(
        "#stack",
        {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .from(
        "#switch",
        {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .from(
        "#random",
        {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      );
  }, []);
  return (
    <div className="relative lg:p-5 p-2 flex items-center justify-center transition duration-500 ease-in min-h-screen w-full overflow-hidden">
      <main
        className="relative grid grid-cols-12 h-full w-full gap-4 border-2 border-gray-400 rounded-3xl min-h-[90vh] p-2 lg:p-5"
        role="main"
      >
        {/* Main Content */}
        <section
          className="grid grid-cols-12 grid-rows-12 md:grid-rows-14 xl:grid-rows-12 col-span-12   xl:col-span-10 h-full w-full gap-4"
          aria-labelledby="about-section"
        >
          {/* Placeholder Sections */}
          <About />
          <Project1 />
          <Project2 />
          <ProfilePic />
          <Description />
          {/* Additional Content Sections */}
          <Project3 />
          <ContactMe />
          <Stack css="border order-7 col-span-7 md:col-span-9 xl:col-span-4 row-span-2 xl:row-span-4 rounded-3xl flex justify-center items-center " />
          <Switch />
        </section>

        {/* Sidebar Content */}
        <aside
          className="grid grid-rows-12  xl:col-span-2 col-span-12 gap-5"
          role="complementary"
        >
          {/* Social Icons */}
          <Socials />
          {/* Resume Section */}
          <Resume />
          {/* Contact Section */}
          <Random />
        </aside>
      </main>
    </div>
  );
};

export default Home;
