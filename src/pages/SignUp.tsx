
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignUpForm from "@/components/SignUpForm";
import { BookOpen, Calendar, Users } from "lucide-react";

const SignUp = () => {
  const benefits = [
    {
      icon: <BookOpen className="h-8 w-8 text-bookclub-accent" />,
      title: "Curated Reading List",
      description: "Access to carefully selected books that span genres and perspectives",
    },
    {
      icon: <Calendar className="h-8 w-8 text-bookclub-accent" />,
      title: "Monthly Gatherings",
      description: "Regular meetings for insightful discussions in a welcoming environment",
    },
    {
      icon: <Users className="h-8 w-8 text-bookclub-accent" />,
      title: "Community Connection",
      description: "Build lasting friendships with diverse readers who share your passion",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-bookclub-primary text-white py-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-serif font-bold mb-4">Join Literary Society</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Become part of our vibrant community of book lovers and embark on literary adventures together.
            </p>
          </div>
        </div>
        
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-heading mb-8">Member Benefits</h2>
                <div className="space-y-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4">{benefit.icon}</div>
                      <div>
                        <h3 className="font-serif font-bold text-xl mb-2 text-bookclub-primary">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <p className="italic text-gray-700">
                    "Joining this book club has expanded my reading horizons and introduced me to wonderful people who have become dear friends. Our discussions are the highlight of my month!"
                  </p>
                  <p className="mt-2 font-medium text-bookclub-secondary">— Sarah, Member since 2023</p>
                </div>
              </div>
              
              <SignUpForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
