import products from "@/data/products";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function FeaturedProducts() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-20 bg-[#EEE9E1]">
      <div className="mx-auto max-w-7xl px-5">

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-[#8B9B7B] text-sm font-semibold">
            Featured Collection
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#5A524A]">
            Our Best Sellers
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-[#725F56]">
            Discover our most-loved pieces, thoughtfully designed
            with timeless elegance and everyday comfort.
          </p>

        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex rounded-full bg-[#725F56] px-8 py-3 text-white transition hover:bg-[#5A524A]"
          >
            View All Products
          </Link>
        </div>

      </div>
    </section>
  );
}