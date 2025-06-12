import { useContext } from "react";
import { BgContext } from "../context/BgContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const AboutHolder = () => {
  const { colorScheme } = useContext(BgContext);

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from("#about-left", {
      opacity: 0,
      x: -80,
      duration: 1,
      ease: "power3.out",
    }).from(
      "#about-right",
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
    <div className="row-span-3 grid grid-rows-2 gap-y-3 gap-x-5 grid-cols-2">
      {/* Left Box - Development Philosophy */}
      <div
        id="about-left"
        className={`row-span-1 xl:row-span-2 xl:col-span-1 col-span-2 rounded-3xl border p-4 ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text} ${colorScheme.bgopacity} ${colorScheme.text} relative overflow-hidden group`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
            <span className="text-xl">💡</span>
            Development Approach
          </h3>

          <div className="space-y-4">
            <div className="bg-gray-800/50 rounded-xl p-3 hover:bg-gray-800/70 transition-colors duration-300">
              <div className="flex items-start gap-3">
                <span className="text-xl">🎯</span>
                <div>
                  <h4 className="text-sm font-medium text-gray-200">
                    Clean Code
                  </h4>
                  <p className="text-xs text-gray-400">
                    Maintainable and scalable solutions
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-3 hover:bg-gray-800/70 transition-colors duration-300">
              <div className="flex items-start gap-3">
                <span className="text-xl">⚡</span>
                <div>
                  <h4 className="text-sm font-medium text-gray-200">
                    Performance
                  </h4>
                  <p className="text-xs text-gray-400">
                    Speed and efficiency focused
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-3 hover:bg-gray-800/70 transition-colors duration-300">
              <div className="flex items-start gap-3">
                <span className="text-xl">🛡️</span>
                <div>
                  <h4 className="text-sm font-medium text-gray-200">
                    Security
                  </h4>
                  <p className="text-xs text-gray-400">
                    Robust and secure applications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Box - Achievements & Stats */}
      <div
        id="about-right"
        className={`row-span-1 xl:row-span-2 xl:col-span-1 col-span-2 rounded-3xl border p-4 ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text} ${colorScheme.bgopacity} ${colorScheme.text} relative overflow-hidden group`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          <h3 className="text-lg font-semibold mb-3 bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
            Key Achievements
          </h3>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">🏆</span>
              <div>
                <h4 className="text-sm font-medium">Best Developer 2023</h4>
                <p className="text-xs text-gray-400">Intervue.io</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xl">🚀</span>
              <div>
                <h4 className="text-sm font-medium">5+ Major Projects</h4>
                <p className="text-xs text-gray-400">Led & Delivered</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xl">🌟</span>
              <div>
                <h4 className="text-sm font-medium">10+ Developers</h4>
                <p className="text-xs text-gray-400">Mentored</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHolder;
