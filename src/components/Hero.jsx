import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeartRain from "./HeartRain";

export default function Hero() {
  const items = [
    "/assets/images/item2.jpg",
    "/assets/images/item5.jpg",
    "/assets/images/item7.jpg",
    "/assets/images/item9.jpg",
    "/assets/images/item3.jpg",
    "/assets/images/item6.jpg",
    "/assets/images/item8.jpg",
    "/assets/images/item1.jpg",
  ];

  const PINK = {
    p1: "#FF8BB6",
    p2: "#FFB6D9",
    p3: "#FFD6E5",
    p4: "#FFF1F6",
  };

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const slideNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % items.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const timer = setInterval(() => slideNext(), 3200);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 150 : -150, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -150 : 150, opacity: 0 }),
  };

  return (
    <section className="relative w-full min-h-[88vh] md:min-h-screen flex items-center justify-center overflow-hidden">

      {/* Hearts on larger screens */}
      <div className="hidden sm:block">
        <HeartRain />
      </div>

      {/* Soft glow blobs */}
      <div className="pointer-events-none">
        <div className="absolute -top-16 -left-10 w-44 h-44 md:w-72 md:h-72 rounded-full blur-[60px] opacity-25 bg-[#FF8BB6]" />
        <div className="absolute bottom-[-60px] right-[-30px] w-52 h-52 md:w-96 md:h-96 rounded-full blur-[70px] opacity-25 bg-[#FFB6D9]" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 md:px-10 py-14 md:py-24 flex flex-col-reverse md:flex-row items-center gap-10">

        {/* LEFT SECTION */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/70 border border-white/60 rounded-full text-[11px] sm:text-xs font-medium text-[#A55D78] backdrop-blur-md shadow-sm"
          >
            <span className="text-sm">♡</span> Customized Crochet
          </motion.div>

          {/* MAIN BRAND NAME — UPDATED + VISIBLE */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-bold leading-[1.15]"
          >
            <span className="block text-[11px] sm:text-xs tracking-[0.28em] text-[#B0758A] uppercase mb-2">
            </span>

            {/* BIG BRAND NAME */}
            <span
              className="
                block
                text-4xl sm:text-5xl md:text-6xl 
                font-extrabold tracking-tight text-[#6B3442]
              "
            >
              ANE{" "}
              <span
            className="text-transparent bg-clip-text"
style={{
  backgroundImage: "linear-gradient(90deg, #E85A8D, #FF9DC6)",
}}

                
              >
                CROCHET
              </span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <p className="text-[#7D4656] max-w-sm mx-auto md:mx-0 text-[13px] sm:text-sm leading-relaxed">
            Bringing pastel couture to life through dreamy crochet reels.
          </p>

          {/* Mini tags */}
          <div className="text-[#B88A9F] text-[9px] sm:text-[11px] tracking-wide opacity-80 flex justify-center md:justify-start gap-3">
            <span>✦ Crafted Slowly</span>
            <span>✦ Loved Deeply</span>
            <span>✦ Treasured Forever</span>
          </div>

          {/* Buttons */}
          <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <button className="px-5 py-2.5 text-sm sm:text-base rounded-full text-white font-semibold bg-gradient-to-r from-[#FF8BB6] to-[#FFB6D9] shadow-md active:scale-95 transition">
              View Collection
            </button>

            <button className="px-5 py-2.5 text-sm sm:text-base rounded-full bg-white/70 border border-white text-[#A06481] font-medium active:scale-95 transition">
              WhatsApp Contact
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE SLIDER */}
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.div
            className="relative 
                       w-[220px] h-[280px] 
                       sm:w-[260px] sm:h-[330px]
                       md:w-[400px] md:h-[500px]
                       rounded-[24px] md:rounded-[32px] overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              background: `linear-gradient(145deg, ${PINK.p4}AA, ${PINK.p3})`,
              border: `1.5px solid ${PINK.p2}`,
              boxShadow: `0 14px 40px rgba(255, 182, 217, 0.38)`,
              backdropFilter: "blur(12px)",
            }}
          >
            {/* Frame */}
            <div className="absolute inset-[6px] sm:inset-[10px] rounded-[20px] md:rounded-[26px] overflow-hidden bg-white/30 backdrop-blur-md border border-[#FFEBF4]/60">
              <AnimatePresence custom={direction}>
                <motion.img
                  key={items[index]}
                  src={items[index]}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Slider Buttons */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-5">
              <button
                onClick={slidePrev}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FFD6E5] text-[#6B3D52] text-lg flex items-center justify-center shadow-sm active:scale-95"
              >
                ‹
              </button>
              <button
                onClick={slideNext}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FF8BB6] text-[#6B3D52] text-lg flex items-center justify-center shadow-sm active:scale-95"
              >
                ›
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
