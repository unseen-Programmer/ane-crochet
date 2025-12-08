import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../services/api";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

export default function TrendingNow() {
  const [trending, setTrending] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    getProducts().then((res) => {
      // ✅ Take only first 6 products as trending
      setTrending(res.slice(0, 6));
    });
  }, []);

  if (!trending.length) {
    return (
      <section className="mt-12 px-4">
        <p className="text-center text-sm text-gray-400 animate-pulse">
          Loading trending products…
        </p>
      </section>
    );
  }

  return (
    <section className="mt-12 w-full px-4 py-10 bg-[#FFF7FB]">
      
      {/* ✅ Heading */}
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#FF5F95]">
          Trending Now
        </h2>
        <p className="text-xs sm:text-sm text-pink-500 mt-1">
          Loved by our customers 💗
        </p>
      </div>

      {/* ✅ Mobile Swipe Cards */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-3">
        {trending.map((product) => {
          const img =
            product.images?.length > 0
              ? product.images[0].image
              : "/fallback.jpg";

          return (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={product.id}
              className="min-w-[170px] bg-white rounded-2xl shadow-md border border-pink-100 p-3"
            >
              {/* IMAGE */}
              <div
                onClick={() => navigate(`/product/${product.slug}`)}
                className="w-full h-[150px] rounded-xl overflow-hidden cursor-pointer"
              >
                <img
                  src={img}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TITLE */}
              <h3 className="mt-2 text-sm font-semibold text-[#6B3442] line-clamp-1">
                {product.name}
              </h3>

              {/* PRICE */}
              <p className="text-pink-600 font-bold text-sm">
                ₹{product.price}
              </p>

              {/* BUY BUTTON */}
              <button
                onClick={() => {
                  addToCart(product);
                  navigate("/address");
                }}
                className="mt-2 w-full bg-pink-500 text-white text-xs py-2 rounded-full font-semibold active:scale-95 transition"
              >
                ⚡ Buy Now
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
