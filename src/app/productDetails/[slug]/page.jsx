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
        <div>
          <h1>{productDetails.title}</h1>
          <p>{productDetails.price}</p>
          <img src={productDetails.image} alt={productDetails.name} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default page;
