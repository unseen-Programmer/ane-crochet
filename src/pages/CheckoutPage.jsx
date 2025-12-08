import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const { cart, total } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  // 📌 Handle Input Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 💬 WhatsApp Order Submit
  const handlePlaceOrder = () => {
    if (!form.name || !form.phone || !form.address || !form.city || !form.pincode) {
      alert("Please fill all fields 🧵");
      return;
    }

    const message = `
*🧺 Ane Crochet Order Request* 💗

👩 *Name:* ${form.name}
📞 *Phone:* ${form.phone}

📍 *Address:*
${form.address}
${form.city} - ${form.pincode}

🛍️ *Order Items:*
${cart.map((i) => `• ${i.name} × ${i.qty} — ₹${(i.price * i.qty).toFixed(2)}`).join("\n")}

💰 *Total:* ₹${total.toFixed(2)}

✨ Please confirm & proceed with payment.
    `;

    const whatsappNumber = "91XXXXXXXXXX"; // ← replace with your number (NO +)
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
    navigate("/"); // redirect to home after submitting
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <p className="text-4xl mb-2">🧺</p>
        <h1 className="text-2xl font-semibold text-[#6B3442] mb-2">
          Your basket is empty
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Add something cute to your pastel collection.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF8BB6] to-[#FFB6D9] text-white text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
        >
          Browse Products ✨
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* 🏷️ Page Title */}
      <h1 className="text-3xl font-bold text-[#5B2E3C] mb-6 text-center">
        Checkout 🧺✨
      </h1>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* 📝 FORM */}
        <div className="bg-[#FFF6FA] p-6 rounded-2xl shadow border border-pink-100">
          <h2 className="text-lg font-semibold text-[#6B3442] mb-4">Shipping Information</h2>

          <div className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-pink-200 bg-white/80 text-[#5B2E3C]"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-pink-200 bg-white/80 text-[#5B2E3C]"
            />

            <textarea
              name="address"
              placeholder="House No, Street, Landmark"
              value={form.address}
              onChange={handleChange}
              rows={3}
              className="w-full p-3 rounded-xl border border-pink-200 bg-white/80 text-[#5B2E3C]"
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-pink-200 bg-white/80 text-[#5B2E3C]"
            />

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={form.pincode}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-pink-200 bg-white/80 text-[#5B2E3C]"
            />
          </div>

          {/* 📌 Order Button */}
          <button
            onClick={handlePlaceOrder}
            className="mt-6 w-full py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition whatsapp-btn"
          >
            Order on WhatsApp 💬
          </button>
        </div>

        {/* 🧮 SUMMARY */}
        <div className="bg-[#FFF0F6] p-6 rounded-2xl shadow border border-pink-100">
          <h2 className="text-lg font-semibold text-[#6B3442] mb-4">Order Summary</h2>

          <ul className="space-y-2 text-sm">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>
                  {item.name} × {item.qty}
                </span>
                <span>₹{(item.price * item.qty).toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <div className="border-t border-pink-200 mt-4 pt-4 text-lg font-bold text-[#5B2E3C] flex justify-between">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
