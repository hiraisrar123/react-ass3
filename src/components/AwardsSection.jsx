import React from "react";

const awards = [
  { img: "/img4.png", title: "Market leader across 18 categories", bg: "bg-red-50" },
  { img: "/img5.png", title: "Most loved SaaS tool in 2021", bg: "bg-pink-50" },
  { img: "/img6.png", title: "Category leader in 2022", bg: "bg-cyan-50" },
  { img: "/img9.png", title: "Most recommended tool in 2021", bg: "bg-purple-50" },
  { img: "/img13.png", title: "Champion in survey tool 2022", bg: "bg-yellow-50" },
  { img: "/img4.png", title: "Top performer spring 2021", bg: "bg-orange-50" },
];

const AwardsSection = () => {
  return (
    <section className="py-16 px-4 text-center">
      <h1 className="text-sm text-teal-400 uppercase mb-2">Awards</h1>
      <h6 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
        An <span className="font-extrabold">award winning</span> platform,{" "}
        <span className="font-extrabold">loved by customers</span>.
      </h6>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {awards.map((award, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow hover:scale-105 transition-transform ${award.bg}`}
          >
            <img
              src={award.img}
              alt={award.title}
              className="mx-auto mb-4 w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 object-contain"
            />
            <p className="font-semibold text-sm sm:text-base md:text-lg">{award.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;