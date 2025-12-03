import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PopularServices = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      easing: 'ease-in-out',
      once: false,
    });

    fetch('/services.json')
      .then(res => res.json())
      .then(data => {
        setServices(data.slice(0, 8));
      })
      .catch(err => console.error(err));
  }, []);

  const handleViewDetails = id => {
    navigate(`/services/${id}`);
  };

  const goToAllServices = () => {
    navigate('/services');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 w-screen overflow-x-hidden">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Popular Winter Care Services
      </h1>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-6 mb-8">
        {services.map((service, index) => (
          <div
            key={service.serviceId}
            data-aos={index % 2 === 0 ? 'zoom-in' : 'fade-up'}
            data-aos-delay={`${index * 100}`}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <img
              src={service.image}
              alt={service.serviceName}
              className="w-full h-48 object-cover"
            />

            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                {service.serviceName}
              </h2>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {service.description}
              </p>

              <div className="flex justify-between items-center mb-4">
                <span className="text-yellow-600 text-sm">
                  ⭐ {service.rating}
                </span>
                <span className="text-[#FF6B6B] text-base font-semibold">
                  ${service.price}
                </span>
              </div>

              <button
                onClick={() => handleViewDetails(service.serviceId)}
                className="bg-[#FF6B6B] text-white py-2 rounded-md hover:bg-[#e65b5b] transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* All Services Button */}
      <div className="text-center mt-6">
        <button
          onClick={goToAllServices}
          className="px-4 py-2 sm:px-6 sm:py-3 bg-[#FF6B6B] text-white rounded-full font-semibold hover:bg-[#ff5252] transition text-sm sm:text-base"
        >
          View All Services
        </button>
      </div>
    </div>
  );
};

export default PopularServices;
