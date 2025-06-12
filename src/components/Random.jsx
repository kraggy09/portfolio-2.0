import { useContext, useState, useEffect } from "react";
import { BgContext } from "../context/BgContext";

const Random = () => {
  const { colorScheme } = useContext(BgContext);
  const [currentFact, setCurrentFact] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const funFacts = [
    "🎯 Solved 300+ DSA problems",
    "🌙 Night owl coder",
    "☕ Coffee enthusiast",
    "🎮 Gamer by night",
    "🚀 3+ years coding",
    "💻 Built 10+ projects",
    "🎨 UI/UX lover",
    "📚 Tech bookworm",
    "🧠 Self-taught backend dev",
    "👨‍💻 CTO @ Memowries",
    "📷 Built a photo-booking app",
    "🔁 Socket.IO & Redis wizard",
    "🔧 Full-stack with TS & Mongo",
    "🌐 Dreams of remote life",
    "💸 Freelanced for real clients",
    "📦 Loves building from scratch",
    "🔥 Working while interning",
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentFact((prev) => (prev + 1) % funFacts.length);
      }, 3000); // Change fact every 3 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, funFacts.length]);

  const handleClick = () => {
    setIsAutoPlaying(!isAutoPlaying);
    if (!isAutoPlaying) {
      setCurrentFact((prev) => (prev + 1) % funFacts.length);
    }
  };

  return (
    <section
      className={`border xl:order-3 order-2 row-span-4 rounded-3xl flex justify-center items-center ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text} ${colorScheme.bgopacity} ${colorScheme.text} cursor-pointer group relative overflow-hidden`}
      aria-labelledby="fun-facts-header"
      id="random"
      onClick={handleClick}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="text-center relative z-10 transform transition-all duration-300 group-hover:scale-105">
        <h2
          id="fun-facts-header"
          className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        >
          Fun Fact
        </h2>
        <p className="text-lg px-5 font-medium animate-fade-in">
          {funFacts[currentFact]}
        </p>
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
        {funFacts.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentFact ? "bg-blue-500 scale-125" : "bg-gray-400/50"
            }`}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-500/50 group-hover:scale-150 transition-transform duration-300" />
      <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-purple-500/50 group-hover:scale-150 transition-transform duration-300" />
    </section>
  );
};

export default Random;
