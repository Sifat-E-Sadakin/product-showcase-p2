"use client";
import Image from "next/image";
import Sidebar from "./components/block/Sidebar";
import { useEffect, useState } from "react";
import ProductList from "./components/block/ProductList";
import Link from "next/link";
import { GoSidebarCollapse } from "react-icons/go";

export default function Home() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("beauty");
  const [activeCategory, setActiveCategory] = useState("beauty");
  const [showSidebar, setShowSidebar] = useState(false);

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
    setActiveCategory(category);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <main className="h-[calc(100vh-80px)] flex">
      <div
        className={`bg-white h-[calc(100vh-80px)] w-[300px] absolute  md:static md:translate-x-0 duration-300 z-10 ${
          showSidebar ? "-translate-x-0" : "-translate-x-[100%]"
        } `}>
        <Sidebar
          activeCategory={activeCategory}
          category={category}
          changeCategory={changeCategory}
        />
      </div>
      <div className="p-1 md:p-10 h-[calc(100vh-80px)] overflow-scroll no-x-scrollbar flex-1 ">
        <div className="md:hidden flex justify-end ">
          <button className="" onClick={() => toggleSidebar()}>
            <GoSidebarCollapse size={30} />
          </button>
        </div>
        <ProductList products={product} />
      </div>
    </main>
  );
}
