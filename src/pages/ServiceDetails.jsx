import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '' });

  // Fetch service JSON data
  useEffect(() => {
    fetch('/services.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(s => s.serviceId === Number(serviceId));
        setService(found || null);
      })
      .catch(err => console.error(err));
  }, [serviceId]);

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    toast.success('Service booked successfully!', {
      position: 'top-center',
    });
    setFormData({ name: '', email: '' });
  };

  if (!service) {
    return (
      <p className="text-center mt-20 text-lg">Loading service details...</p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 w-screen overflow-x-hidden">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold mb-4">{service.serviceName}</h1>

        <img
          src={service.image}
          alt={service.serviceName}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <div className="mb-6 space-y-2 text-gray-700">
          <p>
            <span className="font-semibold">Provider:</span>{' '}
            {service.providerName}
          </p>
          <p>
            <span className="font-semibold">Email:</span>{' '}
            {service.providerEmail}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {service.category}
          </p>
          <p>
            <span className="font-semibold">Price:</span> ${service.price}
          </p>
          <p>
            <span className="font-semibold">Rating:</span> ⭐ {service.rating}
          </p>
          <p>
            <span className="font-semibold">Slots Available:</span>{' '}
            {service.slotsAvailable}
          </p>
          <p>
            <span className="font-semibold">Description:</span>{' '}
            {service.description}
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <h2 className="text-2xl font-semibold mb-2">Book This Service</h2>

          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full mt-2">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
