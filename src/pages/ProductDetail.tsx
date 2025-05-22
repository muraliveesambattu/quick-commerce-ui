
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { products } from '../data/products';
import { addToCart } from '../redux/slices/cartSlice';
import { ShoppingCart, ArrowLeft, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Sorry, the product you're looking for doesn't exist or has been removed.
        </p>
        <button
          onClick={() => navigate('/products')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    );
  }
  
  // Find related products in the same category
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-6"
      >
        <ArrowLeft size={16} className="mr-2" />
        Back
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {product.name}
          </h1>
          
          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  size={18} 
                  className={`${i < Math.floor(product.rating) ? 'text-amber-500 fill-current' : 'text-gray-300 dark:text-gray-600'} mr-1`}
                />
              ))}
            </div>
            <span className="text-gray-600 dark:text-gray-400">({product.rating})</span>
          </div>
          
          <p className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            ${product.price.toFixed(2)}
          </p>
          
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-6">
            <p className="text-gray-800 dark:text-gray-200">
              {product.description}
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">Availability:</h3>
            <p className={`${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {product.stock > 0 
                ? `In Stock (${product.stock} available)` 
                : 'Out of Stock'}
            </p>
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg flex items-center justify-center font-medium transition-colors"
          >
            <ShoppingCart size={20} className="mr-2" />
            {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Related Products
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
