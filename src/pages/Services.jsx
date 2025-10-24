import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      offset: 120,
      easing: 'ease-in-out',
      once: false,
    });

    // Fetch service data
    fetch('/services.json')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error('Failed to load services:', err));
  }, []);

  const handleViewDetails = serviceId => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Popular Winter Care Services
      </h1>

      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-6">
        {services.map((service, index) => (
          <div
            key={service.serviceId}
            data-aos={index % 2 === 0 ? 'zoom-in' : 'fade-up'}
            data-aos-delay={`${index * 100}`}
            className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <img
              src={service.image}
              alt={service.serviceName}
              className="w-full h-60 object-cover transition-transform duration-500 hover:scale-110"
            />

            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {service.serviceName}
              </h2>
              <p className="text-gray-600 mb-7">{service.description}</p>

              <div className="flex justify-between items-center mb-4">
                <p className="text-yellow-600 font-medium">
                  ⭐ {service.rating}
                </p>
                <p className="text-lg font-semibold text-[#FF6B6B]">
                  ${service.price}
                </p>
              </div>

              <button
                onClick={() => handleViewDetails(service.serviceId)}
                className="bg-[#FF6B6B] text-white font-medium py-3 rounded-lg w-full hover:bg-[#e65b5b] transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
