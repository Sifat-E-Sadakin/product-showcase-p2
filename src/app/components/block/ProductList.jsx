import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.products?.map((product, index) => (
        <div key={index} className="border border-black p-2">
          <h1>{product.title}</h1>
          <p>{product.price}</p>
          <Link href={`/productDetails/${product.id}`}>Details</Link>
          `
          <img src={product.image} alt={product.name} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
