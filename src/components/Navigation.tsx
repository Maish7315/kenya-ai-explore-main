import { useState } from 'react';
import { Button } from "@/components/ui/button";
import favicon from "@/assets/favicon.jpeg";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe, Menu, X, MessageCircle, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const { theme, setTheme } = useTheme();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  ];

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'd like to inquire about Kenya safari tours. Can you help me plan my trip?");
    window.open(`https://wa.me/+254707608590?text=${message}`, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <button
            onClick={() => {
              window.location.href = '/';
              setTimeout(() => {
                document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img src={favicon} alt="Discover Kenya Logo" className="w-10 h-10 rounded-full object-cover" />
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Discover Kenya
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('destinations')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Destinations
            </button>
            <button
              onClick={() => scrollToSection('ai-features')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              AI Features
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Reviews
            </button>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            
            {/* Language Selector */}
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="w-32 border-primary/20 bg-background/50">
                <Globe className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    <span className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="w-10 h-10 rounded-full"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* WhatsApp Button */}
            <Button 
              onClick={openWhatsApp}
              className="hidden sm:flex bg-accent hover:bg-accent-glow text-accent-foreground glow-adventure transition-bounce hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 animate-fade-in-delayed">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('destinations')}
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                Destinations
              </button>
              <button
                onClick={() => scrollToSection('ai-features')}
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                AI Features
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                Reviews
              </button>
              <Button 
                onClick={openWhatsApp}
                className="w-full bg-accent hover:bg-accent-glow text-accent-foreground mt-4"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Book via WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;