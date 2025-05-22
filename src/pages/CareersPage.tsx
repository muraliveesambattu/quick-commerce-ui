
import React from 'react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote / San Francisco, CA",
      type: "Full-time"
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / San Francisco, CA",
      type: "Full-time"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time"
    },
    {
      title: "Customer Support Specialist",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time / Part-time"
    },
    {
      title: "Marketing Coordinator",
      department: "Marketing",
      location: "New York, NY",
      type: "Full-time"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Careers at ShopHub</h1>
        
        <div className="mb-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Join our team and help us revolutionize the e-commerce experience. At ShopHub, we're passionate about innovation, customer satisfaction, and creating a positive work environment where everyone can thrive.
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
            <p className="text-blue-700 dark:text-blue-300">
              We offer competitive salaries, comprehensive benefits, flexible work arrangements, and opportunities for professional growth.
            </p>
          </div>
        </div>
        
        {/* Why Join Us */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Why Join ShopHub?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Growth</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We're growing rapidly, providing ample opportunities for career advancement and professional development.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Innovation</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We encourage innovative thinking and provide resources to bring new ideas to life.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Culture</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We foster a collaborative, inclusive, and supportive work environment where everyone's voice matters.
              </p>
            </div>
          </div>
        </div>
        
        {/* Benefits */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Benefits & Perks</h2>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            <li className="flex items-center py-2">
              <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-gray-700 dark:text-gray-300">Competitive compensation packages</span>
            </li>
            <li className="flex items-center py-2">
              <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-gray-700 dark:text-gray-300">Comprehensive health insurance</span>
            </li>
            <li className="flex items-center py-2">
              <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-gray-700 dark:text-gray-300">Flexible work arrangements</span>
            </li>
            <li className="flex items-center py-2">
              <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-gray-700 dark:text-gray-300">Generous paid time off</span>
            </li>
            <li className="flex items-center py-2">
              <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-gray-700 dark:text-gray-300">Professional development stipend</span>
            </li>
            <li className="flex items-center py-2">
              <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-gray-700 dark:text-gray-300">Employee discounts on all products</span>
            </li>
            <li className="flex items-center py-2">
              <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-gray-700 dark:text-gray-300">401(k) with company match</span>
            </li>
            <li className="flex items-center py-2">
              <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-gray-700 dark:text-gray-300">Remote work equipment allowance</span>
            </li>
          </ul>
        </div>
        
        {/* Open Positions */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Open Positions</h2>
          
          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <div key={index} className="border dark:border-gray-700 rounded-lg p-6 transition-all hover:shadow-md">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">{position.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs rounded">
                    {position.department}
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs rounded">
                    {position.type}
                  </span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 text-xs rounded">
                    {position.location}
                  </span>
                </div>
                <div className="flex justify-end">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Don't see a position that matches your skills? Send us your resume anyway!
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Submit General Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
