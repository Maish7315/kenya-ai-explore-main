import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Sparkles } from "lucide-react";

const AIFeatures = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const images = [
    "/src/assets/image 1 (1).jpeg",
    "/src/assets/image 1 (2).jpeg",
    "/src/assets/image 1 (3).jpeg"
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
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary animate-glow-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Olkutoto</span> Travel Experience
            </h2>
            <Sparkles className="w-8 h-8 text-accent animate-glow-pulse" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the future of travel planning with our advanced Olkutoto Agent technology.
            No language barriers, no confusion - just seamless safari booking in your native language.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-300 cursor-pointer"
              onClick={() => openModal(image, index)}
            >
              <img
                src={image}
                alt={`AI Travel Experience ${index + 1}`}
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
                alt={`AI Travel Experience ${currentImageIndex + 1}`}
                className="max-w-full max-h-screen object-contain rounded-lg"
              />

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4 gradient-text">
            The Future of Travel is Here
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't let language barriers hold you back from experiencing Kenya's incredible wildlife and culture.
            Our AI makes travel planning effortless for everyone, everywhere.
          </p>
          <Button
            onClick={() => {
              const message = encodeURIComponent("Hi! I'd like to experience your AI-powered travel planning. Can you help me get started?");
              window.open(`https://wa.me/+254707608590?text=${message}`, '_blank');
            }}
            size="lg"
            className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 text-lg glow-primary transition-bounce hover:scale-105"
          >
            Experience Olkutoto Travel Planning
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;