import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Sprout, 
  CloudRain, 
  TrendingUp, 
  Shield, 
  Smartphone, 
  Globe 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Sprout,
      title: "Crop Recommendations",
      description: "AI-powered suggestions based on your soil type, weather conditions, and regional data.",
      color: "text-farm-green"
    },
    {
      icon: CloudRain,
      title: "Weather Intelligence",
      description: "Real-time weather forecasts and alerts to optimize your planting and harvesting schedule.",
      color: "text-sky-blue"
    },
    {
      icon: TrendingUp,
      title: "Yield Optimization",
      description: "Data-driven insights to maximize your crop yield and improve farming efficiency.",
      color: "text-crop-gold"
    },
    {
      icon: Shield,
      title: "Pest & Disease Control",
      description: "Early warning system for pest outbreaks and disease prevention strategies.",
      color: "text-destructive"
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Access all features through our user-friendly mobile app in your preferred language.",
      color: "text-accent"
    },
    {
      icon: Globe,
      title: "Regional Expertise",
      description: "Localized advice tailored to your specific region's climate and soil conditions.",
      color: "text-earth-brown"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Comprehensive Farming Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our Agriculture Crop Advisory System provides everything you need to make 
            informed farming decisions and boost your agricultural productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-border"
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;