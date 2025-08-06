import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-farm-light-green/20 to-secondary/40" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-secondary/80 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-farm-green rounded-full animate-pulse" />
                <span className="text-sm font-medium text-foreground">
                  Empowering 50M+ Farmers
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Smart Farming
                <br />
                <span className="bg-gradient-to-r from-farm-green to-accent bg-clip-text text-transparent">
                  Made Simple
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Get personalized crop recommendations, weather insights, and farming advice 
                powered by AI. Transform your agricultural decisions with data-driven guidance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="farm" size="lg" className="group" asChild>
                <a href="/dashboard">
                  Start Dashboard
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="group" asChild>
                <a href="/crop-suggestion">
                  <Play className="w-4 h-4 mr-2" />
                  Try Advisory
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-2xl font-bold text-farm-green">50M+</div>
                <div className="text-sm text-muted-foreground">Farmers Supported</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-farm-green">95%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-farm-green">40%</div>
                <div className="text-sm text-muted-foreground">Yield Increase</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Smart farming with technology"
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-background/95 backdrop-blur-sm rounded-lg p-4 border border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-foreground">Today's Recommendation</div>
                      <div className="text-xs text-muted-foreground">Based on soil & weather data</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-farm-green">Rice</div>
                      <div className="text-xs text-muted-foreground">85% match</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;