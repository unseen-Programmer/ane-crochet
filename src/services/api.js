const BASE_URL = "https://ane-croshet.onrender.com/api";

// ✅ Get all products
export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products/`);
  if (!res.ok) {
    console.error("Failed to fetch products", res.status);
    throw new Error("Failed to fetch products");
  }
  return await res.json();
}

// ✅ Get single product by slug
export async function getProduct(slug) {
  const res = await fetch(`${BASE_URL}/products/${slug}/`);
  if (!res.ok) {
    console.error("Failed to fetch product", res.status);
    throw new Error("Failed to fetch product");
  }
  return await res.json();
}
