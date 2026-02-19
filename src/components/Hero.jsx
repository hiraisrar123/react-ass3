import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-100 text-center py-20 px-4">

      <h1 className="text-4xl font-bold text-gray-800">
        A powerful online engagement tool
        <br />
        that’s intuitive and simple to use.
      </h1>

      <p className="text-gray-500 mt-4">
        With stellar one-click reports and unmatched support.
      </p>

      <button className="mt-6 bg-teal-500 text-white px-6 py-2 rounded">
        Get started free
      </button>

      {/* Circle Images */}
      <div className="flex justify-center gap-6 mt-10">
        <img
          src="public/img1.png"
          className="w-28 h-28 rounded-full"
        />
      </div>

    </section>

    
  );
};

export default Hero;
