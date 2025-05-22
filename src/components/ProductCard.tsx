
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Product } from '../types';
import { addToCart } from '../redux/slices/cartSlice';
import { ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(addToCart(product));
  };
  
  return (
    <Link to={`/product/${product.id}`}>
      <div className="relative group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
        <div className="aspect-square bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
          {product.stock <= 5 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              Only {product.stock} left
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 line-clamp-1">{product.name}</h3>
            <span className="flex items-center text-sm text-amber-500">
              <Star size={16} fill="currentColor" className="mr-1" />
              {product.rating}
            </span>
          </div>
          
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 line-clamp-2">{product.description}</p>
          
          <div className="mt-4 flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900 dark:text-white">${product.price.toFixed(2)}</span>
            <button
              onClick={handleAddToCart}
              className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
