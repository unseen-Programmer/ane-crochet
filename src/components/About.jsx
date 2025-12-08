export default function About() {
  return (
    <section
      id="about"
      className="relative w-full px-4 sm:px-6 md:px-20 py-14 sm:py-20 
      bg-gradient-to-b from-[#FFF5F8] to-[#FFFFFF] text-[#4B3049] overflow-hidden"
    >
      {/* ✅ Soft background bubbles (lighter for mobile performance) */}
      <div className="absolute top-6 left-0 w-32 h-32 sm:w-40 sm:h-40 bg-pink-200 opacity-20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-16 right-0 w-36 h-36 sm:w-48 sm:h-48 bg-purple-200 opacity-20 blur-3xl rounded-full -z-10"></div>

      {/* ✅ Title Area */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#9F3F63] tracking-wide drop-shadow-sm">
          About Us
        </h2>
        <p className="mt-2 text-[12px] sm:text-sm text-[#9B6A88] font-medium">
          Crafting comfort with handmade love ✨
        </p>
      </div>

      {/* ✅ Main Card */}
      <div
        className="max-w-5xl mx-auto bg-white/80 border border-pink-100 
        rounded-2xl sm:rounded-[30px] backdrop-blur-[1px] 
        p-5 sm:p-8 md:p-12 
        shadow-[0_6px_24px_rgba(255,182,193,0.22)]"
      >
        <p className="text-[13px] sm:text-[15px] leading-relaxed mb-4 sm:mb-6">
          <span className="font-semibold text-[#B14C77]">Crochet Now India</span> is India’s
          most loved destination for premium yarns and handmade crochet essentials.
          We bring you curated collections of soft, colorful, high-quality materials that inspire creativity.
        </p>

        <p className="text-[13px] sm:text-[15px] leading-relaxed mb-6">
          We sell yarn, tools, and accessories to fiber enthusiasts across the world and
          offer exclusive online learning experiences for passionate crochet lovers.
          Our mission is simple:{" "}
          <span className="italic text-[#D15A8F]">
            to make art accessible, lovable, and a joyful part of everyday life.
          </span>
        </p>

        {/* ✅ Vision Box */}
        <div className="mt-6 sm:mt-8 bg-[#FFF3F8] border border-pink-200 px-4 sm:px-6 py-4 rounded-xl sm:rounded-2xl shadow-sm">
          <h3 className="font-bold text-base sm:text-lg text-[#B14C77] mb-2">
            ✨ Our Vision
          </h3>
          <p className="text-[12px] sm:text-sm leading-relaxed">
            To build a community that celebrates slow living, creativity, and the beauty
            of handmade love — one stitch at a time. 🧶💫
          </p>
        </div>

        {/* ✅ Highlights */}
        <div className="mt-8 sm:mt-10">
          <h3 className="font-bold text-base sm:text-lg text-[#B14C77] mb-3">
            📌 Highlights
          </h3>
          <ul className="space-y-2 text-[12px] sm:text-sm">
            <li>🌟 Featured on *The Hindu* and *Cosmopolitan India* for yarn artistry & crochet blankets.</li>
            <li>💗 10K+ happy customers who trust us for quality, softness, and service.</li>
            <li>🧵 8+ years of experience serving crocheters with premium curated materials.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
