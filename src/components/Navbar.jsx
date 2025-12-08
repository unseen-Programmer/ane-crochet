import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Logo from "./Logo";

export default function Navbar({ onCartOpen }) {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* ✅ TOP NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#FFF7F8]/90 backdrop-blur-md border-b border-[#FFDDE8]">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="h-14 flex items-center justify-between">

            {/* LOGO */}
            <Logo />

            {/* CART + MENU */}
            <div className="flex items-center gap-3">

              {/* 🛒 CART */}
              <button
                onClick={onCartOpen}
                className="relative w-10 h-10 rounded-full bg-[#FFE1EC] flex items-center justify-center"
              >
                <svg className="w-5 h-5 text-[#D14670]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 6h13" />
                </svg>

                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 text-[10px] bg-[#FF6D95] text-white flex items-center justify-center rounded-full font-bold">
                    {cart.length}
                  </span>
                )}
              </button>

              {/* ☰ MENU */}
              <button
                onClick={() => setOpen(true)}
                className="w-10 h-10 rounded-full bg-[#FFE1EC] flex items-center justify-center"
              >
                <svg className="w-6 h-6 text-[#D14670]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

            </div>
          </div>
        </div>
      </nav>

      {/* ✅ OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-[1px] z-40"
        />
      )}

      {/* ✅ RIGHT SLIDE-IN MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } 
        bg-gradient-to-b from-[#FFF0F6] to-[#FFE4EF] 
        shadow-2xl border-l border-[#FFD5E5]`}
      >

        {/* HEADER */}
        <div className="h-14 px-4 flex items-center justify-between border-b border-[#FFD5E5]">
          <span className="text-sm font-bold tracking-[0.2em] text-[#6B3442]">
            MENU
          </span>

          <button
            onClick={() => setOpen(false)}
            className="w-9 h-9 rounded-full bg-[#FFD3E4] flex items-center justify-center text-[#D14670] text-xl"
          >
            ×
          </button>
        </div>

        {/* ✅ MENU CONTENT */}
        <div className="p-5 space-y-4">

          {/* HOME */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition ${
              isActive("/")
                ? "bg-[#FFD7E5] text-[#D14670] shadow-sm"
                : "text-[#6B3442] hover:bg-[#FFE1EC]"
            }`}
          >
            🏠 Home
          </Link>

          {/* NEW IN */}
          <button
            onClick={() => {
              setOpen(false);
              document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl text-[#6B3442] font-medium hover:bg-[#FFE1EC]"
          >
            ✨ New In
          </button>

          {/* ABOUT */}
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition ${
              isActive("/about")
                ? "bg-[#FFD7E5] text-[#D14670] shadow-sm"
                : "text-[#6B3442] hover:bg-[#FFE1EC]"
            }`}
          >
            💗 About
          </Link>

          {/* ✅ DIVIDER */}
          <div className="h-px bg-[#FFD5E5] my-4" />

          {/* ✅ 🎁 COUPON / OFFER CARD */}
          <div className="bg-white rounded-2xl p-4 border border-[#FFD5E5] shadow-sm text-center">
            <p className="text-xs tracking-widest text-[#B57A93] uppercase mb-1">
              Special Offer
            </p>
            <p className="text-lg font-bold text-[#D14670]">
              GET 10% OFF
            </p>
            <p className="text-[11px] text-[#6B3442] mt-1">
              Use code:
            </p>

            <div className="mt-2 inline-block px-4 py-1.5 rounded-full bg-[#FFE1EC] text-[#D14670] font-bold tracking-widest text-sm">
              ANE10
            </div>

            <p className="text-[10px] text-[#B57A93] mt-2">
              Valid on your first order 💝
            </p>
          </div>

          {/* ✅ BRAND STAMP */}
          <div className="text-center text-[11px] text-[#B57A93] tracking-widest mt-5">
            ANE CROCHET
            <br />
            Handmade With Love
          </div>

        </div>
      </div>
    </>
  );
}
