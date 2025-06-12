import React from "react";
import { useNavigate } from "react-router-dom";

const experiences = [
  {
    company: "Memowries",
    logo: "https://www.memowries.com/favicon.ico", // Placeholder, replace if needed
    role: "Chief Technology Officer",
    location: "Remote", // Assuming remote, adjust if needed
    duration: "Current",
    bullets: [
      "Led the development and strategic direction of core technology initiatives.",
      "Managed engineering teams, fostering a culture of innovation and high performance.",
      "Designed and implemented scalable architectures for various product features.",
      "Oversaw product development lifecycle from conception to deployment.",
    ],
    tech: ["Node.js", "React.js", "AWS", "MongoDB", "TypeScript"],
  },
  {
    company: "Intervue.io",
    logo: "https://www.intervue.io/favicon.ico",
    role: "SDE Intern",
    location: "Bengaluru, Karnataka, India · On-site",
    duration: "Oct 2024 - Jun 2025 · 9 mos",
    bullets: [
      "Built and optimized conversational AI interviews using ElevenLabs, Deepgram, and OpenAI, ensuring a secure, scalable, and high-performance system.",
      "Developed and refined pricing workflows, boosting inbound traffic, user engagement, and reducing drop-offs, while also improving database performance and user migrations.",
      "Enhanced interview processes by optimizing profile-to-domain mapping, interview cancellation flows, and system efficiency, reducing recurring issues.",
      "Contributed to the full-stack development of Intervue.io, integrating features like live coding environments, cheating detection, and AI-driven interview enhancements for a seamless experience.",
    ],
    tech: ["React.js", "PostgreSQL", "+5 skills"],
  },
  {
    company: "Simco Consultancy",
    logo: "https://www.simcoconsultancy.com/favicon.ico", // Replace with actual logo if available
    role: "Software Engineer Intern",
    location: "Kolkata, West Bengal, India · On-site",
    duration: "Jul 2024 - Oct 2024 · 4 mos",
    bullets: [
      "Automated workflows – Streamlined tasks using Google Apps Script.",
      "Google Sheets integration – Synced real-time data with MERN.",
      "API development – Built custom APIs for better functionality.",
      "Optimized data handling – Improved performance and scalability.",
    ],
    tech: ["Node.js", "Socket.io", "+3 skills"],
  },
  {
    company: "Freelance",
    logo: "",
    role: "FullStack Developer",
    location: "Remote",
    duration: "Sep 2023 - Jun 2024 · 10 mos",
    bullets: [
      "Thermal Printing & Billing – Quick invoice printing with automated calculations.",
      "Role-Based Access & Security – Secure authentication with Admin, Manager, and Staff roles.",
      "Real-Time Updates & Inventory – Instant device updates and stock tracking with alerts.",
      "Responsive UI & Reports – Mobile-friendly design with detailed sales and inventory reports.",
    ],
    tech: ["MongoDB", "React.js", "+3 skills"],
  },
];

const ProfessionalJourney = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#101014] py-12 px-2">
      <h1 className="text-4xl font-bold mb-10 text-white tracking-tight">
        Professional Journey
      </h1>
      {/* Close Button */}
      <button
        onClick={() => navigate("/about")}
        className="absolute top-6 right-6 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/70 text-white transition-colors duration-300 z-10"
        aria-label="Close professional journey"
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
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2 w-full max-w-6xl h-full flex-grow">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`rounded-3xl border border-gray-700 bg-gradient-to-br from-[#18181c] to-[#1a1a22] shadow-xl p-7 flex flex-col gap-4 relative overflow-hidden hover:scale-[1.025] transition-transform duration-300`}
          >
            <div className="flex items-center gap-3 mb-2">
              {exp.logo && (
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-10 h-10 rounded-lg bg-white/10 object-contain"
                />
              )}
              <div>
                <h2 className="text-xl font-semibold text-white mb-0.5">
                  {exp.role}
                </h2>
                <p className="text-sm text-gray-400 font-medium">
                  {exp.company}
                </p>
              </div>
            </div>
            <div className="text-xs text-gray-400 mb-1">{exp.location}</div>
            <div className="text-xs text-gray-500 mb-2">{exp.duration}</div>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mb-2">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-auto">
              {exp.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-blue-900/40 text-xs text-blue-200 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalJourney;
