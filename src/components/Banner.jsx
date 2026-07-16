import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section
      style={{ backgroundColor: "#EEE9E1" }}
      className="overflow-hidden"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 lg:py-5">
        {/* Left */}
        <div>
          <p
            className="mb-3 uppercase tracking-[0.3em] text-sm font-semibold"
            style={{ color: "#8B9B7B" }}
          >
            New Autumn Collection
          </p>

          <h1
            className="mb-6 text-5xl font-bold leading-tight lg:text-6xl"
            style={{ color: "#5A524A" }}
          >
            Elevate Your Everyday Style.
          </h1>

          <p
            className="mb-8 max-w-lg text-lg leading-8"
            style={{ color: "#725F56" }}
          >
            Discover premium clothing designed with timeless elegance,
            exceptional comfort, and effortless confidence for every occasion.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-full px-8 py-3 font-medium text-white transition duration-300 hover:opacity-90"
              style={{ backgroundColor: "#725F56" }}
            >
              Shop Collection
            </Link>

            <Link
              href="/products"
              className="rounded-full border px-8 py-3 font-medium transition duration-300 hover:bg-white"
              style={{
                borderColor: "#725F56",
                color: "#725F56",
              }}
            >
              Explore Products
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <div
            className="absolute -left-10 top-10 h-60 w-60 rounded-full blur-3xl"
            style={{
              backgroundColor: "#8B9B7B30",
            }}
          />

          <Image
            src="/banner.jpg"
            alt="Fashion Collection"
            width={700}
            height={850}
            priority
            className="relative mx-auto rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}