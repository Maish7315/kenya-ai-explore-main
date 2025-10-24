import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingSection from "@/components/BookingSection";

// Import all images from the tsavo folder
import image1 from "@/assets/tsavo/East African Oryx or Beisa Oryx(Oryx beisa) at….jpeg";
import image2 from "@/assets/tsavo/Embrace Unique Activities Beyond game drive in….jpeg";
import image3 from "@/assets/tsavo/Explore Tarangire National Park In Tanzania.jpeg";
import image4 from "@/assets/tsavo/Giraffes and sunset in Tsavo East and Tsavo West National Park stock photography.jpeg";
import image5 from "@/assets/tsavo/Kenya Travel Guide – Parks, Best Time, Reviews & More!.jpeg";
import image6 from "@/assets/tsavo/Plan to explore Tsavo West National Park and….jpeg";
import image7 from "@/assets/tsavo/Safari in Kenya — BARBARA ATHANASSIADIS, Travel Writer.jpeg";
import image8 from "@/assets/tsavo/Seeing Chimpanzees In The Wild At Gombe Stream National Park.jpeg";
import image9 from "@/assets/tsavo/Serengeti National Park - National Park Field Guide.jpeg";
import image10 from "@/assets/tsavo/There is no end to the adventures, we can have if….jpeg";
import image11 from "@/assets/tsavo/WILDLIFE KENYA SAFARIS - DAY TRIPS (2025) All You Should Know BEFORE You Go (w_ Reviews) (1).jpeg";
import image12 from "@/assets/tsavo/𝐖𝐡𝐞𝐫𝐞 𝐖𝐢𝐥𝐝𝐥𝐢𝐟𝐞 𝐌𝐞𝐞𝐭𝐬….jpeg";
import image13 from "@/assets/tsavo/📌Watch animals from the aerial view of the….jpeg";

const TsavoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const images = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13
  ];

  const openModal = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
    setSelectedImage(images[(currentImageIndex + 1) % images.length]);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    setSelectedImage(images[(currentImageIndex - 1 + images.length) % images.length]);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Tsavo National Parks</span> Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore Kenya's largest protected area featuring red elephants, diverse wildlife, and dramatic landscapes through our comprehensive collection of stunning photographs.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-300 cursor-pointer"
                  onClick={() => openModal(image, index)}
                >
                  <img
                    src={image}
                    alt={`Tsavo National Parks ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                alt={`Tsavo National Parks ${currentImageIndex + 1}`}
                className="max-w-full max-h-screen object-contain rounded-lg"
              />

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        )}
      </main>

      <BookingSection destinationName="Tsavo National Parks" />

      <Footer />
    </div>
  );
};

export default TsavoGallery;