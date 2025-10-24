import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, MessageCircle, Camera } from "lucide-react";

interface DestinationCardProps {
  title: string;
  description: string;
  image: string;
  highlights: string[];
  category: string;
  rating: number;
  className?: string;
  galleryPath?: string;
}

const DestinationCard = ({
  title,
  description,
  image,
  highlights,
  category,
  rating,
  className = "",
  galleryPath
}: DestinationCardProps) => {
  
  const openWhatsApp = () => {
    const message = encodeURIComponent(`Hi! I'm interested in visiting ${title}. Can you provide more information about safari packages and availability?`);
    window.open(`https://wa.me/+254707608590?text=${message}`, '_blank');
  };

  const openGallery = () => {
    if (galleryPath) {
      window.open(galleryPath, '_self');
    }
  };

  return (
    <Card className={`group overflow-hidden shadow-elegant hover:shadow-glow transition-smooth hover:scale-105 ${className}`}>
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={`${title} - ${description}`}
          className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full glass-morphism">
            {category}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute top-4 right-4 flex items-center gap-1 glass-morphism px-2 py-1 rounded-full">
          <Star className="w-4 h-4 text-sunset fill-current" />
          <span className="text-white text-sm font-medium">{rating}</span>
        </div>

        {/* Gallery Indicator */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white/80">
          <Camera className="w-4 h-4" />
          <span className="text-sm">Gallery</span>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
            {title}
          </h3>
          <MapPin className="w-5 h-5 text-muted-foreground mt-1" />
        </div>

        <p className="text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>

        {/* Highlights */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-2">Highlights:</h4>
          <div className="flex flex-wrap gap-2">
            {highlights.slice(0, 3).map((highlight, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
              >
                {highlight}
              </span>
            ))}
            {highlights.length > 3 && (
              <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md">
                +{highlights.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button 
            onClick={openWhatsApp}
            className="flex-1 bg-accent hover:bg-accent-glow text-accent-foreground transition-bounce hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Book Now
          </Button>
          <Button
            variant="outline"
            className="px-4 border-primary/20 hover:bg-primary/10 hover:border-primary transition-smooth"
            onClick={galleryPath ? openGallery : undefined}
            disabled={!galleryPath}
          >
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;