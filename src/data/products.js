const products = [
  {
    id: 1,
    name: "Linen Maxi Dress",
    category: "Dresses",
    price: 249,
    image: "https://images.unsplash.com/photo-1762342011573-57a83895f249?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TGluZW4lMjBNYXhpJTIwRHJlc3MlMjBjcmVhbSUyMGFuZCUyMG9saXZlfGVufDB8fDB8fHww",
    rating: 4.8,
    colors: ["Blue", "Olive"],
    sizes: ["S", "M", "L"],
    inStock: true,
    description:
      "A flowy linen maxi dress designed for effortless elegance and everyday comfort."
  },
  {
    id: 2,
    name: "Oversized Knit Sweater",
    category: "Knitwear",
    price: 219,
    image: "https://images.unsplash.com/photo-1587999882859-34b3f313df77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE92ZXJzaXplZCUyMEtuaXQlMjBTd2VhdGVyfGVufDB8fDB8fHww",
    rating: 4.7,
    colors: ["Beige", "Brown", "White"],
    sizes: ["S", "M", "L"],
    inStock: true,
    description:
      "Soft knitted sweater with a relaxed silhouette for cozy everyday wear."
  },
  {
    id: 3,
    name: "Classic White Blouse",
    category: "Tops",
    price: 149,
    image: "https://images.unsplash.com/photo-1761711308969-148bed835722?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xhc3NpYyUyMHdoaXRlJTIwYmxvdXNlfGVufDB8fDB8fHww",
    rating: 4.9,
    colors: ["White"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    description:
      "A timeless cotton blouse perfect for both work and casual styling."
  },
  {
    id: 4,
    name: "Pleated Midi Skirt",
    category: "Skirts",
    price: 189,
    image: "https://images.unsplash.com/photo-1533659828870-95ee305cee3e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.6,
    colors: ["Sage", "Cream", "Dark Blue"],
    sizes: ["S", "M", "L"],
    inStock: true,
    description:
      "Elegant pleated midi skirt with a flattering high-waist design."
  },
  {
    id: 5,
    name: "Relaxed Wide Leg Pants",
    category: "Bottoms",
    price: 169,
    image: "https://images.unsplash.com/photo-1763719161819-85b100b63f42?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFJlbGF4ZWQlMjBXaWRlJTIwbGVnJTIwcGFudHN8ZW58MHx8MHx8fDA%3D",
    rating: 4.5,
    colors: ["Pink"],
    sizes: ["S", "M", "L"],
    inStock: true,
    description:
      "Comfortable wide-leg trousers tailored for a sophisticated everyday look."
  },
  {
    id: 6,
    name: "Cotton Co-Ord Set",
    category: "Co-Ord Sets",
    price: 299,
    image: "https://images.unsplash.com/photo-1769063382633-ef27742cf2a1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
    colors: ["Sand", "White", "Blue"],
    sizes: ["S", "M", "L"],
    inStock: true,
    description:
      "Minimal co-ord set crafted from breathable cotton for effortless styling."
  },
  {
    id: 7,
    name: "Floral Summer Dress",
    category: "Dresses",
    price: 229,
    image: "https://images.unsplash.com/photo-1517970640957-23d07d5ed08c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEZsb3JhbCUyMFN1bW1lciUyMERyZXNzfGVufDB8fDB8fHww",
    rating: 4.9,
    colors: ["Ivory", "Pink"],
    sizes: ["S", "M", "L"],
    inStock: true,
    description:
      "Lightweight floral dress made for sunny days and weekend outings."
  },
  {
    id: 8,
    name: "Elegant Satin Blouse",
    category: "Tops",
    price: 179,
    image: "https://images.unsplash.com/photo-1772855436877-3fe7489f4199?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEVsZWdhbnQlMjBTYXRpbiUyMEJsb3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.7,
    colors: ["Champagne", "White"],
    sizes: ["S", "M", "L"],
    inStock: false,
    description:
      "Luxurious satin blouse that pairs beautifully with skirts or trousers."
  },
  {
    id: 9,
    name: "High Waist Straight Jeans",
    category: "Bottoms",
    price: 199,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    rating: 4.6,
    colors: ["Light Blue", "Dark Blue"],
    sizes: ["26", "28", "30", "32"],
    inStock: true,
    description:
      "Classic high-rise denim with a flattering straight-leg fit."
  },
  {
    id: 10,
    name: "Minimal Trench Coat",
    category: "Outerwear",
    price: 349,
    image: "https://images.unsplash.com/photo-1716004355137-8ce653ddd713?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWluaW1hbCUyMFRyZW5jaCUyMENvYXR8ZW58MHx8MHx8fDA%3D",
    rating: 4.9,
    colors: ["Brown"],
    sizes: ["S", "M", "L"],
    inStock: true,
    description:
      "A timeless trench coat that completes every minimalist wardrobe."
  }
];

export default products;