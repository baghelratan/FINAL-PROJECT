import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  MapPin, 
  Thermometer, 
  Droplets, 
  Calendar,
  TrendingUp,
  AlertTriangle
} from "lucide-react";
import cropsImage from "@/assets/crops-icon.jpg";

const Advisory = () => {
  return (
    <section id="advisory" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Smart Advisory Dashboard
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get personalized recommendations and real-time insights to optimize your farming decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Current Conditions */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Current Conditions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Thermometer className="w-4 h-4 text-orange-500" />
                    <span className="text-sm">Temperature</span>
                  </div>
                  <span className="text-sm font-medium">28°C</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Humidity</span>
                  </div>
                  <span className="text-sm font-medium">75%</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Season</span>
                  </div>
                  <span className="text-sm font-medium">Kharif</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  <span className="text-sm font-medium">Weather Alert</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Moderate rainfall expected in 2 days. Plan irrigation accordingly.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Crop Recommendations */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recommended Crops</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Rice</span>
                      <Badge variant="secondary" className="bg-farm-green/10 text-farm-green">
                        95% Match
                      </Badge>
                    </div>
                    <Progress value={95} className="h-2" />
                    <p className="text-sm text-muted-foreground">
                      Excellent match for current soil and weather conditions.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Cotton</span>
                      <Badge variant="secondary" className="bg-crop-gold/10 text-crop-gold">
                        78% Match
                      </Badge>
                    </div>
                    <Progress value={78} className="h-2" />
                    <p className="text-sm text-muted-foreground">
                      Good option with high market demand this season.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Sugarcane</span>
                      <Badge variant="secondary" className="bg-sky-blue/10 text-sky-blue">
                        65% Match
                      </Badge>
                    </div>
                    <Progress value={65} className="h-2" />
                    <p className="text-sm text-muted-foreground">
                      Consider for long-term cultivation with proper irrigation.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <img
                    src={cropsImage}
                    alt="Crop varieties"
                    className="w-full max-w-xs rounded-lg shadow-md"
                  />
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="font-medium">Next Advisory Update</h4>
                    <p className="text-sm text-muted-foreground">
                      Based on weather forecast changes
                    </p>
                  </div>
                  <Button variant="farm">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Advisory;