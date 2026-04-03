import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const PURCHASES = [
  { id: 1, game: "WoW", service: "Mythic+15 Carry", time: "2 min ago", price: "$25" },
  { id: 2, game: "LoL", service: "Plat to Diamond", time: "5 min ago", price: "$120" },
  { id: 3, game: "Destiny 2", service: "Flawless Trials", time: "12 min ago", price: "$45" },
  { id: 4, game: "Valorant", service: "Rank Placement", time: "18 min ago", price: "$30" },
  { id: 5, game: "Apex", service: "Predator Badge", time: "25 min ago", price: "$85" },
];

export function LiveFeed() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PURCHASES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-navy border-y border-navy-light py-3 overflow-hidden">
      <div className="container mx-auto px-4 flex items-center">
        <div className="flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-wider mr-6 whitespace-nowrap">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          Live Feed
        </div>
        
        <div className="relative h-6 flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center text-sm text-text-muted"
            >
              <span className="text-white font-medium mr-2">{PURCHASES[currentIndex].game}</span>
              <span className="mr-2">—</span>
              <span className="mr-4">{PURCHASES[currentIndex].service}</span>
              <span className="text-green-400 font-medium mr-4">{PURCHASES[currentIndex].price}</span>
              <span className="text-xs opacity-50">{PURCHASES[currentIndex].time}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
