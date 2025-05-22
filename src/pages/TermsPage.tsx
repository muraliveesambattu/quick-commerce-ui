
import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Terms & Conditions</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300">
            Last updated: May 22, 2025
          </p>
          
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Please read these Terms & Conditions carefully before using the ShopHub website. Your access to and use of the service is conditioned on your acceptance of and compliance with these terms.
          </p>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Use of Our Services</h2>
            <p className="text-gray-700 dark:text-gray-300">
              You must follow any policies made available to you within the Services. You may use our Services only as permitted by law. We may suspend or stop providing our Services to you if you do not comply with our terms or policies or if we are investigating suspected misconduct.
            </p>
          </div>
          
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Account Registration</h2>
            <p className="text-gray-700 dark:text-gray-300">
              To access certain features of our website, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. We encourage you to use a strong password (a combination of upper and lower case letters, numbers, and symbols).
            </p>
          </div>
          
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Privacy Policy</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our Privacy Policy describes how we handle the information you provide to us when you use our Services. You understand that through your use of the Services you consent to the collection and use of this information as set forth in our Privacy Policy.
            </p>
          </div>
          
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Product Information and Pricing</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We strive to provide accurate product information and pricing. However, pricing and availability information is subject to change without notice. We reserve the right to modify or discontinue any product or service without notice at any time.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              In the event of a pricing error, we reserve the right to cancel any orders placed for products listed at the incorrect price.
            </p>
          </div>
          
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Orders and Payments</h2>
            <p className="text-gray-700 dark:text-gray-300">
              When you place an order through our website, you are making an offer to purchase the products you have selected. We reserve the right to accept or decline your order for any reason.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Payment must be received prior to the acceptance of an order. We accept various payment methods as indicated on our website.
            </p>
          </div>
          
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Shipping and Delivery</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Shipping and delivery times are estimates and cannot be guaranteed. We are not liable for any delays in shipments. Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier.
            </p>
          </div>
          
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Returns and Refunds</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our return and refund policies are as set forth on our website. We reserve the right to reject returns that do not comply with our policies.
            </p>
          </div>
          
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Intellectual Property</h2>
            <p className="text-gray-700 dark:text-gray-300">
              The Service and its original content, features, and functionality are and will remain the exclusive property of ShopHub and its licensors. The Service is protected by copyright, trademark, and other laws.
            </p>
          </div>
          
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 dark:text-gray-300">
              In no event shall ShopHub, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
          </div>
          
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">10. Changes to Terms</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We reserve the right to modify these Terms at any time. We will provide notice of significant changes to these Terms by posting the new Terms on the Site. Your continued use of the Site after any changes to these Terms constitutes your acceptance of the new Terms.
            </p>
          </div>
          
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">11. Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-300">
              If you have any questions about these Terms, please contact us at legal@shophub.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
