import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Icons
import {
  FaFilter,
  FaSearch,
  FaSortAmountDown,
  FaSortAmountUp,
} from 'react-icons/fa';

const Services = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);

  const [originalServices, setOriginalServices] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  const [sortOrder, setSortOrder] = useState('none');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

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
        setServices(data);
        setFilteredServices(data);
        setOriginalServices(data); // backup

        const cats = [...new Set(data.map(item => item.category))];
        setCategoryList(cats);
      })
      .catch(err => console.error(err));
  }, []);

  // ============ SEARCH HANDLER ============
  const handleSearch = value => {
    setSearchTerm(value);

    let result = services.filter(item =>
      item.serviceName.toLowerCase().includes(value.toLowerCase())
    );

    if (selectedCategory !== 'all') {
      result = result.filter(
        item => item.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (sortOrder === 'asc') {
      result = result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      result = result.sort((a, b) => b.price - a.price);
    }

    setFilteredServices(result);
  };

  // ============ CATEGORY FILTER ============
  const filterByCategory = cat => {
    setSelectedCategory(cat);

    let result =
      cat === 'all'
        ? services
        : services.filter(
            item => item.category.toLowerCase() === cat.toLowerCase()
          );

    if (searchTerm.trim() !== '') {
      result = result.filter(item =>
        item.serviceName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOrder === 'asc') {
      result = result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      result = result.sort((a, b) => b.price - a.price);
    }

    setFilteredServices(result);
  };

  // ============ SORT HANDLER ============
  const sortByPrice = order => {
    setSortOrder(order);

    if (order === 'none') {
      setFilteredServices([...originalServices]);
      return;
    }

    const sorted = [...filteredServices].sort((a, b) =>
      order === 'asc' ? a.price - b.price : b.price - a.price
    );

    setFilteredServices(sorted);
  };

  const handleViewDetails = id => {
    navigate(`/services/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 w-screen overflow-x-hidden">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        All Winter Care Services
      </h1>

      {/* ================= TOP CONTROL BAR ================= */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-4 mb-10">
        {/* LEFT — SEARCH BAR */}
        <div className="flex items-center w-full md:w-1/3 bg-white shadow-md px-4 py-2 rounded-lg border border-gray-200">
          <FaSearch className="text-gray-500 text-lg" />
          <input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={e => handleSearch(e.target.value)}
            className="w-full ml-3 outline-none text-gray-700"
          />
        </div>

        {/* RIGHT — FILTER & SORT */}
        <div className="flex flex-wrap justify-end gap-4 md:w-2/3">
          {/* Category Filter */}
          <div className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-lg border border-gray-200">
            <FaFilter className="text-gray-600 text-lg" />
            <select
              value={selectedCategory}
              onChange={e => filterByCategory(e.target.value)}
              className="outline-none bg-transparent"
            >
              <option value="all">All Categories</option>
              {categoryList.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-lg border border-gray-200">
            {sortOrder === 'asc' ? (
              <FaSortAmountDown className="text-gray-600 text-lg" />
            ) : sortOrder === 'desc' ? (
              <FaSortAmountUp className="text-gray-600 text-lg" />
            ) : (
              <FaSortAmountDown className="text-gray-400 text-lg opacity-50" />
            )}

            <select
              value={sortOrder}
              onChange={e => sortByPrice(e.target.value)}
              className="outline-none bg-transparent"
            >
              <option value="none">No Sorting</option>
              <option value="asc">Price: Low → High</option>
              <option value="desc">Price: High → Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* ================= SERVICE CARDS ================= */}
      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-6">
        {filteredServices.map((service, index) => (
          <div
            key={service.serviceId}
            data-aos={index % 2 === 0 ? 'zoom-in' : 'fade-up'}
            data-aos-delay={`${index * 100}`}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col hover:shadow-xl hover:scale-105 transition-all duration-300"
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

      {filteredServices.length === 0 && (
        <p className="text-center text-gray-500 text-lg mt-10">
          No matching services found.
        </p>
      )}
    </div>
  );
};

export default Services;
