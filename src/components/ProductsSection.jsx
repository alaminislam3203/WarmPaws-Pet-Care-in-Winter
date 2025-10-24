import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProductsSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      easing: 'ease-in-out',
      once: false,
    });

    // Fetch product data
    fetch('/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Failed to load products:', err));
  }, []);

  const handleBuyNow = productName => {
    toast.success(`🛒 ${productName} added to cart!`);
  };

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="w-11/12 mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Our Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              data-aos={index % 2 === 0 ? 'zoom-in' : 'fade-up'}
              data-aos-delay={`${index * 100}`}
              className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              {/* Animated Image */}
              <img
                src={product.image}
                alt={product.product_name}
                className="w-full h-48 object-cover rounded-xl mb-4 transition-transform duration-500 hover:scale-110"
              />

              {/* Static Text */}
              <h3 className="text-lg font-semibold mb-2 text-center text-gray-800">
                {product.product_name}
              </h3>
              <p className="text-[#FF6B6B] font-bold mb-2">{product.price}</p>
              <p className="text-sm text-gray-600 text-center mb-4">
                {product.description}
              </p>

              {/* Button */}
              <button
                onClick={() => handleBuyNow(product.product_name)}
                className="bg-[#FF6B6B] text-white px-5 py-2 rounded-xl font-semibold hover:bg-red-500 transition-colors duration-300"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <Toaster position="top-center" />
    </section>
  );
};

export default ProductsSection;
