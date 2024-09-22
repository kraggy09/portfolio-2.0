import { useContext } from "react";
import { BgContext } from "../context/BgContext";
import { useNavigate } from "react-router-dom";

const Project1 = () => {
  const { colorScheme } = useContext(BgContext);
  const navigate = useNavigate();

  const data = {
    name: "AI Intervue",
    type: "Web App",
    company: "Personal Project",
    role: "Full Stack Developer",
    tools: [
      "ReactJS",
      "MongoDB",
      "Express.js",
      " Node.js",
      " Gemini AI API",
      "Web Speech API",
    ],
    timeline: "Aug'24 - Sep'24",
    description:
      "AI-Intervue is a mock interview platform that uses AI to generate personalized questions and evaluate user performance. It simulates real interviews with speech interaction, helping users practice effectively.",
    context:
      "The AI-Intervue app offers users an efficient tool for practicing interviews, featuring a wide range of questions tailored to their tech stack. It integrates real-time speech capabilities, allowing for both text-to-speech and speech-to-text interactions to simulate an authentic interview experience.",
    problems: [
      "Many aspiring developers lack effective interview preparation tools that provide real-time feedback.",
      "There is often no personalized question bank tailored to an individual's tech stack.",
      "Current mock interview solutions don't simulate real interview environments, especially in terms of speech interaction.",
      "Users face challenges in evaluating their interview performance and improving their weak areas.",
    ],
    solutions: [
      "AI-Intervue uses AI-driven technology to generate personalized interview questions based on a user's chosen tech stack.",
      "Real-time text-to-speech and speech-to-text capabilities simulate an actual interview environment, enhancing the user's practice experience.",
      "The platform provides real-time performance evaluation, helping users identify and improve their weak points.",
      "A seamless and intuitive user interface makes the practice process engaging and stress-free.",
    ],
    images: [],
    links: {
      github: "https://github.com/kraggy09/ai-interview",
      live: "https://ai-intervue.vercel.app",
    },
  };
  return (
    <div
      onClick={() => {
        navigate("/work/ai-intervue", { state: data });
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
        AI-Intervue
      </div>
    </div>
  );
};

export default Project1;
