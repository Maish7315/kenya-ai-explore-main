import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'd like to inquire about Kenya safari tours. Can you help me plan my trip?");
    window.open(`https://wa.me/+254707608590?text=${message}`, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/favicon.jpeg" alt="Discover Kenya Logo" className="w-8 h-8 rounded-full object-cover" />
              <span className="text-lg font-bold bg-gradient-hero bg-clip-text text-transparent">
                Discover Kenya
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Experience Kenya's breathtaking wildlife, pristine beaches, and rich culture. Your gateway to unforgettable safari adventures.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('destinations')}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Destinations
              </button>
              <button
                onClick={() => scrollToSection('experiences')}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Experiences
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About Kenya
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Reviews
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Kenya, Narok Oltalet Mall Second Floor</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+254 707 608 590</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+254 711 939 160</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@discoverkenya.com</span>
              </div>
            </div>
            <Button
              onClick={openWhatsApp}
              className="w-full bg-accent hover:bg-accent-glow text-accent-foreground"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Us
            </Button>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for exclusive deals and travel tips.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full"
              />
              <Button className="w-full bg-primary hover:bg-primary-glow">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2025 Discover Kenya. All rights reserved. | Site created by <a href="https://roy-tecxprosanga.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">roy-tecxprosanga.netlify.app</a>
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;