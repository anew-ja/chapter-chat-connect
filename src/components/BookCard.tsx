
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface BookCardProps {
  title: string;
  author: string;
  coverImage: string;
  description: string;
  isCurrentBook?: boolean;
}

const BookCard = ({
  title,
  author,
  coverImage,
  description,
  isCurrentBook = false,
}: BookCardProps) => {
  return (
    <Card className={`overflow-hidden hover:shadow-lg transition-shadow ${
      isCurrentBook ? 'border-2 border-bookclub-accent' : ''
    }`}>
      <div className="flex flex-col h-full">
        <div className="relative pt-[140%] overflow-hidden">
          <img
            src={coverImage}
            alt={`${title} by ${author}`}
            className="absolute inset-0 h-full w-full object-cover"
          />
          {isCurrentBook && (
            <div className="absolute top-0 right-0 bg-bookclub-accent text-white px-3 py-1 font-medium text-sm">
              Current Pick
            </div>
          )}
        </div>
        <CardContent className="flex-1 p-4">
          <h3 className="font-serif font-bold text-lg text-bookclub-primary line-clamp-1">{title}</h3>
          <p className="text-sm text-gray-600 mb-2">by {author}</p>
          <p className="text-sm text-gray-700 line-clamp-3 book-content">{description}</p>
        </CardContent>
      </div>
    </Card>
  );
};

export default BookCard;
