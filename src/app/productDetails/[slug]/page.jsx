"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import dateFormat from "dateformat";
import { Rating } from "@mui/material";
const page = () => {
  const [productDetails, setProductDetails] = useState("");
  const [mainImage, setMainImage] = useState("");
  const productId = useParams().slug;
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then(res => res.json())
      .then(data => {
        setProductDetails(data);
        setMainImage(data.thumbnail);
      });
  }, [productId]);

  const changeImage = image => {
    setMainImage(image);
  };
  console.log(productDetails);
  return (
    <div className="container mx-auto mb-10">
      {productDetails ? (
        <div>
          <div className="flex   justify-center items-center my-10">
            <div className="w-1/2 flex justify-center items-center">
              <div>
                <div className="w-96">
                  <img className="w-full h-auto" src={mainImage} alt="" />
                </div>
                <div className="w-20 flex gap-2">
                  {productDetails.images.map((image, index) => (
                    <img
                      className="w-full cursor-pointer hover:opacity-50"
                      onClick={() => changeImage(image)}
                      key={index}
                      src={image}
                      alt=""
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="w-1/2 text-start space-y-3 bg-cyan-50 p-4 rounded">
              <h1 className="text-3xl font-semibold">{productDetails.title}</h1>
              <div className="flex items-center gap-3">
                <Rating
                  value={productDetails.rating}
                  precision={0.5}
                  readOnly
                />{" "}
                {productDetails.rating}
              </div>
              <p className="text-xl text-blue-800 font-semibold">
                Price: {productDetails.price} BDT
              </p>
              <p className="text-xl  font-semibold">
                Brand: {productDetails.brand}
              </p>
              <p>{productDetails.description}</p>
              <div className="w-32">
                <img src={productDetails.meta.qrCode} alt="" />
              </div>
            </div>
          </div>
          <div className=" bg-cyan-50 p-4 rounded  my-7">
            <h1 className="text-2xl my-10 font-semibold">More Details</h1>
            <div className="grid grid-cols-2 gap-4">
              <p className="text-lg font-normal">
                Category: {productDetails.category}
              </p>
              <p className="text-lg font-normal">
                Stock: {productDetails.stock}
              </p>
              <p className="text-lg font-normal">
                Weight: {productDetails.weight}
              </p>
              <p className="text-lg font-normal">
                Return Policy: {productDetails.returnPolicy}
              </p>
              <p className="text-lg font-normal">
                Shipping Information: {productDetails.shippingInformation}
              </p>
              <p className="text-lg font-normal">
                Warranty Information: {productDetails.warrantyInformation}
              </p>
            </div>
          </div>

          <div className=" bg-cyan-50 p-4 rounded my-7">
            <h1 className="text-2xl my-10 font-semibold">Customer Review</h1>
            <div className="space-y-3">
              {productDetails.reviews.map(review => (
                <div className="border border-gray-300 p-4 space-y-2">
                  <p className="text-lg font-semibold">{review.reviewerName}</p>
                  <div className="flex items-center gap-3">
                    <Rating
                      value={productDetails.rating}
                      precision={0.5}
                      readOnly
                    />{" "}
                    {productDetails.rating}
                  </div>
                  <p className="text-sm font-normal">
                    {dateFormat(productDetails.date, "fullDate")}
                  </p>
                  <p className="text-lg font-medium">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default page;
