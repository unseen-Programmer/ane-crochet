import React from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cart, total, increaseQty, decreaseQty, removeItem } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-pink-50">
        <h1 className="text-3xl font-bold text-[#5B2E3C] mb-2">Your Basket is Empty</h1>
        <p className="text-gray-500 mb-6">Add some cute handmade crochet pieces ❤️</p>

        <Link
          to="/"
          className="px-6 py-3 rounded-full bg-pink-500 text-white font-semibold shadow-lg hover:bg-pink-600 transition-all"
        >
          Shop Now →
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 pb-40 px-4 pt-6">

      <h1 className="text-2xl font-bold text-[#5B2E3C] mb-6">
        Your Basket 🧺
      </h1>

      <div className="space-y-4">
        {cart.map((item) => {
          const img =
            item?.images?.length > 0 ? item.images[0].image : "/fallback.jpg";

          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 shadow-md border border-pink-100 flex items-center gap-4"
            >
              {/* Image */}
              <img
                src={img}
                alt={item.name}
                className="w-20 h-20 rounded-xl object-cover"
              />

              {/* Info */}
              <div className="flex-1">
                <p className="font-semibold text-[#5B2E3C] text-lg">{item.name}</p>
                <p className="text-pink-600 font-semibold mt-1">₹{item.price}</p>

                {/* Quantity */}
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="w-8 h-8 rounded-full bg-pink-100 text-lg flex justify-center items-center hover:bg-pink-200"
                  >
                    –
                  </button>

                  <span className="text-lg font-medium">{item.qty}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="w-8 h-8 rounded-full bg-pink-100 text-lg flex justify-center items-center hover:bg-pink-200"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-pink-500 text-xl hover:text-red-400"
              >
                ✕
              </button>
            </div>
          );
        })}
      </div>

      {/* Bottom Summary */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-2xl p-6 rounded-t-3xl border-t border-pink-100">
        <div className="flex justify-between mb-3">
          <p className="text-sm tracking-wide text-gray-600">SUBTOTAL</p>
          <p className="text-xl font-bold text-[#5B2E3C]">₹{total.toFixed(2)}</p>
        </div>

        <button
          onClick={() => navigate("/address")}
          className="w-full py-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white font-semibold rounded-full text-lg shadow-lg hover:opacity-90 transition-all"
        >
          Review Basket →
        </button>

        <p className="text-center text-xs text-gray-500 mt-2">
          Shipping & custom requests are finalized at checkout.
        </p>
      </div>
    </div>
  );
}
