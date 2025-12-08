import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function PaymentPage() {
  const { cart, total } = useCart();
  const navigate = useNavigate();

  const handleOrder = () => {
    const address = JSON.parse(localStorage.getItem("address"));

    const orderText = `
🧶 *New Crochet Order*
————————————
👤 *Customer:* ${address.name}
📞 *Phone:* ${address.phone}
📍 *Address:* ${address.street}, ${address.city}, ${address.pincode}

🛍 *Items:*
${cart
      .map(
        (i) =>
          `• ${i.name} — Qty: ${i.qty} — ₹${(i.qty * i.price).toFixed(2)}`
      )
      .join("\n")}

💰 *Total:* ₹${total}
💬 *Payment:* Customer will complete order on WhatsApp.
`;

    const encoded = encodeURIComponent(orderText);
    window.open(`https://wa.me/91XXXXXXXXXX?text=${encoded}`, "_blank");
    navigate("/success");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFAFB] to-[#F4EEF8] px-5 py-8 pb-40">

      {/* HEADER */}
      <h1 className="text-2xl font-bold text-[#3A1F2D] mb-3 tracking-tight">
        Confirm Your Order
      </h1>
      <p className="text-sm text-gray-600 mb-6">
        You will complete your purchase directly on WhatsApp.
      </p>

      {/* MAIN CARD */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 px-6 py-6 mb-6">
        <p className="text-gray-800 font-semibold text-base mb-3">
          How it works
        </p>

        <div className="space-y-4">
          <Step
            number="1"
            text="We will send your complete order details to WhatsApp."
          />
          <Step
            number="2"
            text="You can review the items, price, and address."
          />
          <Step
            number="3"
            text="You confirm the order, and we guide you for final payment."
          />
        </div>
      </div>

      {/* ORDER SUMMARY */}
      <p className="text-gray-800 font-semibold text-base mb-3">
        Order Summary
      </p>

      <div className="bg-white rounded-3xl shadow-md border border-gray-100 px-6 py-6 mb-6">
        {cart.map((item) => (
          <div className="flex justify-between mb-3" key={item.id}>
            <p className="text-gray-700 text-sm">
              {item.name} × {item.qty}
            </p>
            <p className="text-gray-900 font-medium text-sm">
              ₹{(item.qty * item.price).toFixed(2)}
            </p>
          </div>
        ))}

        <div className="h-[1px] bg-gray-200 my-3" />

        <div className="flex justify-between text-gray-900 text-lg font-bold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>

      {/* WHATSAPP CARD */}
      <div className="bg-green-50 border border-green-200 rounded-3xl shadow-sm px-6 py-5 mb-24 flex items-start gap-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="whatsapp"
          className="w-10 h-10"
        />
        <p className="text-gray-700 text-sm leading-relaxed">
          Your order will be securely sent to WhatsApp.  
          Our team will confirm & finalize payment there.
        </p>
      </div>

      {/* STICKY BUTTON */}
      <div className="fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-xl border-t border-gray-200 p-5 shadow-xl">
        <button
          onClick={handleOrder}
          className="w-full py-4 bg-gradient-to-r from-[#FF7A00] to-[#FF9550]
                     text-white text-lg font-semibold rounded-2xl shadow-lg
                     hover:shadow-xl active:scale-95 transition-all"
        >
          Place Order on WhatsApp →
        </button>
      </div>
    </div>
  );
}

/* Reusable Step Component */
function Step({ number, text }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-7 h-7 rounded-full bg-[#FF7A00]/10 text-[#FF7A00] flex items-center justify-center font-semibold text-sm">
        {number}
      </div>
      <p className="text-gray-700 text-sm leading-tight">{text}</p>
    </div>
  );
}
