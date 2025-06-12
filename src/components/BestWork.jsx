import { useContext, useEffect, useState } from "react";
import { BgContext } from "../context/BgContext";

const bestThings = [
  {
    heading: "Digital Design",
    description:
      "Providing innovative problem-solving methods and impactful solutions to ensure a better experience. From intuitive user flows to detail-driven UIs, ensuring every design decision aligns with user delight and business value. Deeply involved in refining UX through continuous iteration and real-world feedback.",
  },
  {
    heading: "Backend Systems",
    description:
      "Building real-time, scalable infrastructures using Redis, Socket.IO, and modular service layers. Architecting monoliths with clean boundaries and preparing them for horizontal scaling using Redis Stack, S3, and WebSockets. Focused on reliability, performance, and future-proofing infrastructure to handle high-concurrency B2C and B2B workloads.",
  },
  {
    heading: "Product Execution",
    description:
      "From idea to execution, shipping fast and iterating with business insight and tech clarity. Balancing speed with stability, driving features like instant booking, live tracking, and media delivery. Working closely with founders, making product decisions from the lens of tech feasibility, scalability, and real-world usage patterns.",
  },
  {
    heading: "Technical Leadership",
    description:
      "Bridging code and strategy, leading tech decisions with ownership and startup speed. Responsible for team onboarding, future hiring, and setting engineering culture. Driving key alignments on infra, security, and system design while planning long-term innovations like AI-integrated workflows and vision-based surveillance systems.",
  },
];

const BestWork = () => {
  const { colorScheme } = useContext(BgContext);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % bestThings.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`rounded-3xl px-6 py-10 row-span-4 col-span-1 flex flex-col justify-center items-center text-center relative ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text} ${colorScheme.bgopacity}   shadow-xl border border-[#232323] transition-all duration-500 ease-in-out`}
      style={{ minHeight: 320 }}
    >
      {/* Large Dot */}
      <span className="w-6 h-6 rounded-full bg-[#333] opacity-60 mb-4 mt-2 inline-block"></span>
      <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2 font-medium">
        What I Do Best
      </p>
      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
        {bestThings[index].heading}
      </h2>
      <p className="text-base md:text-lg text-gray-300 max-w-lg mx-auto font-normal transition-all duration-500">
        {bestThings[index].description}
      </p>

      {/* Navigation Dots */}
      <div className="flex gap-3 mt-8">
        {bestThings.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-gray-200 opacity-90" : "bg-white/10 opacity-60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BestWork;
