import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';

const SwipeSlider = () => {
  const [slides, setSlides] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/services.json')
      .then(res => res.json())
      .then(data => {
        const firstThree = data.slice(0, 3);
        setSlides(firstThree);
      })
      .catch(err => console.error('Failed to load slider data:', err));
  }, []);

  const handleBookNow = serviceId => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <div className="relative w-full h-[90vh] sm:h-[95vh] lg:h-screen overflow-hidden rounded-none">
      {slides.length > 0 ? (
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
          className="h-full"
        >
          {slides.map((service, index) => (
            <SwiperSlide key={service.serviceId} className="relative h-full">
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.serviceName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10">
                {activeIndex === index && (
                  <>
                    {/* Animated Title */}
                    <motion.h1
                      key={`title-${index}`}
                      initial={{ opacity: 0, y: -60 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9 }}
                      className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
                    >
                      {service.serviceName}
                    </motion.h1>

                    {/* Animated Description */}
                    <motion.p
                      key={`desc-${index}`}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9, delay: 0.3 }}
                      className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mb-12"
                    >
                      {service.description}
                    </motion.p>

                    {/* Book Now Button */}
                    <motion.button
                      onClick={() => handleBookNow(service.serviceId)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#FF6B6B] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#e65b5b] transition mt-16"
                    >
                      Book Now
                    </motion.button>
                  </>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex justify-center items-center h-full text-gray-500">
          Loading slider...
        </div>
      )}
    </div>
  );
};

export default SwipeSlider;
