import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
        <span className="text-accent-blue">Task</span>Master
      </h1>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        {user && (
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 dark:text-gray-300">
              Welcome, {user.username}
            </span>
            <button 
              onClick={logout}
              className="px-4 py-2 bg-accent-blue text-white rounded-md hover:bg-blue-600 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;