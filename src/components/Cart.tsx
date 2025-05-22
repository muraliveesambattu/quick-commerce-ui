
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../redux/store';
import { closeCart, removeFromCart, updateQuantity } from '../redux/slices/cartSlice';
import { X, Plus, Minus } from 'lucide-react';

const Cart: React.FC = () => {
  const { items, isOpen } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  
  const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => dispatch(closeCart())}
      />
      <div className="relative w-full max-w-md bg-white dark:bg-gray-900 shadow-lg flex flex-col h-full">
        <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Your Cart</h2>
          <button 
            onClick={() => dispatch(closeCart())}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-gray-500 dark:text-gray-400 mb-4">Your cart is empty</p>
              <Link 
                to="/products" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                onClick={() => dispatch(closeCart())}
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex border-b dark:border-gray-700 pb-4">
                <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="ml-4 flex-1">
                  <div className="flex justify-between">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">{item.name}</h3>
                    <button 
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400">${item.price.toFixed(2)}</p>
                  
                  <div className="mt-2 flex items-center">
                    <button 
                      onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                      disabled={item.quantity <= 1}
                      className="p-1 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50"
                    >
                      <Minus size={14} />
                    </button>
                    
                    <span className="mx-2 text-sm w-8 text-center">{item.quantity}</span>
                    
                    <button 
                      onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                      disabled={item.quantity >= item.stock}
                      className="p-1 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        {items.length > 0 && (
          <div className="p-4 border-t dark:border-gray-700">
            <div className="flex justify-between mb-4">
              <span className="font-medium text-gray-900 dark:text-white">Subtotal</span>
              <span className="font-bold text-gray-900 dark:text-white">${totalPrice.toFixed(2)}</span>
            </div>
            
            <Link 
              to="/checkout" 
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-center transition-colors"
              onClick={() => dispatch(closeCart())}
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
