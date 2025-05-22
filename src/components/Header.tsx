
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { RootState } from '../redux/store';
import { toggleCart } from '../redux/slices/cartSlice';
import { useTheme } from '../context/ThemeContext';
import { ShoppingCart, Sun, Moon, Menu } from 'lucide-react';

const Header: React.FC = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          ShopHub
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive 
                ? "text-blue-600 dark:text-blue-400" 
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/products" 
            className={({ isActive }) => 
              isActive 
                ? "text-blue-600 dark:text-blue-400" 
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            }
          >
            Products
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive 
                ? "text-blue-600 dark:text-blue-400" 
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive 
                ? "text-blue-600 dark:text-blue-400" 
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            }
          >
            Contact
          </NavLink>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <button 
            className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => dispatch(toggleCart())}
            aria-label="Open cart"
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 px-4 py-2 border-t dark:border-gray-800 animate-fade-in">
          <ul className="space-y-2">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `block py-2 ${isActive 
                    ? "text-blue-600 dark:text-blue-400" 
                    : "text-gray-700 dark:text-gray-300"}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/products" 
                className={({ isActive }) => 
                  `block py-2 ${isActive 
                    ? "text-blue-600 dark:text-blue-400" 
                    : "text-gray-700 dark:text-gray-300"}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `block py-2 ${isActive 
                    ? "text-blue-600 dark:text-blue-400" 
                    : "text-gray-700 dark:text-gray-300"}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `block py-2 ${isActive 
                    ? "text-blue-600 dark:text-blue-400" 
                    : "text-gray-700 dark:text-gray-300"}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
