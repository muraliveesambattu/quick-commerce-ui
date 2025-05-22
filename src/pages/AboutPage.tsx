
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Us</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Welcome to ShopHub, your one-stop destination for all your shopping needs. We're dedicated to providing you with the best shopping experience possible.
          </p>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Story</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Founded in 2020, ShopHub was born out of a passion for connecting quality products with enthusiastic shoppers. What started as a small online store has grown into a comprehensive e-commerce platform offering thousands of products across various categories.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300">
              At ShopHub, our mission is simple: to make quality products accessible to everyone. We strive to provide a seamless shopping experience, exceptional customer service, and products that exceed your expectations.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Why Choose Us?</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Curated selection of high-quality products</li>
              <li>Competitive pricing and regular promotions</li>
              <li>Fast and reliable shipping options</li>
              <li>Dedicated customer support team</li>
              <li>Easy returns and exchanges</li>
              <li>Secure shopping experience</li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Our Values</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We believe in honesty, transparency, and exceeding customer expectations. Every decision we make is guided by these core values, ensuring that we always put our customers first.
              </p>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Our Team</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our diverse team of passionate individuals works tirelessly to bring you the best shopping experience. From product selection to delivery, we're committed to excellence at every step.
              </p>
            </div>
          </div>
          
          <div className="text-center py-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Join Our Journey</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We're constantly evolving and growing. Thank you for being a part of our journey. We look forward to serving you and exceeding your expectations.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
