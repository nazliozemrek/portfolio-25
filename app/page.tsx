"use client";

import FootballDev from "@/component/FootballDev";
import DevAttributes from "@/component/DevAttributes";
import { useEffect,useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";




const Home = () => {
  
  
  const [userInteracted, setUserInteracted] = useState(false);
  const [showCard,setShowCard] = useState(false);
  const [showDetails,setShowDetails] = useState(false);
    
  
    
  useEffect(() => {

      if (!userInteracted) return;
        const timeoout = setTimeout(() => {


          setShowCard(true);

            confetti({
              particleCount: 350,
              angle: 90,
              spread: 90,
              startVelocity: 40,
              origin: { x: 0.5, y: 0.6 },
               colors: ["#FFD700", "#ffffff", "#00cfff"],
               zIndex:9999,
});
          const audio = new Audio("/sounds/pack-open.mp3");
          audio.play().catch((e) => console.log("Autoplay blocked:", e));



        },1000);

        return() => clearTimeout(timeoout);
      },[userInteracted]);

  return (
   <main className="min-h-screen bg-black flex flex-col items-center justify-center text-white space-y-6"
    onClick={() => setUserInteracted(true)}
   >
    <AnimatePresence>
      {!showCard && !showDetails && (
        <motion.div
          key="loading"
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0,scale:1.2}}
          className="text-3xl font-bold"

      >
         Your Next Junior Dev is ...
      </motion.div>
     )}
     {showCard&& !showDetails &&(
      <motion.div
        key="card"
        initial={{scale:0,opacity:0}}
        animate={{scale:1,opacity:1}}
        transition={{duration:0.6}}
      >
        <FootballDev/>
      <div className="w-[300px] flex ">
              <button
            className="mt-4 px-4 py-2 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-300 transition translate-x-18"
            onClick={() => setShowDetails(true)}
          >
            See Dev Details
            
          </button>
      </div>
      </motion.div>
     )}
     {showDetails && (
      <motion.div
        key="details"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        className="w-full"
        >
          <DevAttributes/>
        </motion.div>
     )}
    </AnimatePresence>
   </main>
  );
}
export default Home;