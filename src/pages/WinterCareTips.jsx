import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WinterCareTips = () => {
  const [tips, setTips] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in-out',
      once: true,
    });

    // Load data
    fetch('/winterCareTips.json')
      .then(res => res.json())
      .then(data => {
        const sortedTips = data.sort((a, b) => a.id - b.id);
        setTips(sortedTips);
      })
      .catch(err => console.error('Failed to load tips:', err));
  }, []);

  // Decide which tips to show
  const displayedTips = showAll ? tips : tips.slice(0, 6);

  return (
    <section className="bg-[#F9FAFB] py-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2
          className="text-4xl font-bold text-center text-gray-800 mb-10"
          data-aos="fade-down"
        >
          Winter Care Tips for Pets
        </h2>
        <p
          className="text-center text-gray-600 mb-14 max-w-2xl mx-auto"
          data-aos="fade-up"
        >
          Help your furry friends stay warm, healthy, and happy during the
          chilly winter months with these expert-approved tips.
        </p>

        {/* Tips Grid */}
        <div className="flex flex-col items-center gap-10">
          {displayedTips.map((tip, index) => (
            <div
              key={tip.id}
              data-aos={
                index % 3 === 0
                  ? 'fade-right'
                  : index % 3 === 1
                  ? 'zoom-in-up'
                  : 'fade-left'
              }
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col md:flex-row w-10/12"
            >
              {/* Image Left Side */}
              <img
                src={tip.image}
                alt={tip.question}
                className="w-full md:w-1/3 h-64 object-cover transform hover:scale-105 transition duration-500"
              />

              {/* Content Right Side */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-[#FF6B6B] mb-3">
                  Tip #{index + 1}
                </h3>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {tip.question}
                </h4>
                <p className="text-gray-600 leading-relaxed mt-2 flex-1">
                  {tip.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* All Tips Button */}
        {!showAll && tips.length > 6 && (
          <div className="flex justify-center mt-10" data-aos="zoom-in">
            <button
              onClick={() => setShowAll(true)}
              className="px-14 py-3 bg-[#FF6B6B] text-white rounded-full font-semibold hover:bg-[#ff5252] transition transform hover:scale-105"
            >
              More Tips
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default WinterCareTips;
