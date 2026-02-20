import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#eef5f5] text-center pt-20 pb-32">

      <h1 className="text-4xl font-bold text-gray-800">
        A powerful online engagement tool
      </h1>

      <p className="text-gray-500 mt-4">
        With stellar one-click reports.
      </p>

      <button className="mt-6 bg-teal-500 text-white px-6 py-2 rounded">
        Get started free
      </button>

      {/* Single Image with 5 bottom circle cuts */}
      <div className="mt-16">
        <img
          src="/img1.png"
          alt="team"
          className="w-full object-cover"
          style={{
            WebkitMaskImage: `
              radial-gradient(circle at 10% 100%, black 80px, transparent 81px),
              radial-gradient(circle at 30% 100%, black 80px, transparent 81px),
              radial-gradient(circle at 50% 100%, black 80px, transparent 81px),
              radial-gradient(circle at 70% 100%, black 80px, transparent 81px),
              radial-gradient(circle at 90% 100%, black 80px, transparent 81px)
            `,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "20% 100%",
          }}
        />
      </div>

    </section>
  );
};

export default Hero;
