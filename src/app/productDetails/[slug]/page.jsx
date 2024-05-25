"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const [productDetails, setProductDetails] = useState("");
  const productId = useParams().slug;

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then(res => res.json())
      .then(data => {
        setProductDetails(data);
      });
  }, [productId]);
  return (
    <div>
      {productDetails ? (
        <div className="flex justify-center">
          <div className="w-1/2 flex justify-center items-center">
            <img src={productDetails.thumbnail} alt="" />
          </div>
          <div className="w-1/2 text-center">
            <h1>{productDetails.title}</h1>
            <p>{productDetails.price} BDT</p>
            <p>{productDetails.description}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default page;
