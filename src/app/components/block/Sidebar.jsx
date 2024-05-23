"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Sidebar = ({ category, changeCategory }) => {
  return (
    <div>
      <h1>All Category</h1>
      <ul>
        {category.map((cat, index) => (
          <li key={index}>
            <Link href={""} onClick={() => changeCategory(cat)}>
              {cat}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
