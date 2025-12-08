import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddressPage() {
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    pincode: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("address", JSON.stringify(address));
    navigate("/payment");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFAFB] to-[#F3EEF5] px-4 py-6 pb-40">

      {/* HEADER */}
      <h1 className="text-2xl font-bold text-[#3A1F2D] mb-6">
        Shipping Details
      </h1>

      {/* MAIN CARD */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 space-y-6
                  backdrop-blur-xl"
      >
        <SectionTitle title="Contact Information" />

        <Input
          label="Full Name"
          value={address.name}
          onChange={(v) => setAddress({ ...address, name: v })}
        />

        <Input
          label="Phone Number"
          value={address.phone}
          onChange={(v) => setAddress({ ...address, phone: v })}
        />

        <Divider />

        <SectionTitle title="Shipping Address" />

        <Input
          label="Street Address"
          value={address.street}
          onChange={(v) => setAddress({ ...address, street: v })}
        />

        <Input
          label="City"
          value={address.city}
          onChange={(v) => setAddress({ ...address, city: v })}
        />

        <Input
          label="Pincode"
          value={address.pincode}
          onChange={(v) => setAddress({ ...address, pincode: v })}
        />
      </form>

      {/* STICKY FOOTER BUTTON */}
      <div className="fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-xl border-t border-gray-200 p-5 shadow-xl">
        <button
          onClick={handleSubmit}
          className="w-full py-4 bg-gradient-to-r from-[#FF7A00] to-[#FF9550]
                     text-white text-lg font-semibold rounded-2xl shadow-md
                     hover:shadow-lg active:scale-95 transition-all"
        >
          Continue to Payment →
        </button>
      </div>
    </div>
  );
}

/* Title for Sections */
function SectionTitle({ title }) {
  return (
    <p className="text-sm font-semibold text-gray-800 tracking-wide mb-1">
      {title}
    </p>
  );
}

/* Divider Line */
function Divider() {
  return <div className="h-[1px] bg-gray-200 my-2"></div>;
}

/* Input Component */
function Input({ label, value, onChange }) {
  return (
    <div className="flex flex-col">
      <label className="text-xs font-medium text-gray-600 mb-1">{label}</label>

      <input
        value={value}
        required
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-3 rounded-xl border border-gray-300
                   bg-white shadow-sm
                   focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/40
                   transition-all"
      />
    </div>
  );
}
