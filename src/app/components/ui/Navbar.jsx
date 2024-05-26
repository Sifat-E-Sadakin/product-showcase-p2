import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-[80px] bg-cyan-600 flex justify-center items-center ">
      <Link href={"/"} className="text-white text-2xl font-semibold">
        Cloudly E-Commerce
      </Link>
      {/* <Link href={"/"} className="text-white ml-5">
        Home
      </Link> */}
    </div>
  );
};

export default Navbar;
