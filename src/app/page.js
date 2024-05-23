"use client";
import Image from "next/image";
import Sidebar from "./components/block/Sidebar";
import { useEffect, useState } from "react";
import ProductList from "./components/block/ProductList";

export default function Home() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("smartphones");

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
      });
    fetch("https://dummyjson.com/products/categories")
      .then(res => res.json())
      .then(data => {
        setCategory(data);
      });
  }, [selectedCategory]);

  const changeCategory = category => {
    setSelectedCategory(category);
  };
  return (
    <main className="grid grid-cols-10">
      <div className="border border-black h-[100vh] col-start-1 col-end-2">
        <Sidebar category={category} changeCategory={changeCategory} />
      </div>
      <div className="col-start-3 col-end-10">
        <ProductList products={product} />
      </div>
    </main>
  );
}
