import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../services/api";

export default function ProductGrid({ filter }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res || []);
      setLoading(false);
    });
  }, []);

  // ✅ Safe filter by category name
  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((p) => p?.category?.name === filter);

  return (
    <section className="w-full px-3 sm:px-6 md:px-10 lg:px-16 py-10">

      <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#6E3C51] mb-6 text-center">
        Our Collection
      </h2>

      {/* LOADING */}
      {loading ? (
        <p className="text-center text-gray-400 text-sm animate-pulse">
          Loading products…
        </p>
      ) : filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500 text-sm">No products found…</p>
      ) : (
        <div
          className="
            grid
            grid-cols-2
            gap-3
            sm:grid-cols-3 sm:gap-5
            md:grid-cols-4 md:gap-7
          "
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
