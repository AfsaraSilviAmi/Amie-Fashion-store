import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg">
      <div className="relative h-72">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold">{product.name}</h3>

        <p className="mt-1 text-sm text-gray-500">
          {product.category}
        </p>

        <p className="mt-2 font-bold text-[#8B9B7B]">
          ${product.price}
        </p>

        <Link
          href={`/products/${product.id}`}
          className="mt-4 font-medium inline-block rounded-full bg-[#725F56] hover:bg-[#5A524A] px-4 py-2 text-white"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}