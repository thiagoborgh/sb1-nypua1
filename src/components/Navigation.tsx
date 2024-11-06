import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Tool, Home, Package, BarChart2, LogOut } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export default function Navigation() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Tool className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl">CondoTools</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="nav-link">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            
            {user.role === 'owner' && (
              <>
                <Link to="/my-tools" className="nav-link">
                  <Package className="h-5 w-5" />
                  <span>My Tools</span>
                </Link>
                <Link to="/reports" className="nav-link">
                  <BarChart2 className="h-5 w-5" />
                  <span>Reports</span>
                </Link>
              </>
            )}
            
            <button
              onClick={handleLogout}
              className="flex items-center space-x-1 text-red-600 hover:text-red-800"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}