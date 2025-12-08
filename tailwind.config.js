/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"General Sans"', "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        background: "#FFFBFA",
        accentStart: "#FF9EBB",
        accentEnd: "#FF6D95",
        textMain: "#4A4A4A",
        textMuted: "#666666",
      },

      /* 🌸 Floating crochet items animation */
      keyframes: {
        float1: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        float2: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        float3: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        float4: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        float5: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },

      animation: {
        floatItem1: "float1 6s ease-in-out infinite",
        floatItem2: "float2 7s ease-in-out infinite",
        floatItem3: "float3 5s ease-in-out infinite",
        floatItem4: "float4 9s ease-in-out infinite",
        floatItem5: "float5 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
