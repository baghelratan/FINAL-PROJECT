import { Leaf, Mail, Phone, MapPin, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-farm-green text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">Krishi Mitr</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Empowering farmers with intelligent crop advisory system powered by 
              AI and real-time data analytics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/dashboard" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/crop-suggestion" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Crop Advisory
                </a>
              </li>
              <li>
                <a href="/soil-health" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Soil Health
                </a>
              </li>
              <li>
                <a href="/chatbot" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  AI Assistant
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">Crop Recommendations</li>
              <li className="text-primary-foreground/80">Weather Intelligence</li>
              <li className="text-primary-foreground/80">Soil Analysis</li>
              <li className="text-primary-foreground/80">Pest Control Advisory</li>
              <li className="text-primary-foreground/80">Yield Optimization</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">support@krishimitr.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">+91 1800-123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent mt-1" />
                <span className="text-primary-foreground/80">
                  Agricultural Technology Hub<br />
                  New Delhi, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Krishi Mitr. All rights reserved. | Designed with ❤️ for Indian farmers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;