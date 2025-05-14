
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import BookCard from "./BookCard";
import { toast } from "@/components/ui/sonner";
import { Check } from "lucide-react";

const VotingSection = () => {
  const [selectedBook, setSelectedBook] = useState<number | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  
  const bookOptions = [
    {
      title: "Cloud Cuckoo Land",
      author: "Anthony Doerr",
      coverImage: "https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A novel about children on opposite sides of a city under siege and a story-within-a-story spanning 500 years.",
    },
    {
      title: "The Lincoln Highway",
      author: "Amor Towles",
      coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "The story of a ten-day journey taken by three eighteen-year-olds and an eight-year-old in 1950s America.",
    },
    {
      title: "The Vanishing Half",
      author: "Brit Bennett",
      coverImage: "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "The lives of twin sisters who choose to live in very different worlds, one black and one white.",
    },
    {
      title: "Klara and the Sun",
      author: "Kazuo Ishiguro",
      coverImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A story told from the perspective of Klara, an Artificial Friend with outstanding observational qualities.",
    },
    {
      title: "Hamnet",
      author: "Maggie O'Farrell",
      coverImage: "https://images.unsplash.com/photo-1621944190310-e3cca1564bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A story of the death of Shakespeare's 11-year-old son, Hamnet, and how this loss may have shaped his play Hamlet.",
    },
  ];

  const handleVote = () => {
    if (selectedBook !== null) {
      toast.success(`Thank you for voting! Your choice: "${bookOptions[selectedBook].title}"`);
      setHasVoted(true);
    } else {
      toast.error("Please select a book before voting");
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-center mb-6">Help Choose Our Next Book</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Every month, club members vote on our next read from these carefully selected options.
          Cast your vote to help decide what we'll be reading next!
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {bookOptions.map((book, index) => (
            <div 
              key={index}
              onClick={() => !hasVoted && setSelectedBook(index)}
              className={`cursor-pointer relative ${hasVoted && 'opacity-70'}`}
            >
              <BookCard
                title={book.title}
                author={book.author}
                coverImage={book.coverImage}
                description={book.description}
              />
              {selectedBook === index && (
                <div className="absolute inset-0 border-4 border-bookclub-accent rounded-lg flex items-center justify-center">
                  <div className="bg-bookclub-accent rounded-full p-2 shadow-lg">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Button 
            onClick={handleVote} 
            disabled={selectedBook === null || hasVoted}
            className="bg-bookclub-primary hover:bg-bookclub-primary/90 px-8"
            size="lg"
          >
            {hasVoted ? "Thank you for voting!" : "Submit Your Vote"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VotingSection;
