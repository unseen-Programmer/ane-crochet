import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 font-bold tracking-wide text-[#D14670]"
    >
      {/* ✅ LOGO IMAGE */}
      <img
        src="/logo.png"
        alt="Ane Crochet Logo"
        className="h-8 w-auto object-contain"
      />

      {/* ✅ BRAND NAME (NOW ALWAYS VISIBLE) */}
      <span className="text-sm sm:text-base font-extrabold tracking-widest">
        ANE CROCHET
      </span>
    </Link>
  );
}
