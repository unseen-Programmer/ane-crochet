import React from "react";
import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFAFB] to-[#F4EEF8] flex flex-col items-center justify-center px-6 text-center">

      {/* SUCCESS ICON */}
      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center shadow-md mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-[#3A1F2D] tracking-tight">
        Order Sent Successfully!
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-600 mt-3 max-w-md leading-relaxed">
        Your order details have been shared with us on WhatsApp.  
        Our team will reach out shortly to confirm and complete the payment process.
      </p>

      {/* CARD SUMMARY */}
      <div className="bg-white mt-6 px-6 py-5 rounded-3xl shadow-lg border border-gray-100 max-w-sm w-full">
        <p className="text-gray-700 text-sm">
          Thank you for choosing <span className="font-semibold text-[#3A1F2D]">ANE Crochet</span> 💛  
          We're excited to craft something special for you.
        </p>
      </div>

      {/* BUTTON */}
      <Link
        to="/"
        className="mt-8 bg-gradient-to-r from-[#FF7A00] to-[#FF9550]
                   text-white px-8 py-3 rounded-2xl 
                   font-semibold shadow-lg hover:shadow-xl 
                   active:scale-95 transition-all"
      >
        Back to Home →
      </Link>
    </div>
  );
}
