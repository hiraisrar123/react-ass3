// src/components/TrustedSection.jsx
import React from "react";

const logos = [
  { name: "Capgemini", color: "text-blue-500" },
  { name: "YAMAHA", color: "text-red-600" },
  { name: "Biocon", color: "text-blue-700" },
  { name: "DELL", color: "text-blue-600" },
  { name: "CK BIRLA GROUP", color: "text-gray-700" },
  { name: "Shell", color: "text-yellow-500" },
];

export default function TrustedSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Trusted by section */}
      <div className="text-center mb-12">
        <p className="text-sm text-teal-400 uppercase mb-2">Our Customers</p>
        <h2 className="text-2xl font-bold">
          Trusted by <span className="text-black">100,000+ customers</span> in 90+ countries
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
          {logos.map((logo) => (
            <span key={logo.name} className={`font-semibold ${logo.color}`}>
              {logo.name}
            </span>
          ))}
        </div>

        <div className="flex justify-center gap-6 mt-4 text-sm text-gray-500">
          <span>✔ 18281 signed up last month</span>
          <span>✔ GDPR & CCPA-ready</span>
          <span>✔ Leader@G2 Summer</span>
        </div>
      </div>

      {/* Tool built for people section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-teal-400 uppercase text-sm mb-2">Our Promise</p>
          <h3 className="text-3xl font-bold mb-4">Tool built for people.</h3>
          <p className="text-gray-600 mb-4">
            Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom.
          </p>
          <p className="text-gray-600 mb-6">
            Circle has 100+ integrations with tools you already use and love.
          </p>
          <button className="bg-teal-400 text-white px-6 py-3 rounded-md hover:bg-teal-500 transition">
            Get started free
          </button>
        </div>

<div className="flex justify-center">
  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
    <span className="text-gray-500">Team Image Here</span>
  </div>
</div>
      </div>
    </div>
  );
}