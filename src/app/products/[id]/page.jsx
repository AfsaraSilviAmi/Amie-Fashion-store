import products from "@/data/products";
import ProductDetailsCard from '@/components/ProductDetailsCard';
import React from 'react';

const ProductDetailsPage = async({params}) => {
    const {id} = await params
    const product = products.find((item)=>item.id === Number(id))
    return (
        <div>
            <ProductDetailsCard product={product}></ProductDetailsCard>
        </div>
    );
};

export default ProductDetailsPage;