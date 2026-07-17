"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useCart } from "@/context/CartContext";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Cart",
    href: "/cart",
  },
];

export default function NavBar() {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
   <nav
  className="sticky top-0 z-50 border-b backdrop-blur-xl"
  style={{
    backgroundColor: "rgba(238,233,225,.92)",
    borderColor: "#D8D0C7",
  }}
>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={120}
            height={50}
            className="w-16 object-contain"
          />
        </Link>

       
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative text-sm font-medium transition-all duration-300 ${
                 pathname === link.href? "text-[#5A524A]": "text-[#725F56] hover:text-[#5A524A]"
                }`}
              >
                {link.name}

                {pathname === link.href && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#8B9B7B]"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>

       
        <div className="flex items-center gap-4">
         
          <Link
            href="/cart"
            className="relative rounded-full p-2 transition hover:bg-[#E4DDD4]"
          >
            <HiOutlineShoppingBag
      size={24}
    className="text-[#5A524A]"
/>

           
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#8B9B7B] text-xs text-white">
              {totalItems}
            </span>
          </Link>

         
          <Link
            href="/products"
           className="hidden rounded-full bg-[#725F56] px-5 py-2 text-sm font-medium text-white transition duration-300 hover:bg-[#5A524A] md:block"
          >
            Shop Now
          </Link>

        
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? (
              <HiOutlineX size={28} />
            ) : (
              <HiOutlineMenuAlt3 size={28} />
            )}
          </button>
        </div>
      </div>

  
      {isMenuOpen && (
        <div className="border-t bg-white md:hidden">
          <ul className="space-y-1 px-5 py-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-lg px-3 py-3 transition ${
                   pathname === link.href
  ? "text-[#5A524A]"
  : "text-[#725F56] hover:text-[#5A524A]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <Link
              href="/products"
              className="mt-3 block rounded-full  bg-[#725F56] px-4 py-3 text-center font-medium text-white"
            >
              Shop Now
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}