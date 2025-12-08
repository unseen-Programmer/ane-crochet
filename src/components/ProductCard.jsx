import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  if (!product) return null;

  const img =
    product?.images?.length > 0 ? product.images[0].image : "/fallback.jpg";

  const openProduct = () => {
    if (product?.slug) navigate(`/product/${product.slug}`);
  };

  return (
    <div
      onClick={openProduct}
      className="
        cursor-pointer bg-white 
        rounded-2xl border border-pink-100 
        shadow-sm hover:shadow-md 
        transition-all active:scale-[0.97]
        p-3
      "
    >
      {/* IMAGE WRAPPER — PERFECT SQUARE FOR MOBILE */}
      <div className="w-full aspect-square rounded-xl overflow-hidden bg-pink-50">
        <img
          src={img}
          alt={product?.name || "Product"}
          className="
            w-full h-full object-cover 
            transition-transform duration-300
            hover:scale-110
          "
        />
      </div>

      {/* PRODUCT TITLE */}
      <h3 className="mt-3 text-center text-[14px] font-semibold text-[#6E3C51] line-clamp-1">
        {product?.name}
      </h3>

      {/* PRICE */}
      <p className="text-center text-[14px] text-[#FF4A84] font-bold">
        ₹{product?.price}
      </p>
    </div>
  );
}
