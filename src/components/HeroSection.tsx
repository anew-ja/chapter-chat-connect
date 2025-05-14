
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-bookclub-primary text-white py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 animate-fade-in">
          Welcome to Literary Society
        </h1>
        
        <p className="text-xl md:text-2xl max-w-3xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Where stories come alive through conversation, connection, and community
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Link to="/explore">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-bookclub-primary">
              Explore Books
            </Button>
          </Link>
          <Link to="/signup">
            <Button size="lg" className="bg-bookclub-accent hover:bg-bookclub-accent/90 text-bookclub-primary">
              Join Our Club
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
