
import React from "react";
import BookCard from "./BookCard";

const PastBooks = () => {
  const pastBooks = [
    {
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "The legendary film actress Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life.",
    },
    {
      title: "Educated",
      author: "Tara Westover",
      coverImage: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.",
    },
    {
      title: "The Song of Achilles",
      author: "Madeline Miller",
      coverImage: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A retelling of Homer's Iliad from the perspective of Patroclus, who is exiled to the court of King Peleus where he meets the king's son, Achilles.",
    },
    {
      title: "Normal People",
      author: "Sally Rooney",
      coverImage: "https://images.unsplash.com/photo-1610882648335-eda27ee3e2dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "The story follows the complex friendship and relationship between two teenagers who attend the same secondary school and, later, Trinity College Dublin.",
    },
    {
      title: "Circe",
      author: "Madeline Miller",
      coverImage: "https://images.unsplash.com/photo-1633477189729-9290b3261d0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "The story follows Circe, daughter of the sun god Helios, as she is banished to the island of Aiaia and learns to harness her powers of witchcraft.",
    },
    {
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      coverImage: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "The novel tells the story of Kya Clark, a girl who grows up isolated in the marshes of North Carolina and becomes a suspect in a murder investigation.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-center mb-12">Books We've Read</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pastBooks.map((book, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
              <BookCard
                title={book.title}
                author={book.author}
                coverImage={book.coverImage}
                description={book.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastBooks;
