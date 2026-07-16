import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "#EEE9E1",
        borderColor: "#D9D2C9",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="logo"
                width={90}
                height={90}
                className="mb-4"
              />
            </Link>

            <p
              className="max-w-xs text-sm leading-7"
              style={{ color: "#725F56" }}
            >
              Timeless fashion crafted with elegance and comfort. Discover
              premium collections designed for everyday confidence.
            </p>
          </div>

    
<div>
  <h3
    className="mb-5 text-lg font-semibold"
    style={{ color: "#5A524A" }}
  >
    Contact Us
  </h3>

  <div
    className="space-y-1 text-sm leading-7"
    style={{ color: "#725F56" }}
  >
    <div>
      <p className="font-medium">Email</p>
      <a
        href="mailto:afsarasilvi44@gmail.com"
        className="transition hover:text-[#8B9B7B]"
      >
        afsarasilvi44@gmail.com
      </a>
    </div>

    <div>
      <p className="font-medium">Phone</p>
      <p>+880119000000</p>
    </div>
    <div>
      <p className="font-medium">Address</p>
      <p>Dhaka, Bangladesh</p>
    </div>
  </div>
</div>

       
          <div>
            <h3
              className="mb-5 text-lg font-semibold"
              style={{ color: "#5A524A" }}
            >
              Company
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-[#8B9B7B]"
                  style={{ color: "#725F56" }}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="transition hover:text-[#8B9B7B]"
                  style={{ color: "#725F56" }}
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="/cart"
                  className="transition hover:text-[#8B9B7B]"
                  style={{ color: "#725F56" }}
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

         
          <div>
            <h3
              className="mb-5 text-lg font-semibold"
              style={{ color: "#5A524A" }}
            >
              Stay Connected
            </h3>

            <p
              className="mb-5 text-sm leading-7"
              style={{ color: "#725F56" }}
            >
              Subscribe to receive updates on new arrivals and exclusive
              collections.
            </p>

            <div className="flex gap-4">
              <a
                href=""
                className="rounded-full border p-3 transition hover:bg-[#8B9B7B] hover:text-white"
                style={{
                  borderColor: "#CFC7BC",
                  color: "#5A524A",
                }}
              >
                <FaFacebookF />
              </a>

              <a
                href=""
                className="rounded-full border p-3 transition hover:bg-[#8B9B7B] hover:text-white"
                style={{
                  borderColor: "#CFC7BC",
                  color: "#5A524A",
                }}
              >
                <FaInstagram />
              </a>

              <a
                href=""
                className="rounded-full border p-3 transition hover:bg-[#8B9B7B] hover:text-white"
                style={{
                  borderColor: "#CFC7BC",
                  color: "#5A524A",
                }}
              >
                <FiTwitter />
              </a>

              <a
                href=""
                className="rounded-full border p-3 transition hover:bg-[#8B9B7B] hover:text-white"
                style={{
                  borderColor: "#CFC7BC",
                  color: "#5A524A",
                }}
              >
                <FaPinterestP />
              </a>
            </div>
          </div>
        </div>

      

        <div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 text-sm md:flex-row"
          style={{
            borderColor: "#D9D2C9",
            color: "#725F56",
          }}
        >
          <p>© 2026 Amié. All rights reserved by Ami.</p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#8B9B7B]">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-[#8B9B7B]">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}