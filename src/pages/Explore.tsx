
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PastBooks from "@/components/PastBooks";
import VotingSection from "@/components/VotingSection";

const Explore = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-bookclub-primary text-white py-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-serif font-bold mb-4">Explore Our Books</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover books we've enjoyed together and help us choose our next great read.
            </p>
          </div>
        </div>
        
        <PastBooks />
        <VotingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Explore;
