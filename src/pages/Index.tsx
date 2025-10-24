import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DestinationsShowcase from "@/components/DestinationsShowcase";
import InteractiveMap from "@/components/InteractiveMap";
import AIFeatures from "@/components/AIFeatures";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import OlkutotoBanner from "@/components/OlkutotoBanner";
import VideoSection from "@/components/VideoSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <OlkutotoBanner />
        <VideoSection />
        <DestinationsShowcase />
        <InteractiveMap />
        <AIFeatures />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
