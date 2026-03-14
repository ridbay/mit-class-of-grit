import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router-dom";

export const GlobalLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [animationData, setAnimationData] = useState<any>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const location = useLocation();

  useEffect(() => {
    fetch("/interopearbility_loader.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation", err));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const timeoutDuration = isInitialLoad ? 3000 : 1000;

    // Smooth transition buffer
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsInitialLoad(false);
    }, timeoutDuration);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950"
        >
          {animationData ? (
            <div className="w-64 h-64 md:w-96 md:h-96 -mt-10">
              <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
              />
            </div>
          ) : (
            <div className="w-16 h-16 border-4 border-brand-blue border-t-white rounded-full animate-spin"></div>
          )}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-black tracking-[0.2em] uppercase text-white mt-8 text-center"
          >
            Loading Experience
          </motion.h2>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
