
import React from "react";
import { BookOpen, Users, Calendar } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-bookclub-accent" />,
      title: "What We're About",
      description:
        "PageTurners is a vibrant community of diverse readers who share a passion for literature. We believe books have the power to transform perspectives, foster empathy, and build connections.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-bookclub-accent" />,
      title: "What We Do",
      description:
        "We gather monthly to discuss our current book selection in a relaxed, inclusive environment. Our discussions are thoughtful and respectful, exploring themes, characters, and the author's craft.",
    },
    {
      icon: <Users className="h-10 w-10 text-bookclub-accent" />,
      title: "Why Join Us",
      description:
        "Being part of PageTurners means expanding your literary horizons, engaging with diverse perspectives, and forming meaningful connections with fellow book lovers in your community.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-center mb-12">Our Book Club</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="section-subheading">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
