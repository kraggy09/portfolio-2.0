import { useContext } from "react";
import { BgContext } from "../context/BgContext";
import { useNavigate } from "react-router-dom";

const Project2 = () => {
  const { colorScheme } = useContext(BgContext);
  const navigate = useNavigate();
  const data = {
    name: "Doctorly",
    type: "Web App",
    company: "Personal Project",
    role: "Full Stack Developer",
    tools: ["ReactJS", "MongoDB", "Express.js", " Node.js", " Gemini AI API"],
    timeline: "Sep'24 - Nov'24",
    description: "Managing doctor appointments with AI powered app.",
    context:
      "This app helps users manage their medical appointments effortlessly while providing valuable health recommendations through AI-based analysis. Doctorly improves the efficiency of booking appointments and enhances users' healthcare experience by offering tailored recommendations and real-time updates.",
    problems: [
      "Users often struggle to find appropriate healthcare providers quickly based on their symptoms.",
      "The process of booking doctor appointments can be time-consuming and complex.",
      "There is an integration of AI to offer personalized health insights, such as recommendations based on food intake or symptoms.",
      "Ensuring secure handling of sensitive patient data while offering real-time updates is a major challenge.",
    ],
    solutions: [
      "AI Symptom Checker: Doctorly analyzes symptoms to recommend the most suitable doctors, streamlining the search process for healthcare providers.",
      "Appointment Booking: A user-friendly interface allows for easy and quick doctor appointment scheduling with real-time confirmation and updates.",
      "Food Photo Analysis: Integrated AI features analyze food intake data from photos to provide insights into calorie consumption and diet-related health recommendations.",
      "Data Security: The app ensures secure data handling to protect patient information, maintaining compliance with healthcare standards.",
    ],
    images: [],
    links: {
      github: "https://github.com/kraggy09/doctor-app",
      live: "https://doctorly.vercel.app",
    },
  };
  return (
    <div
      onClick={() => {
        navigate("/work/doctorly", { state: data });
      }}
      className={`border hover:cursor-pointer order-5 relative group col-span-12 md:col-span-6 xl:order-3 xl:col-span-3 row-span-2 md:row-span-3 xl:row-span-4 rounded-3xl flex justify-center items-center ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text} ${colorScheme.bgopacity} ${colorScheme.text}`}
      aria-label="Project Placeholder 2"
      id="P2"
    >
      <img
        src="/p1.jpg"
        className="w-full h-full sm:h-auto md:h-full transition-transform duration-300 object-cover sm:object-contain md:object-cover rounded-3xl max-h-[300px]"
        alt=""
      />
      {/* Text appears and slides up on hover */}
      <div className="absolute bottom-4 right-4 z-10 text-white text-lg opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        Doctorly
      </div>
    </div>
  );
};

export default Project2;
