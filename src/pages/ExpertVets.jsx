import React, { useEffect, useState } from 'react';
import { FaGraduationCap, FaUniversity, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ExpertVets = () => {
  const [doctors, setDoctors] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    fetch('/expertVets.json')
      .then(res => res.json())
      .then(data => setDoctors(data))
      .catch(err => console.error('Failed to load doctors:', err));
  }, []);

  const displayedDoctors = showAll ? doctors : doctors.slice(0, 4);

  const renderStars = rating => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(
          <span key={i} className="text-yellow-500 text-sm">
            ★
          </span>
        );
      } else if (rating >= i - 0.5) {
        stars.push(
          <span key={i} className="text-yellow-500 text-sm">
            ☆
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300 text-sm">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  const handleAppointmentClick = doctor => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(
      `Appointment request submitted!\nDoctor: ${selectedDoctor.name}\nSubject: ${selectedDoctor.specialization}\nName: ${formData.name}\nEmail: ${formData.email}`
    );
    setFormData({ name: '', email: '' });
    setIsModalOpen(false);
  };

  return (
    <section className="bg-[#F9FAFB] py-10 sm:py-14">
      <div className="max-w-full px-4 sm:px-6">
        <motion.h2
          className="text-2xl sm:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Expert Vets
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mb-8 sm:mb-14 text-sm sm:text-base max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our highly skilled veterinarians provide the best care for your pets.
          Learn more about our experts and book your appointments today.
        </motion.p>

        <div className="flex flex-col gap-8 sm:gap-12">
          {displayedDoctors.map((doctor, index) => {
            const sentences = doctor.description.split('. ').filter(Boolean);
            return (
              <motion.div
                key={doctor.id}
                className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${doctor.image})` }}
                ></div>

                {/* Overlay */}
                <div className="relative z-10 flex flex-col justify-between p-4 sm:p-8 text-white min-h-[400px] sm:min-h-[720px] bg-black/30">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <h3 className="text-3xl sm:text-7xl font-bold mb-2 sm:mb-4">
                      <span className="text-[#FF6B6B]">Dr.</span>{' '}
                      {doctor.name.replace('Dr. ', '')}
                    </h3>

                    <p className="text-sm sm:text-lg font-semibold mb-2 text-[#FFD700]">
                      {doctor.specialization}
                    </p>

                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 mb-4 sm:mb-6 text-xs sm:text-base">
                      {sentences.map((sentence, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                          {i + 1}. {sentence.trim()}.
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Bottom Info */}
                  <motion.div
                    className="mt-4 sm:mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-base mb-4 sm:mb-6">
                      <motion.div
                        className="flex items-center gap-2 sm:gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      >
                        <FaGraduationCap className="text-[#FFD700] text-sm sm:text-xl" />
                        <p>
                          <span className="font-semibold">Degree:</span>{' '}
                          {doctor.degree || 'Not specified'}
                        </p>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-2 sm:gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                      >
                        <FaUniversity className="text-[#FFD700] text-sm sm:text-xl" />
                        <p>
                          <span className="font-semibold">Education:</span>{' '}
                          {doctor.education || 'Not specified'}
                        </p>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-2 sm:gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <FaMapMarkerAlt className="text-[#FFD700] text-sm sm:text-xl" />
                        <p>
                          <span className="font-semibold">Location:</span>{' '}
                          {doctor.location || 'Not specified'}
                        </p>
                      </motion.div>
                    </div>

                    <motion.div
                      className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 sm:mb-4 text-xs sm:text-base"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <p className="font-semibold mb-1 sm:mb-0">
                        {doctor.email}
                      </p>
                      <div className="flex">{renderStars(doctor.rating)}</div>
                    </motion.div>

                    {/* Buttons remain unchanged */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                      <a
                        href={`mailto:${doctor.email}`}
                        className="px-3 py-1 sm:px-4 sm:py-2 bg-[#FF6B6B] text-white rounded-full font-semibold hover:bg-[#ff5252] transition text-xs sm:text-base"
                      >
                        Contact
                      </a>
                      <button
                        onClick={() => handleAppointmentClick(doctor)}
                        className="px-3 py-1 sm:px-4 sm:py-2 bg-[#FF6B6B] text-white rounded-full font-semibold hover:bg-[#ff5252] transition text-xs sm:text-base"
                      >
                        Get Appointment
                      </button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {!showAll && doctors.length > 4 && (
          <div className="flex justify-center mt-6 sm:mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="px-4 py-2 sm:px-6 sm:py-3 bg-[#FF6B6B] text-white rounded-full font-semibold hover:bg-[#ff5252] transition text-sm sm:text-base"
            >
              More Expert Vets
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && selectedDoctor && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 w-full sm:w-1/2 lg:w-1/3 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#FF6B6B] text-center">
              Appointment Request
            </h3>
            <p className="text-gray-700 mb-2 text-sm sm:text-base">
              <span className="font-semibold">Doctor:</span>{' '}
              {selectedDoctor.name}
            </p>
            <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
              <span className="font-semibold">Subject:</span>{' '}
              {selectedDoctor.specialization}
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-gray-700 mb-1 font-semibold text-sm sm:text-base">
                  Your Name:
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 sm:p-2.5 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] text-sm sm:text-base"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1 font-semibold text-sm sm:text-base">
                  Your Email:
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 sm:p-2.5 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] text-sm sm:text-base"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-between mt-4 sm:mt-6 gap-2 sm:gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-400 text-white rounded-full hover:bg-gray-500 transition text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-1 sm:px-4 sm:py-2 bg-[#FF6B6B] text-white rounded-full font-semibold hover:bg-[#ff5252] transition text-sm sm:text-base"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExpertVets;
