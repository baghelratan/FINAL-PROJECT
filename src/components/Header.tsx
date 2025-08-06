import { Button } from "@/components/ui/button";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-farm-green to-accent rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Krishi Mitr</h1>
              <p className="text-sm text-muted-foreground">Your Farming Companion</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/dashboard" className="text-foreground hover:text-primary transition-colors">
              Dashboard
            </a>
            <a href="/crop-suggestion" className="text-foreground hover:text-primary transition-colors">
              Crop Advisory
            </a>
            <a href="/soil-health" className="text-foreground hover:text-primary transition-colors">
              Soil Health
            </a>
            <a href="/chatbot" className="text-foreground hover:text-primary transition-colors">
              AI Assistant
            </a>
            <Button variant="farm" className="ml-4">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="/dashboard" className="text-foreground hover:text-primary transition-colors">
                Dashboard
              </a>
              <a href="/crop-suggestion" className="text-foreground hover:text-primary transition-colors">
                Crop Advisory
              </a>
              <a href="/soil-health" className="text-foreground hover:text-primary transition-colors">
                Soil Health
              </a>
              <a href="/chatbot" className="text-foreground hover:text-primary transition-colors">
                AI Assistant
              </a>
              <Button variant="farm" className="w-full">
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;