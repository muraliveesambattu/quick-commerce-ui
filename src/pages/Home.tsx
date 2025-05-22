
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home: React.FC = () => {
  const featuredProducts = products.filter(product => product.rating >= 4.5);
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-xl overflow-hidden mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="p-8 md:p-12 md:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Summer Sale is Live!
            </h1>
            <p className="text-blue-100 mb-6 text-lg">
              Enjoy up to 50% off on all products across our store. Limited time offer.
            </p>
            <div className="flex space-x-4">
              <Link 
                to="/products" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium shadow-md transition-colors"
              >
                Shop Now
              </Link>
              <Link 
                to="/sale" 
                className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2">
            <img 
              src="/placeholder.svg" 
              alt="Summer Sale" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Categories Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Electronics', 'Furniture', 'Clothing', 'Kitchen'].map(category => (
            <Link 
              key={category}
              to={`/category/${category.toLowerCase()}`}
              className="relative rounded-lg overflow-hidden group aspect-square"
            >
              <div className="absolute inset-0 bg-gray-900 opacity-40 group-hover:opacity-30 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <h3 className="text-white text-xl font-bold text-center">{category}</h3>
              </div>
              <img 
                src="/placeholder.svg"
                alt={category}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          ))}
        </div>
      </div>
      
      {/* Featured Products Section */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Featured Products
          </h2>
          <Link 
            to="/products" 
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          >
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          What Our Customers Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              name: "Sarah Johnson", 
              text: "I love the quality of the products. Fast shipping and excellent customer service!", 
              rating: 5 
            },
            { 
              name: "Michael Brown", 
              text: "Been shopping here for years. Never disappointed with their collection and competitive prices.", 
              rating: 5 
            },
            { 
              name: "Emily Wilson", 
              text: "The return process was so easy when I needed to exchange an item. Will definitely shop here again!", 
              rating: 4 
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    size={16} 
                    className={`${i < testimonial.rating ? 'text-amber-500 fill-current' : 'text-gray-300 dark:text-gray-600'} mr-1`}
                  />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">"{testimonial.text}"</p>
              <p className="font-medium text-gray-900 dark:text-white">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Join Our Newsletter</h2>
        <p className="mb-6 text-blue-100">Stay updated with the latest products and exclusive offers.</p>
        <div className="flex max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-3 rounded-l-lg flex-1 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-gray-900 hover:bg-gray-800 px-6 py-3 rounded-r-lg font-medium transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
