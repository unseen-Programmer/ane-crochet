import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrendingNow from "./components/TrendingNow";
import Categories from "./components/Categories";
import ProductGrid from "./components/ProductGrid";
import ProductDetails from "./components/ProductDetails";
import About from "./components/About";
import Toast from "./components/Toast";
import MiniCartDrawer from "./components/MiniCartDrawer";

// Hooks
import { useState } from "react";
import { useCart } from "./context/CartContext";

// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import CartPage from "./pages/CartPage";
import AddressPage from "./pages/AddressPage";
import PaymentPage from "./pages/PaymentPage";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  const { toast, setShowCart } = useCart();

  return (
    <Router>
      <div className="min-h-screen text-[#5B2E3C]">

        {/* ✅ NAVBAR */}
        <Navbar onCartOpen={() => setShowCart(true)} />

        <main>
          <Routes>

            {/* ✅ HOME PAGE */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <TrendingNow />

                  {/* ✅ SHOP SECTION */}
                  <section id="shop" className="max-w-6xl mx-auto px-4 py-12">
                    <div className="rounded-2xl bg-white/60 p-6 md:p-8 shadow-sm border border-[#FADCE7]">

                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <h2 className="text-2xl font-semibold">New In</h2>
                        <p className="mt-2 md:mt-0 text-sm text-gray-600">
                          Small-batch pieces, handcrafted with care.
                        </p>
                      </div>

                      <div className="mt-6">
                        <ShopArea />
                      </div>

                    </div>
                  </section>

                  <About />
                </>
              }
            />

            {/* ✅ PRODUCT DETAILS */}
            <Route path="/product/:slug" element={<ProductDetails />} />

            {/* ✅ CART */}
            <Route path="/cart" element={<CartPage />} />

            {/* ✅ CHECKOUT FLOW (REQUIRED FOR BUY NOW) */}
            <Route path="/address" element={<AddressPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/success" element={<OrderSuccess />} />

          </Routes>

          {/* ✅ TOAST */}
          <Toast message="Added to cart!" show={toast} />

          {/* ✅ MINI CART */}
          <MiniCartDrawer />

        </main>
      </div>
    </Router>
  );
}

// ✅ SHOP LOGIC
function ShopArea() {
  const [selected, setSelected] = useState("All");

  return (
    <>
      <Categories selected={selected} onSelect={setSelected} />
      <ProductGrid filter={selected} />
    </>
  );
}

export default App;
