import { useEffect } from "react";

export default function Toast({ message, show }) {
  useEffect(() => {
    if (!show) return;
  }, [show]);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-sm font-medium text-[#9F3F63] bg-[#FFD9E8] shadow-[0_4px_10px_rgba(255,182,193,0.45)] border border-pink-200 transition-all duration-300 ${
        show ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}
    >
      🧶 {message}
    </div>
  );
}
  