import React, { useState } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const FootballDev = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-[320px] h-[470px] flex items-center justify-center perspective">

      {/* Floating Hex Badges */}
      {!isFlipped && (
        <div className="absolute top-12 -left-2 z-30 flex flex-col gap-3 items-center">
          <div className="w-9 h-9 bg-yellow-400 text-black text-[10px] font-bold flex items-center justify-center shadow hex shadow-[0_0_6px_2px_rgba(255,223,0,0.6)]">
            <FaReact size={14} />
          </div>
          <div className="w-9 h-9 bg-yellow-400 text-black text-[10px] font-bold flex items-center justify-center shadow hex">
            <SiNextdotjs size={14} />
          </div>
          <div className="w-9 h-9 bg-yellow-400 text-black text-[10px] font-bold flex items-center justify-center shadow hex">
            <SiTailwindcss size={14} />
          </div>
        </div>
      )}

      {/* Flip Wrapper */}
      <div className={`relative w-[300px] h-[450px] transition-transform duration-700 transform-style preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>

        {/* Front (Stats) */}
        <div className="absolute w-full h-full rounded-[24px] overflow-hidden border-[3px] border-yellow-400 shadow-[0_0_40px_5px_rgba(255,255,0,0.4)] bg-gradient-to-br from-blue-900 via-indigo-600 to-blue-400 backface-hidden z-10">

          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div className="shine"></div>
          </div>
          <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] z-10 rounded-[24px]"></div>

          <div className="relative z-20 w-full h-full text-white text-center p-6 flex flex-col items-center justify-start font-sans">
            <h2 className="text-xl font-bold">🇹🇷 Kaan Emre Nazlioz</h2>
            <p className="text-sm mb-2">Full Stack Developer</p>

            <div className="text-5xl font-extrabold mt-2">90</div>
            <p className="text-xs tracking-widest uppercase text-yellow-300">Overall Rating</p>

            <div className="grid grid-cols-2 text-left mt-4 text-sm gap-y-1 w-full max-w-xs">
              <p>Frontend</p><p>92</p>
              <p>Backend</p><p>87</p>
              <p>UI/UX</p><p>85</p>
              <p>Deployment</p><p>88</p>
              <p>Problem Solving</p><p>90</p>
              <p>Tools</p><p>React, Node.js</p>
            </div>

            <button
              onClick={() => setIsFlipped(true)}
              className="mt-4 px-4 py-2 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-300 transition"
            >
              Preferred Positions
            </button>

            <p className="mt-auto text-[10px] opacity-70 pt-4">📍 Austin, TX</p>
          </div>
        </div>

        {/* Back (Preferred Positions) */}
        <div className="absolute w-full h-full rotate-y-180 z-50 rounded-[24px] bg-black border-[3px] border-yellow-400 shadow-[0_0_40px_5px_rgba(255,255,0,0.4)] text-white flex flex-col justify-center items-center text-center p-6 backface-hidden z-10">
          <h3 className="text-xl font-bold mb-4">Preferred Positions</h3>
          <ul className="text-sm opacity-90 space-y-2">
            <li>-Frontend Developer</li>
            <li>-React Specialist</li>
            <li>-UI Engineer</li>
            <li>-Full Stack Contributor</li>
          </ul>
          <button
            onClick={() => setIsFlipped(false)}
            className="mt-6 px-4 py-2 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-300 transition"
          >
            Back to Stats
          </button>
        </div>

      </div>
    </div>
  );
};

export default FootballDev;
