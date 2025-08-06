import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Sprout, 
  CloudRain, 
  TrendingUp, 
  Calendar,
  MapPin,
  Thermometer,
  Droplets,
  Sun,
  AlertTriangle,
  Bell,
  ArrowRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const [currentWeather] = useState({
    location: "Punjab, India",
    temperature: 28,
    humidity: 75,
    windSpeed: 12,
    condition: "Partly Cloudy",
    rainfall: 15,
    uvIndex: 6
  });

  const [cropRecommendations] = useState([
    { crop: "Rice", suitability: 95, season: "Kharif", status: "Optimal" },
    { crop: "Cotton", suitability: 85, season: "Kharif", status: "Good" },
    { crop: "Wheat", suitability: 70, season: "Rabi", status: "Moderate" }
  ]);

  const [alerts] = useState([
    { type: "weather", message: "Heavy rainfall expected in 2 days", priority: "high" },
    { type: "pest", message: "Aphid activity detected in nearby areas", priority: "medium" },
    { type: "soil", message: "Soil moisture levels optimal for planting", priority: "low" }
  ]);

  const [farmingTasks] = useState([
    { task: "Apply nitrogen fertilizer", crop: "Rice", dueDate: "Tomorrow", status: "pending" },
    { task: "Pest inspection", crop: "Cotton", dueDate: "3 days", status: "pending" },
    { task: "Harvest preparation", crop: "Wheat", dueDate: "1 week", status: "upcoming" }
  ]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "text-destructive";
      case "medium": return "text-crop-gold";
      case "low": return "text-farm-green";
      default: return "text-muted-foreground";
    }
  };

  const getSuitabilityColor = (suitability: number) => {
    if (suitability >= 90) return "text-farm-green";
    if (suitability >= 70) return "text-crop-gold";
    return "text-sky-blue";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Farm Dashboard</h1>
          <p className="text-muted-foreground">
            Your personalized farming insights and recommendations
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Weather Widget */}
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CloudRain className="w-5 h-5 text-primary" />
                Current Weather
              </CardTitle>
              <CardDescription className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {currentWeather.location}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-1">
                  {currentWeather.temperature}°C
                </div>
                <div className="text-sm text-muted-foreground">
                  {currentWeather.condition}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-blue-500" />
                  <span>Humidity: {currentWeather.humidity}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sun className="w-4 h-4 text-orange-500" />
                  <span>UV Index: {currentWeather.uvIndex}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CloudRain className="w-4 h-4 text-blue-600" />
                  <span>Rainfall: {currentWeather.rainfall}mm</span>
                </div>
                <div className="flex items-center gap-2">
                  <Thermometer className="w-4 h-4 text-red-500" />
                  <span>Wind: {currentWeather.windSpeed}km/h</span>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                View 7-Day Forecast
              </Button>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="lg:col-span-8 grid md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Active Crops</p>
                    <p className="text-2xl font-bold text-farm-green">3</p>
                  </div>
                  <Sprout className="w-8 h-8 text-farm-green" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Soil Health</p>
                    <p className="text-2xl font-bold text-crop-gold">85%</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-crop-gold" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Alerts</p>
                    <p className="text-2xl font-bold text-destructive">{alerts.length}</p>
                  </div>
                  <Bell className="w-8 h-8 text-destructive" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Crop Recommendations */}
          <Card className="lg:col-span-6">
            <CardHeader>
              <CardTitle>Recommended Crops</CardTitle>
              <CardDescription>Based on current soil and weather conditions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {cropRecommendations.map((crop, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-medium">{crop.crop}</span>
                      <Badge variant="outline" className="text-xs">
                        {crop.season}
                      </Badge>
                    </div>
                    <span className={`text-sm font-medium ${getSuitabilityColor(crop.suitability)}`}>
                      {crop.suitability}% match
                    </span>
                  </div>
                  <Progress value={crop.suitability} className="h-2" />
                </div>
              ))}
              
              <Button variant="farm" className="w-full mt-4">
                Get Detailed Analysis
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Alerts & Notifications */}
          <Card className="lg:col-span-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                Recent Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {alerts.map((alert, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    alert.priority === 'high' ? 'bg-destructive' :
                    alert.priority === 'medium' ? 'bg-crop-gold' : 'bg-farm-green'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">
                      {alert.message}
                    </p>
                    <p className={`text-xs capitalize ${getPriorityColor(alert.priority)}`}>
                      {alert.priority} priority
                    </p>
                  </div>
                </div>
              ))}
              
              <Button variant="outline" className="w-full">
                View All Alerts
              </Button>
            </CardContent>
          </Card>

          {/* Farming Tasks */}
          <Card className="lg:col-span-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Upcoming Farming Tasks
              </CardTitle>
              <CardDescription>Tasks scheduled based on crop calendar and conditions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {farmingTasks.map((task, index) => (
                  <Card key={index} className="border-l-4 border-l-farm-green">
                    <CardContent className="pt-4">
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground">{task.task}</h4>
                        <p className="text-sm text-muted-foreground">Crop: {task.crop}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">Due: {task.dueDate}</span>
                          <Badge 
                            variant="secondary" 
                            className="text-xs bg-farm-green/10 text-farm-green"
                          >
                            {task.status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;