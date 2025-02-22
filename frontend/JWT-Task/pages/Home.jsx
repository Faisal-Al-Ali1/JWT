import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserCircle, LogIn, UserPlus, LogOut } from 'lucide-react';
import axios from 'axios';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/logout', {}, {
                withCredentials: true 
            });
    
            if (response.status === 200) {
                navigate('/login');
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600">TestApp</div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <LogIn className="w-5 h-5" />
              <span>Login</span>
            </Link>
            
            <Link
              to="/signup"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <UserPlus className="w-5 h-5" />
              <span>Sign Up</span>
            </Link>
            
            <Link
              to="/profile"
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <UserCircle className="w-5 h-5" />
              <span>Profile</span>
            </Link>
            
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome Brave Traveller
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your all-in-one platform for managing everything you need.
            Get started today and experience the difference.
          </p>
        </div>
      </main>
      </div>
    );

};

export default Home;