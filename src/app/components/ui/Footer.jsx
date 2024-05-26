import React from "react";

const Footer = () => {
  return (
    <div className="h-[40vh] bg-cyan-600 flex justify-center items-center">
      <div className=" flex flex-col justify-center items-center gap-5">
        <h1 className="text-white text-4xl">Subscribe to our newsletter</h1>
        <p className="text-white text-center">
          Subscribe to our newsletter to get the latest updates and offers.
        </p>

        <div className="flex gap-5">
          <input
            type="text"
            placeholder="Enter your email"
            className="p-2 rounded"
          />
          <button className="bg-cyan-800 text-white p-2 rounded">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
