'use client'
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ProductDetailsCard = ({product}) => {
     const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
     const [selectedColor, setSelectedColor] = useState(product.colors[0]);
       const [quantity, setQuantity] = useState(1);
       const { addToCart } = useCart();
        const handleAddToCart = () => {
            toast.success("Item added to cart")
    addToCart({
    ...product,
    quantity,
    selectedColor,
    selectedSize,
  });
  };
    return (
        <div className="mx-auto max-w-7xl px-6 py-16">
             <div className="grid gap-12 lg:grid-cols-2">


        <div className="overflow-hidden rounded-3xl bg-white p-6 shadow">
          <Image
            src={product.image}
            alt={product.name}
            width={700}
            height={850}
            className="rounded-2xl object-cover"
          />
        </div>

        <div>

          <p
            className="mb-2 uppercase tracking-[0.2em] text-[#8B9B7B]"
          >
            {product.category}
          </p>

          <h1
            className="text-5xl font-bold text-[#5A524A]"
          >
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            <span>{product.rating}</span>
          </div>

          <h2
            className="mt-6 text-3xl font-bold text-[#8B9B7B]"
          >
             ${product.price}
          </h2>

          <p
            className="mt-6 leading-8 text-[#725F56]"
          >
            {product.description}
          </p>


          <div className="mt-8">
            <h3 className="mb-3 font-semibold">Color</h3>

            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`rounded-full border px-5 py-2 ${
                    selectedColor === color
                      ? "bg-[#725F56] text-white"
                      : "bg-white"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="mb-3 font-semibold">Size</h3>

            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`h-11 w-11 rounded-full border ${
                    selectedSize === size
                      ? "bg-[#725F56] text-white"
                      : "bg-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">

            <button
              onClick={() =>
                quantity > 1 &&
                setQuantity(quantity - 1)
              }
              className="h-11 w-11 rounded-full border"
            >
              -
            </button>

            <span className="text-xl">{quantity}</span>

            <button
              onClick={() =>
                setQuantity(quantity + 1)
              }
              className="h-11 w-11 rounded-full border"
            >
              +
            </button>
          </div>


          <p
            className="mt-8 font-semibold"
            style={{
              color: product.inStock
                ? "#8B9B7B"
                : "#dc2626",
            }}
          >
            {product.inStock
              ? "In Stock"
              : "Out of Stock"}
          </p>

          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="mt-10 w-full rounded-full py-4 text-lg bg-[#725F56] font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            Add To Cart
          </button>
        </div>
      </div>
        </div>
    );
};

export default ProductDetailsCard;