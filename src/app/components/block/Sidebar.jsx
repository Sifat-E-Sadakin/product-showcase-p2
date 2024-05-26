"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Sidebar = ({ category, changeCategory, activeCategory }) => {
  return (
    <div className="h-full relative">
      <h1 className="absolute w-full top-0 left-0 bg-cyan-100 text-lg px-5 py-3 opacity-1 text-nowrap">
        All Categories List
      </h1>
      <ul className="space-y-2 h-full overflow-y-scroll p-5 pt-14">
        {category.map((cat, index) => (
          <li
            className={`${
              activeCategory === cat.slug ? "bg-cyan-100" : ""
            } p-2 rounded cursor-pointer hover:bg-cyan-100 hover:pl-4 duration-300`}
            key={index}>
            <Link href={""} onClick={() => changeCategory(cat.slug)}>
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
