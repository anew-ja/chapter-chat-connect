
import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Mail, Calendar } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-bookclub-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6" />
              <span className="font-serif text-xl font-bold">Literary Society</span>
            </Link>
            <p className="mt-4 max-w-md text-gray-300">
              Join our community of book lovers as we explore new worlds through literature,
              share perspectives, and build meaningful connections.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-serif text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-gray-300 transition-colors">Home</Link></li>
                <li><Link to="/explore" className="hover:text-gray-300 transition-colors">Explore</Link></li>
                <li><Link to="/signup" className="hover:text-gray-300 transition-colors">Join Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif text-lg font-semibold mb-3">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@literarysociety.club</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Monthly Meetings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-700">
          <p className="text-sm text-gray-300 text-center">
            © {new Date().getFullYear()} Literary Society. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
