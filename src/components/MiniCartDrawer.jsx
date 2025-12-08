import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function MiniCartDrawer() {
  const {
    cart,
    total,
    showCart,
    setShowCart,
    increaseQty,
    decreaseQty,
    removeItem,
  } = useCart();

  if (!showCart) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-40"
        onClick={() => setShowCart(false)}
      />

      {/* Drawer */}
      <div
        className="
          fixed top-0 right-0 z-50 h-full 
          w-[82%] sm:w-80 
          bg-[#FFF7FB] border-l border-pink-100 
          shadow-xl flex flex-col 
          animate-slideIn
        "
      >
        {/* HEADER */}
        <div
          className="
            px-4 py-3 
            border-b border-pink-100 
            flex items-center justify-between 
            bg-gradient-to-r from-[#FFE0EE] to-[#FFD3E8]
          "
        >
          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase text-[#C06283]">
              Ane Crochet
            </p>
            <h2 className="text-[17px] font-semibold text-[#6B3442]">
              Your Basket 🧺
            </h2>
          </div>

          <button
            onClick={() => setShowCart(false)}
            className="
              w-8 h-8 flex items-center justify-center 
              rounded-full bg-white/90 hover:bg-white 
              shadow-sm text-[#C06283] text-lg
              active:scale-95 transition
            "
          >
            ×
          </button>
        </div>

        {/* CART CONTENT */}
        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-500 gap-2 pt-10">
              <span className="text-4xl">🧺</span>
              <p className="text-sm font-medium">Your basket is empty.</p>
              <p className="text-[11px] text-gray-400">
                Add something soft & pastel 💗
              </p>
            </div>
          ) : (
            cart.map((item) => {
              const img =
                item?.images?.length > 0
                  ? item.images[0].image
                  : "/fallback.jpg";

              return (
                <div
                  key={item.id}
                  className="
                    flex gap-3 
                    bg-white border border-pink-100 
                    rounded-xl p-2.5 shadow-sm
                  "
                >
                  {/* IMAGE */}
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-pink-50 flex-shrink-0">
                    <img
                      src={img}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* INFO */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#5B2E3C] line-clamp-1">
                        {item.name}
                      </p>
                      <p className="text-xs text-pink-500 mt-0.5">
                        ₹{item.price}
                      </p>
                    </div>

                    {/* Qty */}
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="
                          w-6 h-6 flex items-center justify-center 
                          rounded-full bg-pink-50 hover:bg-pink-100 
                          text-xs font-bold text-[#C06283] active:scale-90
                        "
                      >
                        −
                      </button>

                      <span className="text-xs font-medium min-w-[1.5rem] text-center text-[#6B3442]">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="
                          w-6 h-6 flex items-center justify-center 
                          rounded-full bg-pink-200 hover:bg-pink-300 
                          text-xs font-bold text-[#6B3442] active:scale-90
                        "
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* REMOVE */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-[11px] text-red-400 hover:text-red-500 self-start mt-1 active:scale-90"
                  >
                    ✕
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* FOOTER */}
        {cart.length > 0 && (
          <div className="border-t border-pink-100 px-4 pt-3 pb-4 bg-[#FFF0F6] shadow-inner">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-[0.24em] text-[#B36885]">
                Subtotal
              </span>
              <span className="text-lg font-semibold text-[#6B3442]">
                ₹{total?.toFixed ? total.toFixed(2) : total}
              </span>
            </div>

            {/* Button */}
            <Link
              to="/cart"
              onClick={() => setShowCart(false)}
              className="block w-full active:scale-95 transition"
            >
              <div className="
                w-full py-3 rounded-full 
                bg-gradient-to-r from-[#FF8BB6] via-[#FF6D95] to-[#FFB6D9] 
                text-white font-semibold text-sm text-center
                shadow-[0_8px_20px_rgba(255,109,149,0.4)]
              ">
                Review Basket →
              </div>
            </Link>

            <p className="mt-3 text-[10px] text-center text-[#B57A93]">
              Shipping & custom requests are finalized at checkout.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
