
import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import BookCard from "./BookCard";

const ScheduleSection = () => {
  const currentBook = {
    title: "The Midnight Library",
    author: "Matt Haig",
    coverImage: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
  };

  const upcomingMeetings = [
    {
      date: "June 15, 2025",
      time: "7:00 PM - 8:30 PM",
      location: "City Library - Reading Room",
      topic: "Character Development & Narrative Choices",
    },
    {
      date: "July 20, 2025",
      time: "7:00 PM - 8:30 PM",
      location: "Riverpark Coffee Shop",
      topic: "Themes of Choice & Regret",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-center mb-12">Current Read & Schedule</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="section-subheading mb-6">This Month's Book</h3>
            <div className="max-w-xs mx-auto">
              <BookCard 
                title={currentBook.title}
                author={currentBook.author}
                coverImage={currentBook.coverImage}
                description={currentBook.description}
                isCurrentBook={true}
              />
            </div>
          </div>
          
          <div>
            <h3 className="section-subheading mb-6">Upcoming Meetings</h3>
            <div className="space-y-4">
              {upcomingMeetings.map((meeting, index) => (
                <Card key={index} className="animate-fade-in" style={{ animationDelay: `${0.2 * index}s` }}>
                  <CardContent className="p-5">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 mr-3 text-bookclub-secondary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">{meeting.date}</p>
                        <div className="mt-2 space-y-1 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{meeting.time}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{meeting.location}</span>
                          </div>
                        </div>
                        <div className="mt-2 pt-2 border-t border-gray-100">
                          <p className="text-sm font-medium text-bookclub-primary">Discussion Focus:</p>
                          <p className="text-sm">{meeting.topic}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
