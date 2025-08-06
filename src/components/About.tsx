import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Target, 
  Lightbulb, 
  ArrowRight 
} from "lucide-react";
import technologyImage from "@/assets/technology-farming.jpg";

const About = () => {
  const objectives = [
    "Recommend suitable crops based on soil type, nutrients, weather, and region",
    "Provide weather-based guidance for sowing, irrigation, and harvesting decisions",
    "Suggest fertilizer and irrigation plans with accurate dosages and schedules",
    "Assist in pest and disease control with early warning systems",
    "Offer easy-to-use interface in local languages for better accessibility"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Bridging Traditional Farming with
                <span className="text-farm-green"> Modern Technology</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Agriculture contributes nearly 18% to India's GDP and provides livelihood to over 
                half of the population. Yet many farmers still rely on traditional practices that 
                may not match today's challenges like unpredictable weather and declining yields.
              </p>
            </div>

            {/* Problem Statement */}
            <Card className="border-l-4 border-l-farm-green">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-farm-green" />
                  The Challenge
                </h3>
                <p className="text-muted-foreground">
                  Farmers often lack personalized guidance, leading to poor crop choices, 
                  excessive fertilizer use, and reduced income. Expert advice is either 
                  out of reach or not tailored to local conditions.
                </p>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card className="border-l-4 border-l-accent">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-accent" />
                  Our Solution
                </h3>
                <p className="text-muted-foreground">
                  ACAS (Agriculture Crop Advisory System) uses Machine Learning, Weather APIs, 
                  and Soil Health Data to provide personalized, timely advice - like having a 
                  digital farming expert in every farmer's pocket.
                </p>
              </CardContent>
            </Card>

            <Button variant="farm" size="lg" className="group">
              Learn More About Our Mission
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Image and Objectives */}
          <div className="space-y-8">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={technologyImage}
                alt="Modern farming technology"
                className="w-full h-auto object-cover"
              />
            </div>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Our Objectives
                </h3>
                <ul className="space-y-3">
                  {objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-farm-green rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {objective}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;