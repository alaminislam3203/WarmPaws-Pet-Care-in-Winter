import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaSnowflake, FaDog, FaPaw } from 'react-icons/fa';

const AllWinterCareTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in-out',
      once: true,
    });

    fetch('/winterCareTips.json')
      .then(res => res.json())
      .then(data => {
        const sortedTips = data.sort((a, b) => a.id - b.id);
        setTips(sortedTips);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="bg-[#F9FAFB] py-14 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-center text-gray-800 mb-10"
          data-aos="fade-down"
        >
          All Winter Care Tips for Pets
        </h2>

        <div className="flex flex-col items-center gap-10">
          {tips.map((tip, index) => (
            <div
              key={tip.id}
              data-aos={
                index % 3 === 0
                  ? 'fade-right'
                  : index % 3 === 1
                  ? 'zoom-in-up'
                  : 'fade-left'
              }
              className="bg-white shadow-2xl rounded-3xl overflow-hidden transition-transform duration-500 transform hover:scale-105 w-full max-w-7xl flex flex-col md:flex-row"
            >
              <div className="relative w-full md:w-1/3 h-64">
                <img
                  src={tip.image}
                  alt={tip.question}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#FF6B6B] p-3 rounded-full text-white text-xl shadow-lg">
                  <FaPaw />
                </div>
              </div>

              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-[#FF6B6B] font-semibold text-lg">
                    <FaSnowflake className="text-xl" />
                    <span>Tip #{index + 1}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <FaDog className="text-[#4F46E5]" /> {tip.question}
                  </h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {tip.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllWinterCareTips;
