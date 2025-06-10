import { useEffect, useState } from 'react'
import React from 'react'
import FootballDev from './FootballDev'
import StatBar from './StatBar';
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiPython, SiVuedotjs,SiAngular,} from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



const DevAttributes = () => {
    const [activeTab,setActiveTab]=useState("attributes");
    const [selectedTool, setSelectedTool] = useState("react");

   
   
    useEffect(() => {
        const tabs  =["bio","attributes","frameworks","contact"]
         
       
        const handleKeyDown = (e:KeyboardEvent) => {
            const audio = new Audio ("/sounds/ui-sound.mp3");
            const currentIndex = tabs.indexOf(activeTab);
            if (currentIndex === -1) return;

            if (e.key === "ArrowRight") {
                const nextIndex = (currentIndex + 1 ) %  tabs.length;
                setActiveTab(tabs[nextIndex]);
                audio.play().catch(() => {});
            }
            if (e.key === "ArrowLeft") {
                const prevIndex = (currentIndex - 1 + tabs.length ) % tabs.length;
                setActiveTab(tabs[prevIndex]);
                audio.play().catch(() => {});
            }

        };
        window.addEventListener("keydown",handleKeyDown);
        return () => window.removeEventListener("keydown",handleKeyDown);
    },[activeTab])

    const knownTools = ["react", "next", "tailwind", "node", "typescript"];
    const allTools = [
  { id: "react", icon: <FaReact className="text-cyan-400" />, name: "React" },
  { id: "next", icon: <SiNextdotjs />, name: "Next.js" },
  { id: "tailwind", icon: <SiTailwindcss className="text-blue-400" />, name: "Tailwind CSS" },
  { id: "typescript", icon: <SiTypescript className="text-blue-300" />, name: "TypeScript" },
  { id: "node", icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { id: "git", icon: <FaGitAlt className="text-orange-400" />, name: "Git" },
  { id: "python", icon: <SiPython className="text-yellow-300" />, name: "Python" },
  { id: "vue", icon: <SiVuedotjs className="text-green-400" />, name: "Vue.js" },
  { id: "angular", icon: <SiAngular className="text-red-500" />, name: "Angular" },
];
const toolDescriptions: Record<string, { title: string; type: string; description: string }> = {
  react: {
    title: "React",
    type: "Frontend Library",
    description: "Used to build interactive UIs with components. Efficient, declarative, and widely used in modern web apps."
  },
  next: {
    title: "Next.js",
    type: "React Framework",
    description: "Server-side rendering, routing, and full-stack React power. Great for SEO and performance."
  },
  tailwind: {
    title: "Tailwind CSS",
    type: "Utility-First CSS",
    description: "Write minimal CSS using classes directly in your HTML/JSX. Speedy and consistent."
  },
  node: {
    title: "Node.js",
    type: "Backend Runtime",
    description: "Runs JavaScript on the server. Great for APIs, real-time apps, and scalable backends."
  },
  typescript: {
    title: "TypeScript",
    type: "Typed Superset of JS",
    description: "Gives you static typing in JavaScript for safer, more scalable code."
  }
};



  return(
        <div className='flex min-h-screen bg-black text-white'>
            {/* Left Panel*/}
         <div className='w-[350px] p-6 border-r border-gray-800 flex flex-col items-center'>
           <div className='scale-75'>
                <FootballDev/>
           </div>
            
            <p className='text-sm mt-4 opacity-60'>Frameworks: 3</p>
         </div>
            {/*Right Panel*/}
        <div className='flex-1 p-8 space-y-8'>
            <div className='flex gap-4 mb-6 border-b border-gray-700 pb-2'>
                <button
                    onClick={() => {
                        const audio = new Audio("/sounds/ui-sound.mp3");
                        setActiveTab("bio");
                        audio.play().catch(()=> {});
                    }}
                    className={`px-4 py-1 rounded-t font-semibold ${
                        activeTab==="bio" ? "bg-yellow-400 text-black" : "text-gray-400"
                    }`}
                >
                    Bio
                </button>
                 <button
                      onClick={() =>{
                        const audio = new Audio("/sounds/ui-sound.mp3");
                        setActiveTab("attributes");
                        audio.play().catch(()=> {});
                    }}
                        
                    className={`px-4 py-1 rounded-t font-semibold ${
                         activeTab === "attributes" ? "bg-yellow-400 text-black" : "text-gray-400"
                     }`}
                >
                    Attributes
                </button>
                  <button
                         onClick={() =>{
                        const audio = new Audio("/sounds/ui-sound.mp3");
                        setActiveTab("frameworks");
                        audio.play().catch(()=> {});
                    }}
                        
                    className={`px-4 py-1 rounded-t font-semibold ${
                         activeTab === "frameworks" ? "bg-yellow-400 text-black" : "text-gray-400"
                     }`}
                 >
                    Frameworks
                 </button>
                  <button
                      onClick={() =>{
                        const audio = new Audio("/sounds/ui-sound.mp3");
                        setActiveTab("contact");
                        audio.play().catch(()=> {});
                    }}
                        
                    className={`px-4 py-1 rounded-t font-semibold ${
                         activeTab === "contact" ? "bg-yellow-400 text-black" : "text-gray-400"
                     }`}
                 >
                    Contact
                    
                 </button>
                 

            </div>
           {activeTab === "bio" && (
  <div>
    <h2 className="text-2xl font-bold mb-4">Developer Bio</h2>
    <p className="text-sm opacity-80 leading-relaxed">
      Kaan Emre Nazlioz is a full-stack developer with a passion for user interfaces and performance. 
        Bartender turned coder, he's known for pouring clean code and great UX. He specializes 
      in React, Node.js, and building immersive web experiences like this portfolio.
    </p>
  </div>
)}

{activeTab === "attributes" && (
  <div className="space-y-6">
    <div>
      <h3 className="text-xl font-semibold mb-3">Frontend</h3>
      <StatBar label="React" value={95} />
      <StatBar label="Next.js" value={90} />
      <StatBar label="Tailwind" value={92} />
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">Backend</h3>
      <StatBar label="Node.js" value={87} />
      <StatBar label="MongoDB" value={83} />
      <StatBar label="REST APIs" value={89} />
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">Problem Solving</h3>
      <StatBar label="Debugging" value={91} />
      <StatBar label="System Design" value={85} />
      <StatBar label="Algorithms" value={88} />
    </div>
  </div>
)}

{activeTab === "frameworks" && (
  <div>
    <h3 className="text-xl font-semibold mb-3">Frameworks & Libraries</h3>
     <div className="mt-4 flex gap-2">
    <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded shadow">
      React+
    </span>
    <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded shadow">
      Next.js+
    </span>
     <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded shadow">
      Tailwind.css+
    </span>
  </div>
    <div className="flex gap-6 text-4xl">
     {allTools.map((tool)=> {
        const isKnown = knownTools.includes(tool.id);
        return (
            <div 
            key={tool.id}
            title={tool.name}
            onClick={() => isKnown && setSelectedTool(tool.id)}
            className={`p-2 rounded-lg cursor-pointer transition ${
                isKnown 
                ? `bg-yellow-400/20 border
                  ${selectedTool === tool.id }
                ? border-yellow-400 scale-110"
                : "border-transparent"
                 }`
                : "opacity-30 cursor-default"
        }`}
        >
            {tool.icon}
            </div>
        );
     })}
    </div>
  </div>
)}
{activeTab === "contact" && (
  <div>
    <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
    <p className="text-sm opacity-80 mb-4">
      Feel free to reach out to collaborate or chat about dev opportunities.
    </p>

    <div className="flex gap-6 text-2xl">
      <a
        href="https://github.com/nazliozemrek"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow-400 transition"
      >
        <FaGithub title="GitHub" />
      </a>

      <a
        href="https://www.linkedin.com/in/kaan-emre-nazlıöz-bb2852ab"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow-400 transition"
      >
        <FaLinkedin title="LinkedIn" />
      </a>

      <a
        href="mailto:nazliozemrek@gmail.com"
        className="hover:text-yellow-400 transition"
      >
        <MdEmail title="Email" />
      </a>
      <a
                    href="/Kaan_Nazlioz_Resume_0525.pdf"
                    download
                    className="mt-6 inline-block px-4 py-2 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition font-semibold"
                    >
                    Download Resume
                    </a>
    </div>
  </div>
)}


        </div>

        </div>
  );
  
}

export default DevAttributes