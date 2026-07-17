"use client";

import { useCart } from "@/context/CartContext";
import CartItem from "@/components/CartItem";

export default function CartPage() {
  const { cart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#5A524A]">
            Your cart is empty
          </h2>

          <p className="mt-4 text-[#725F56]">
            Looks like you haven't added anything yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section
      className="mx-auto max-w-7xl px-6 py-16"
      style={{ background: "#EEE9E1" }}
    >
      <h1 className="mb-10 text-4xl font-bold text-[#5A524A]">
        Shopping Cart
      </h1>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {cart.map((item) => (
            <CartItem
              key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
              item={item}
            />
          ))}
        </div>

        <div className="rounded-3xl bg-white p-8 shadow">
          <h2 className="mb-6 text-2xl font-bold">
            Order Summary
          </h2>

          <div className="flex justify-between">
            <span>Total</span>

            <span className="font-bold">
              $ {totalPrice}
            </span>
          </div>

          <button
            className="mt-8 w-full rounded-full bg-[#725F56] py-4 text-white"
          >
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
}