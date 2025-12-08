import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getProduct } from "../services/api";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

export default function ProductDetails() {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [selectedImg, setSelectedImg] = useState("");

  useEffect(() => {
    getProduct(slug).then((res) => {
      setProduct(res);
      if (res?.images?.length > 0) {
        setSelectedImg(res.images[0].image);
      }
    });
  }, [slug]);

  if (!product) {
    return (
      <p className="text-center mt-20 text-gray-500 text-sm">
        Loading product…
      </p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">

      {/* Breadcrumb */}
      <nav className="mb-4 text-xs sm:text-sm text-gray-500">
        <Link to="/" className="hover:underline">Home</Link> ›{" "}
        <span>{product?.category?.name}</span> ›{" "}
        <span className="text-pink-600">{product.name}</span>
      </nav>

      <div className="flex flex-col md:flex-row gap-10">

        {/* LEFT IMAGES */}
        <div className="w-full md:w-1/2">
          <div className="border rounded-xl overflow-hidden shadow-md bg-white flex justify-center">
            <img
              src={selectedImg || "/fallback.jpg"}
              alt={product.name}
              className="w-full h-[300px] sm:h-[380px] md:h-[420px] object-contain p-2"
            />
          </div>

          {/* Thumbnails */}
          <div className="mt-4 flex gap-3 overflow-x-auto">
            {product?.images?.map((img, i) => (
              <img
                key={i}
                src={img.image}
                onClick={() => setSelectedImg(img.image)}
                className={`w-16 h-16 object-cover rounded-md border cursor-pointer ${
                  selectedImg === img.image
                    ? "border-2 border-pink-500"
                    : "border"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT INFO */}
        <div className="w-full md:w-1/2 space-y-5">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#5B2E3C]">
            {product.name}
          </h1>

          <p className="text-2xl font-bold text-pink-600">₹{product.price}</p>

          <span className="inline-block px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs">
            {product?.category?.name}
          </span>

          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            {product.description}
          </p>

          <ul className="text-sm text-gray-600 space-y-1">
            <li>🎀 Premium handmade crochet</li>
            <li>🎁 Ideal for gifting</li>
            <li>🌸 Custom colors available</li>
          </ul>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">

            {/* ADD TO CART */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => addToCart(product)}
              className="w-full bg-pink-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-pink-600 transition"
            >
              🛒 Add to Cart
            </motion.button>

            {/* BUY NOW — WITH ANIMATION */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              whileHover={{ scale: 1.04 }}
              onClick={() => {
                addToCart(product);
                navigate("/address");
              }}
              className="relative overflow-hidden w-full border border-pink-500 text-pink-600 py-3 rounded-lg text-lg font-semibold hover:bg-pink-50 transition"
            >
              {/* SHIMMER EFFECT */}
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(120deg, transparent 30%, rgba(255,180,200,0.55) 50%, transparent 70%)",
                  animation: "shine-move 1.1s linear infinite",
                }}
              />

              <span className="relative z-10 flex items-center justify-center gap-2">
                ⚡ Buy Now
              </span>
            </motion.button>

          </div>
        </div>
      </div>
    </div>
  );
}

/* You MUST add this CSS in App.css */
