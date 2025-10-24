import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ProductsSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Failed to load products:', err));
  }, []);

  const handleBuyNow = productName => {
    toast.success(`🛒 ${productName} added to cart!`);
  };

  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="w-11/12 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={product.image}
                alt={product.product_name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-center">
                {product.product_name}
              </h3>
              <p className="text-[#FF6B6B] font-bold mb-2">{product.price}</p>
              <p className="text-sm text-gray-600 text-center mb-4">
                {product.description}
              </p>
              <button
                onClick={() => handleBuyNow(product.product_name)}
                className="bg-[#FF6B6B] text-white px-4 py-2 rounded-xl font-semibold hover:bg-red-500 transition-colors"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Hot Toast Container */}
      <Toaster position="top-center" />
    </section>
  );
};

export default ProductsSection;
