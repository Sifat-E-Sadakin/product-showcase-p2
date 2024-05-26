import { Rating } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-4 gap-10  ">
      {products.products?.map((product, index) => (
        <div
          key={index}
          className="border border-cyan-300 shadow-lg rounded flex flex-col justify-between">
          <div className="w-auto h-[250px] py-5 flex justify-center">
            <img className="h-full" src={product.thumbnail} alt="" />
          </div>
          <div className="space-y-5">
            <div className="text-center">
              <h1 className="text-xl font-bold">{product.title}</h1>
              <Rating value={product.rating} precision={0.5} readOnly />
              <p className="text-lg font-semibold">{product.price} BDT</p>
            </div>
            <Link
              className="block p-2 text-center bg-cyan-400 text-white hover:bg-cyan-600 duration-300"
              href={`/productDetails/${product.id}`}>
              {" "}
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
