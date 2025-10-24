import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, MessageCircle, Star } from "lucide-react";
import { format } from "date-fns";

interface BookingSectionProps {
  destinationName: string;
}

const BookingSection = ({ destinationName }: BookingSectionProps) => {
  const [date, setDate] = useState<Date>();
  const [days, setDays] = useState<string>("");
  const [people, setPeople] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);

  const handleBooking = () => {
    if (!date || !days || !people || !email) {
      alert("Please fill in all booking details");
      return;
    }

    const bookingDetails = encodeURIComponent(
      `Hi! I'd like to book a trip to ${destinationName}.\n\n` +
      `📅 Date: ${format(date, 'PPP')}\n` +
      `📆 Days: ${days}\n` +
      `👥 People: ${people}\n` +
      `📧 Email: ${email}\n\n` +
      `Please confirm availability and pricing.`
    );

    window.open(`https://wa.me/+254707608590?text=${bookingDetails}`, '_blank');
  };

  const handleRating = (value: number) => {
    setRating(value);
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Book Your</span> {destinationName} Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            Fill in your details below and we'll help you plan the perfect safari adventure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Booking Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5" />
                Booking Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Date Picker */}
              <div className="space-y-2">
                <Label htmlFor="date">Select Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Days */}
              <div className="space-y-2">
                <Label htmlFor="days">Number of Days</Label>
                <Select value={days} onValueChange={setDays}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select days" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Day</SelectItem>
                    <SelectItem value="2">2 Days</SelectItem>
                    <SelectItem value="3">3 Days</SelectItem>
                    <SelectItem value="4">4 Days</SelectItem>
                    <SelectItem value="5">5 Days</SelectItem>
                    <SelectItem value="6">6 Days</SelectItem>
                    <SelectItem value="7">7 Days</SelectItem>
                    <SelectItem value="8">8 Days</SelectItem>
                    <SelectItem value="9">9 Days</SelectItem>
                    <SelectItem value="10">10 Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* People */}
              <div className="space-y-2">
                <Label htmlFor="people">Number of People</Label>
                <Select value={people} onValueChange={setPeople}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select people" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Person</SelectItem>
                    <SelectItem value="2">2 People</SelectItem>
                    <SelectItem value="3">3 People</SelectItem>
                    <SelectItem value="4">4 People</SelectItem>
                    <SelectItem value="5">5 People</SelectItem>
                    <SelectItem value="6">6 People</SelectItem>
                    <SelectItem value="7">7 People</SelectItem>
                    <SelectItem value="8">8 People</SelectItem>
                    <SelectItem value="9">9 People</SelectItem>
                    <SelectItem value="10">10+ People</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Book Now Button */}
              <Button
                onClick={handleBooking}
                className="w-full bg-accent hover:bg-accent-glow text-accent-foreground"
                size="lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book via WhatsApp
              </Button>
            </CardContent>
          </Card>

          {/* Rating Section */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                Rate Our Service
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                How would you rate your experience with our gallery and booking service?
              </p>

              {/* Star Rating */}
              <div className="flex justify-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    className="focus:outline-none"
                    title={`Rate ${star} star${star > 1 ? 's' : ''}`}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => handleRating(star)}
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= (hoverRating || rating)
                          ? 'text-sunset fill-current'
                          : 'text-gray-300'
                      } transition-colors`}
                    />
                  </button>
                ))}
              </div>

              {rating > 0 && (
                <div className="text-center">
                  <p className="text-lg font-semibold">
                    {rating === 1 && "Poor"}
                    {rating === 2 && "Fair"}
                    {rating === 3 && "Good"}
                    {rating === 4 && "Very Good"}
                    {rating === 5 && "Excellent"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Thank you for your feedback!
                  </p>
                </div>
              )}

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground text-center">
                  Your rating helps us improve our services and provide better experiences for future travelers.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;