"use client";
import { useState } from "react";
import ProductCard from "./ProductCard";


export default function ProductGrid({ products }) {
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((item) => item.category)),
  ];

  const filteredProducts =
    category === "All"
      ? products
      : products.filter(
          (product) => product.category === category
        );

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`rounded-full px-4 py-2 ${
              category === item
                ? "bg-[#725F56] text-white"
                : "bg-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
}