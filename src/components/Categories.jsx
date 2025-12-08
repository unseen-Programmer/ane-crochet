import React from "react";

const pastelMap = {
  All: "bg-white",
  Toys: "bg-[#FFE6F3]",
  "Home Decor": "bg-[#FFF1DC]",
  Keychains: "bg-[#E8F5FF]",
  Accessories: "bg-[#F3FFE9]",
};

export default function Categories({ selected, onSelect }) {
  const categories = ["All", "Toys", "Home Decor", "Keychains", "Accessories"];

  return (
    <div
      className="w-full overflow-x-auto scrollbar-hide py-1"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <div className="flex items-center gap-2 md:gap-4 px-1">

        {categories.map((cat) => {
          const isActive = selected === cat;

          return (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className={`
                yarn-cursor
                flex-shrink-0
                px-4 py-2
                rounded-full 
                text-[13px] md:text-sm 
                font-medium 
                min-w-[78px] md:min-w-[100px]
                whitespace-nowrap
                transition-all duration-150
                ${isActive
                  ? "shadow-[0_6px_18px_rgba(255,109,149,0.12)] border border-[#FADCE7]"
                  : "hover:scale-[0.96]"
                }
                ${pastelMap[cat]}
              `}
            >
              <span
                className={`${isActive ? "text-[#5B2E3C]" : "text-[#6B3442]"}`}
              >
                {cat}
              </span>
            </button>
          );
        })}

      </div>
    </div>
  );
}
