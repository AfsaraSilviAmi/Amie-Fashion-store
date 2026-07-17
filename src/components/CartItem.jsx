"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartItem({ item }) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useCart();

  return (
    <div className="flex gap-6 rounded-2xl bg-white p-5 shadow">
      <Image
        src={item.image}
        alt={item.name}
        width={120}
        height={140}
        className="rounded-xl object-cover"
      />

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold">
            {item.name}
          </h3>

          <p>{item.selectedColor}</p>

          <p>Size: {item.selectedSize}</p>

          <p>${item.price}</p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() =>
              decreaseQuantity(
                item.id,
                item.selectedColor,
                item.selectedSize
              )
            }
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              increaseQuantity(
                item.id,
                item.selectedColor,
                item.selectedSize
              )
            }
          >
            +
          </button>

          <button
            onClick={() =>
              removeItem(
                item.id,
                item.selectedColor,
                item.selectedSize
              )
            }
            className="ml-auto text-red-500"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}