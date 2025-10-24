import { useState } from 'react';
import DestinationCard from './DestinationCard';
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import maasaiMaraImage from "@/assets/maasai-mara.jpg";
import dianiBeachImage from "@/assets/diani-beach.jpg";
import tsavoLionsImage from "@/assets/tsavo-lions.jpg";
import amboseliImage from "@/assets/amboseli-elephants.jpg";
import nakuruImage from "@/assets/lake-nakuru-flamingos.jpg";
import samburuImage from "@/assets/samburu-wildlife.jpg";

const DestinationsShowcase = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const mzaeImages = [
    "/src/assets/mzae/10-Day Samburu_ Nakuru_ Masai Mara_ Naivasha…-CJXNqgT5.jpeg",
    "/src/assets/mzae/9-Day Luxury and Scenic Kenya Safari These safari…-CF0ge_VQ.jpeg",
    "/src/assets/mzae/WhatsApp Image 2025-10-24 at 16.00.11.jpeg",
    "/src/assets/mzae/WhatsApp Image 2025-10-24 at 16.00.12.jpeg",
    "/src/assets/mzae/WhatsApp Image 2025-10-24 at 16.00.13.jpeg",
    "/src/assets/mzae/WhatsApp Image 2025-10-24 at 16.00.16.jpeg",
    "/src/assets/mzae/WhatsApp Image 2025-10-24 at 16.25.20.jpeg",
    "/src/assets/mzae/WhatsApp Image 2025-10-24 at 16.25.21 (1).jpeg",
    "/src/assets/mzae/WhatsApp Image 2025-10-24 at 16.25.21.jpeg",
    "/src/assets/mzae/WhatsApp Image 2025-10-24 at 16.25.22.jpeg",
    "/src/assets/mzae/WhatsApp Image 2025-10-24 at 16.25.48.jpeg",
    "/src/assets/mzae/WhatsApp Image 2025-10-24 at 16.26.54.jpeg",
    "/src/assets/mzae/WhatsApp Image 2025-10-24 at 16.27.34.jpeg",
    "/src/assets/mzae/WhatsApp Image 2025-10-24 at 16.28.39.jpeg",
    "/src/assets/mzae/WhatsApp Image 2025-10-24 at 16.33.11.jpeg",
    "/src/assets/mzae/WhatsApp Image 2025-10-24 at 16.33.59.jpeg",
    "/src/assets/mzae/WhatsApp Image 2025-10-24 at 16.34.34.jpeg",
    "/src/assets/mzae/WhatsApp Image 2025-10-24 at 16.37.05.jpeg",
    "/src/assets/mzae/WhatsApp Image 2025-10-24 at 16.39.37.jpeg",
    "/src/assets/mzae/WhatsApp Image 2025-10-24 at 16.40.24.jpeg"
  ];

  const openModal = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % mzaeImages.length);
    setSelectedImage(mzaeImages[(currentImageIndex + 1) % mzaeImages.length]);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + mzaeImages.length) % mzaeImages.length);
    setSelectedImage(mzaeImages[(currentImageIndex - 1 + mzaeImages.length) % mzaeImages.length]);
  };

  const destinations = [
    {
      title: "Maasai Mara National Park",
      description: "Witness the spectacular Great Wildebeest Migration and encounter Africa's Big Five in their natural habitat. This world-renowned reserve offers unparalleled wildlife viewing opportunities.",
      image: maasaiMaraImage,
      category: "Wildlife Safari",
      rating: 4.9,
      highlights: ["Great Migration", "Big Five", "Maasai Culture", "Hot Air Balloons", "Game Drives"],
      galleryPath: "/maasai-mara-gallery"
    },
    {
      title: "Diani Beach Paradise",
      description: "Pristine white sand beaches meet turquoise Indian Ocean waters. Perfect for relaxation, water sports, and exploring vibrant coral reefs.",
      image: dianiBeachImage,
      category: "Coastal Paradise",
      rating: 4.8,
      highlights: ["White Sand Beaches", "Coral Reefs", "Water Sports", "Dhow Sailing", "Beach Resorts"],
      galleryPath: "/diani-beach-gallery"
    },
    {
      title: "Tsavo National Parks",
      description: "Kenya's largest protected area, famous for red elephants, diverse wildlife, and dramatic landscapes. Experience authentic African wilderness.",
      image: tsavoLionsImage,
      category: "Wilderness Adventure",
      rating: 4.7,
      highlights: ["Red Elephants", "Lion Prides", "Baobab Trees", "Rock Formations", "Bird Watching"],
      galleryPath: "/tsavo-gallery"
    }
  ];

  const additionalDestinations = [
    {
      title: "Amboseli National Park",
      description: "Iconic views of Mount Kilimanjaro provide the perfect backdrop for incredible elephant encounters and diverse wildlife photography.",
      image: amboseliImage,
      category: "Mountain Safari",
      rating: 4.8,
      highlights: ["Mount Kilimanjaro Views", "Elephant Herds", "Photography", "Maasai Villages", "Birdlife"],
      galleryPath: "/amboseli-gallery"
    },
    {
      title: "Lake Nakuru National Park",
      description: "Famous for millions of flamingos creating a pink spectacle, plus rhino sanctuary and diverse wildlife in a compact area.",
      image: nakuruImage,
      category: "Bird Sanctuary",
      rating: 4.6,
      highlights: ["Flamingo Flocks", "Rhino Sanctuary", "Waterfalls", "Baboon Cliffs", "Birdwatching"],
      galleryPath: "/lake-nakuru-gallery"
    },
    {
      title: "Samburu National Reserve",
      description: "Unique wildlife species not found elsewhere in Kenya, including Grevy's zebra, reticulated giraffe, and gerenuk antelope.",
      image: samburuImage,
      category: "Unique Wildlife",
      rating: 4.7,
      highlights: ["Unique Species", "Ewaso Nyiro River", "Cultural Visits", "Desert Landscapes", "Endemic Animals"],
      galleryPath: "/samburu-gallery"
    },
    {
      title: "Lamu Island Heritage",
      description: "UNESCO World Heritage site showcasing Swahili culture, ancient architecture, and pristine beaches in a car-free paradise.",
      image: "/src/assets/Lamu port - Kenya-CY6Dle1h.jpeg",
      category: "Cultural Heritage",
      rating: 4.5,
      highlights: ["UNESCO Site", "Swahili Culture", "Dhow Rides", "Historic Architecture", "Car-Free Island"],
      galleryPath: "/lamu-gallery"
    },
    {
      title: "Hell's Gate National Park",
      description: "Walk or cycle among wildlife in this unique park featuring dramatic gorges, geothermal features, and rock climbing.",
      image: "/src/assets/hells gate.jpeg",
      category: "Adventure Park",
      rating: 4.4,
      highlights: ["Walking Safaris", "Rock Climbing", "Geothermal Springs", "Cycling", "Gorge Hiking"],
      galleryPath: "/hells-gate-gallery"
    },
    {
      title: "Fort Jesus Museum",
      description: "Historic Portuguese fort in Mombasa showcasing centuries of coastal history, architecture, and maritime heritage.",
      image: "/src/assets/fort jesus.jpeg",
      category: "Historical Site",
      rating: 4.3,
      highlights: ["Portuguese Architecture", "Maritime History", "Museum Collections", "Coastal Views", "Cultural Tours"],
      galleryPath: "/fort-jesus-gallery"
    }
  ];

  const allDestinations = [...destinations, ...additionalDestinations];

  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Explore</span> Kenya's Wonders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From the legendary Maasai Mara to pristine coastal paradises, discover Kenya's most spectacular destinations with our AI-powered multilingual booking experience.
          </p>
        </div>

        {/* Featured Destinations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.title}
              {...destination}
              className={`animate-fade-in-delayed ${index === 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            />
          ))}
        </div>

        {/* More Destinations */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            More Amazing Destinations
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalDestinations.map((destination) => (
              <DestinationCard
                key={destination.title}
                {...destination}
                className="animate-scale-in"
              />
            ))}
          </div>
        </div>

        {/* Mzae Images Gallery */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            More Kenya Adventures
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {mzaeImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Kenya Adventure ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => openModal(image, index)}
              />
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
            <div className="relative max-w-5xl max-h-screen p-4">
              {/* Close Button */}
              <Button
                onClick={closeModal}
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white border-0"
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                onClick={prevImage}
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white border-0"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                onClick={nextImage}
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white border-0"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Image */}
              <img
                src={selectedImage}
                alt={`Kenya Adventure ${currentImageIndex + 1}`}
                className="max-w-full max-h-screen object-contain rounded-lg"
              />

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {mzaeImages.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DestinationsShowcase;