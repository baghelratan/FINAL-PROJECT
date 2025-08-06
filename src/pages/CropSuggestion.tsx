import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  MapPin, 
  Thermometer, 
  Droplets, 
  Beaker,
  Sprout,
  Calendar,
  TrendingUp
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CropSuggestion = () => {
  const [formData, setFormData] = useState({
    location: "",
    soilType: "",
    ph: "",
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    rainfall: ""
  });

  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const analyzeCrops = async () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis - replace with actual ML model API call
    setTimeout(() => {
      const mockSuggestions = [
        {
          crop: "Rice",
          suitability: 95,
          season: "Kharif",
          yield: "4-6 tons/hectare",
          reasons: ["Optimal pH range", "High humidity suitable", "Good water availability"]
        },
        {
          crop: "Wheat",
          suitability: 78,
          season: "Rabi",
          yield: "3-4 tons/hectare",
          reasons: ["Moderate pH suitable", "Temperature range good", "Lower water requirement"]
        },
        {
          crop: "Cotton",
          suitability: 85,
          season: "Kharif",
          yield: "2-3 tons/hectare",
          reasons: ["Soil type excellent", "Climate conditions favorable", "Market demand high"]
        }
      ];
      
      setSuggestions(mockSuggestions);
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Crop Recommendation System</h1>
          <p className="text-muted-foreground">
            Get personalized crop suggestions based on your soil conditions and local environment
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Location & Environment
                </CardTitle>
                <CardDescription>
                  Enter your location and current environmental conditions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="e.g., Delhi, India"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="soilType">Soil Type</Label>
                    <Select onValueChange={(value) => handleInputChange("soilType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select soil type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sandy">Sandy</SelectItem>
                        <SelectItem value="clay">Clay</SelectItem>
                        <SelectItem value="loamy">Loamy</SelectItem>
                        <SelectItem value="silty">Silty</SelectItem>
                        <SelectItem value="peaty">Peaty</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="temperature">Temperature (°C)</Label>
                    <Input
                      id="temperature"
                      type="number"
                      placeholder="25"
                      value={formData.temperature}
                      onChange={(e) => handleInputChange("temperature", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="humidity">Humidity (%)</Label>
                    <Input
                      id="humidity"
                      type="number"
                      placeholder="75"
                      value={formData.humidity}
                      onChange={(e) => handleInputChange("humidity", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rainfall">Annual Rainfall (mm)</Label>
                    <Input
                      id="rainfall"
                      type="number"
                      placeholder="1200"
                      value={formData.rainfall}
                      onChange={(e) => handleInputChange("rainfall", e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Beaker className="w-5 h-5 text-primary" />
                  Soil Nutrient Levels
                </CardTitle>
                <CardDescription>
                  Enter your soil test results (optional but recommended)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ph">pH Level</Label>
                    <Input
                      id="ph"
                      type="number"
                      step="0.1"
                      placeholder="6.5"
                      value={formData.ph}
                      onChange={(e) => handleInputChange("ph", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nitrogen">Nitrogen (kg/ha)</Label>
                    <Input
                      id="nitrogen"
                      type="number"
                      placeholder="40"
                      value={formData.nitrogen}
                      onChange={(e) => handleInputChange("nitrogen", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phosphorus">Phosphorus (kg/ha)</Label>
                    <Input
                      id="phosphorus"
                      type="number"
                      placeholder="60"
                      value={formData.phosphorus}
                      onChange={(e) => handleInputChange("phosphorus", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="potassium">Potassium (kg/ha)</Label>
                    <Input
                      id="potassium"
                      type="number"
                      placeholder="20"
                      value={formData.potassium}
                      onChange={(e) => handleInputChange("potassium", e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button 
              onClick={analyzeCrops}
              disabled={isAnalyzing || !formData.location}
              size="lg"
              variant="farm"
              className="w-full"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2" />
                  Analyzing Soil & Climate Data...
                </>
              ) : (
                <>
                  <Sprout className="w-4 h-4 mr-2" />
                  Get Crop Recommendations
                </>
              )}
            </Button>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Environmental Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Thermometer className="w-4 h-4 text-orange-500" />
                    <span className="text-sm">Temperature</span>
                  </div>
                  <span className="text-sm font-medium">{formData.temperature || "--"}°C</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Humidity</span>
                  </div>
                  <span className="text-sm font-medium">{formData.humidity || "--"}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Soil Type</span>
                  </div>
                  <span className="text-sm font-medium capitalize">{formData.soilType || "--"}</span>
                </div>
              </CardContent>
            </Card>

            {suggestions.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Recommended Crops</h3>
                {suggestions.map((suggestion, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-foreground">{suggestion.crop}</h4>
                          <Badge 
                            variant="secondary" 
                            className={`${
                              suggestion.suitability >= 90 ? 'bg-farm-green/10 text-farm-green' :
                              suggestion.suitability >= 80 ? 'bg-crop-gold/10 text-crop-gold' :
                              'bg-sky-blue/10 text-sky-blue'
                            }`}
                          >
                            {suggestion.suitability}% Match
                          </Badge>
                        </div>
                        
                        <Progress value={suggestion.suitability} className="h-2" />
                        
                        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                          <div>Season: {suggestion.season}</div>
                          <div>Yield: {suggestion.yield}</div>
                        </div>
                        
                        <div className="space-y-1">
                          <span className="text-xs font-medium text-foreground">Why this crop:</span>
                          {suggestion.reasons.map((reason: string, idx: number) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-farm-green rounded-full" />
                              <span className="text-xs text-muted-foreground">{reason}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CropSuggestion;