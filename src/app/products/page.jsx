import ProductCard from '@/components/ProductCard';
import products from '@/data/products';
import React from 'react';

const ProductsPage = () => {
    return (
        <div className="mx-auto max-w-7xl px-5 py-12">
             <h1 className="mb-8 text-4xl font-bold">
        Our Collection
      </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {
                    products.map((product)=>(
                        <ProductCard key={product.id} product={product}></ProductCard>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductsPage;