
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/sonner";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    favoriteGenre: "",
    bookRecommendation: "",
    meetingPreference: "",
    subscribeNewsletter: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({ ...formData, subscribeNewsletter: checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for signing up! We'll be in touch soon.");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        favoriteGenre: "",
        bookRecommendation: "",
        meetingPreference: "",
        subscribeNewsletter: true,
      });
    }, 1500);
  };

  return (
    <Card className="max-w-md w-full mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl text-bookclub-primary font-serif">
          Join Literary Society
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number (optional)</Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="favoriteGenre">Favorite Book Genre</Label>
            <select
              id="favoriteGenre"
              name="favoriteGenre"
              value={formData.favoriteGenre}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            >
              <option value="" disabled>Select your favorite genre</option>
              <option value="fiction">Fiction</option>
              <option value="non-fiction">Non-Fiction</option>
              <option value="mystery">Mystery/Thriller</option>
              <option value="scifi">Science Fiction/Fantasy</option>
              <option value="romance">Romance</option>
              <option value="historical">Historical Fiction</option>
              <option value="biography">Biography/Memoir</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="bookRecommendation">A Book You'd Recommend</Label>
            <Input
              id="bookRecommendation"
              name="bookRecommendation"
              value={formData.bookRecommendation}
              onChange={handleChange}
              placeholder="Share your favorite book"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="meetingPreference">Preferred Meeting Time</Label>
            <select
              id="meetingPreference"
              name="meetingPreference"
              value={formData.meetingPreference}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            >
              <option value="" disabled>Select your preference</option>
              <option value="weekday-evening">Weekday Evenings</option>
              <option value="weekday-lunch">Weekday Lunch Hours</option>
              <option value="weekend-morning">Weekend Mornings</option>
              <option value="weekend-afternoon">Weekend Afternoons</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-2 pt-2">
            <Checkbox
              id="subscribeNewsletter"
              checked={formData.subscribeNewsletter}
              onCheckedChange={handleCheckboxChange}
            />
            <Label htmlFor="subscribeNewsletter" className="text-sm">
              Keep me updated with book club news and recommendations
            </Label>
          </div>
          
          <Button
            type="submit"
            className="w-full bg-bookclub-primary hover:bg-bookclub-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Sign Up"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignUpForm;
