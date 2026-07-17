import ProductGrid from '@/components/ProductGrid';
import products from '@/data/products';
import React from 'react';

const ProductsPage = () => {
    return (
        <div className="mx-auto max-w-7xl px-5 py-12">
             <h1 className="mb-8 text-[#5A524A] text-4xl font-bold">
        Our Collection
      </h1>
            
                        <ProductGrid products={products}></ProductGrid>
            
        </div>
    );
};

export default ProductsPage;