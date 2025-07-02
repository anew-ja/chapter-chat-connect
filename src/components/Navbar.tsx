
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-bookclub-primary" />
            <span className="font-serif text-xl font-bold text-bookclub-primary">Literary Society</span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link 
              to="/" 
              className={`font-medium ${isActive('/') ? 'text-bookclub-primary' : 'text-gray-600 hover:text-bookclub-primary'}`}
            >
              Home
            </Link>
            <Link 
              to="/explore" 
              className={`font-medium ${isActive('/explore') ? 'text-bookclub-primary' : 'text-gray-600 hover:text-bookclub-primary'}`}
            >
              Explore
            </Link>
            <Link to="/signup">
              <Button variant="default" className="bg-bookclub-primary hover:bg-bookclub-primary/90">
                Join Us
              </Button>
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <Link to="/signup">
              <Button size="sm" variant="default" className="bg-bookclub-primary hover:bg-bookclub-primary/90">
                Join
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
