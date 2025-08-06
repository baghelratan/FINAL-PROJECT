import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Upload, 
  FileText, 
  Beaker, 
  TrendingUp, 
  TrendingDown, 
  CheckCircle,
  AlertTriangle,
  Leaf
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";

const SoilHealth = () => {
  const [soilData, setSoilData] = useState({
    ph: "",
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    organicMatter: "",
    moisture: "",
    temperature: "",
    ec: ""
  });

  const [analysis, setAnalysis] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setSoilData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Simulate file processing
      toast({
        title: "File uploaded successfully",
        description: `Processing ${file.name}...`
      });
      
      // Mock extracted data from uploaded report
      setTimeout(() => {
        setSoilData({
          ph: "6.8",
          nitrogen: "45",
          phosphorus: "38",
          potassium: "25",
          organicMatter: "2.8",
          moisture: "15",
          temperature: "24",
          ec: "0.45"
        });
        toast({
          title: "Data extracted",
          description: "Soil test report has been processed successfully."
        });
      }, 2000);
    }
  };

  const analyzeSoil = () => {
    setIsAnalyzing(true);
    
    // Simulate soil analysis
    setTimeout(() => {
      const ph = parseFloat(soilData.ph) || 7;
      const n = parseFloat(soilData.nitrogen) || 0;
      const p = parseFloat(soilData.phosphorus) || 0;
      const k = parseFloat(soilData.potassium) || 0;
      const om = parseFloat(soilData.organicMatter) || 0;
      
      const analysisResult = {
        overallHealth: Math.min(100, Math.max(20, (
          (ph >= 6 && ph <= 7.5 ? 85 : 60) +
          (n >= 40 ? 85 : n >= 20 ? 70 : 50) +
          (p >= 30 ? 85 : p >= 15 ? 70 : 50) +
          (k >= 20 ? 85 : k >= 10 ? 70 : 50) +
          (om >= 2 ? 85 : om >= 1 ? 70 : 50)
        ) / 5)),
        nutrients: {
          ph: {
            value: ph,
            status: ph >= 6 && ph <= 7.5 ? "optimal" : ph < 6 ? "acidic" : "alkaline",
            recommendation: ph < 6 ? "Add lime to increase pH" : ph > 7.5 ? "Add sulfur to reduce pH" : "Maintain current pH level"
          },
          nitrogen: {
            value: n,
            status: n >= 40 ? "high" : n >= 20 ? "medium" : "low",
            recommendation: n < 40 ? "Apply nitrogen-rich fertilizer" : "Maintain current nitrogen level"
          },
          phosphorus: {
            value: p,
            status: p >= 30 ? "high" : p >= 15 ? "medium" : "low",
            recommendation: p < 30 ? "Apply phosphate fertilizer" : "Maintain current phosphorus level"
          },
          potassium: {
            value: k,
            status: k >= 20 ? "high" : k >= 10 ? "medium" : "low",
            recommendation: k < 20 ? "Apply potash fertilizer" : "Maintain current potassium level"
          }
        },
        recommendations: [
          "Apply organic compost to improve soil structure",
          "Consider crop rotation with legumes to fix nitrogen",
          "Regular soil testing every 6 months recommended",
          "Maintain proper irrigation to prevent nutrient leaching"
        ]
      };
      
      setAnalysis(analysisResult);
      setIsAnalyzing(false);
    }, 3000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "optimal":
      case "high":
        return "text-farm-green";
      case "medium":
        return "text-crop-gold";
      case "low":
      case "acidic":
      case "alkaline":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "optimal":
      case "high":
        return <CheckCircle className="w-4 h-4 text-farm-green" />;
      case "medium":
        return <TrendingUp className="w-4 h-4 text-crop-gold" />;
      case "low":
      case "acidic":
      case "alkaline":
        return <AlertTriangle className="w-4 h-4 text-destructive" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Soil Health Analysis</h1>
          <p className="text-muted-foreground">
            Upload your soil test report or enter values manually to get detailed health analysis and recommendations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="upload" className="space-y-6">
              <TabsList className="grid grid-cols-2 w-full">
                <TabsTrigger value="upload" className="flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  Upload Report
                </TabsTrigger>
                <TabsTrigger value="manual" className="flex items-center gap-2">
                  <Beaker className="w-4 h-4" />
                  Manual Entry
                </TabsTrigger>
              </TabsList>

              <TabsContent value="upload">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      Upload Soil Test Report
                    </CardTitle>
                    <CardDescription>
                      Upload your laboratory soil test report (PDF, JPG, PNG)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                      <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground mb-4">
                        Drag and drop your soil test report here, or click to browse
                      </p>
                      <Input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <Label htmlFor="file-upload">
                        <Button variant="outline" className="cursor-pointer">
                          Choose File
                        </Button>
                      </Label>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="manual">
                <Card>
                  <CardHeader>
                    <CardTitle>Enter Soil Parameters</CardTitle>
                    <CardDescription>
                      Manually enter your soil test values
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
                          value={soilData.ph}
                          onChange={(e) => handleInputChange("ph", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ec">Electrical Conductivity (mS/cm)</Label>
                        <Input
                          id="ec"
                          type="number"
                          step="0.01"
                          placeholder="0.5"
                          value={soilData.ec}
                          onChange={(e) => handleInputChange("ec", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="nitrogen">Nitrogen (kg/ha)</Label>
                        <Input
                          id="nitrogen"
                          type="number"
                          placeholder="40"
                          value={soilData.nitrogen}
                          onChange={(e) => handleInputChange("nitrogen", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phosphorus">Phosphorus (kg/ha)</Label>
                        <Input
                          id="phosphorus"
                          type="number"
                          placeholder="60"
                          value={soilData.phosphorus}
                          onChange={(e) => handleInputChange("phosphorus", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="potassium">Potassium (kg/ha)</Label>
                        <Input
                          id="potassium"
                          type="number"
                          placeholder="20"
                          value={soilData.potassium}
                          onChange={(e) => handleInputChange("potassium", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="organicMatter">Organic Matter (%)</Label>
                        <Input
                          id="organicMatter"
                          type="number"
                          step="0.1"
                          placeholder="2.5"
                          value={soilData.organicMatter}
                          onChange={(e) => handleInputChange("organicMatter", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="moisture">Moisture Content (%)</Label>
                        <Input
                          id="moisture"
                          type="number"
                          placeholder="15"
                          value={soilData.moisture}
                          onChange={(e) => handleInputChange("moisture", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="temperature">Soil Temperature (°C)</Label>
                        <Input
                          id="temperature"
                          type="number"
                          placeholder="25"
                          value={soilData.temperature}
                          onChange={(e) => handleInputChange("temperature", e.target.value)}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Button 
              onClick={analyzeSoil}
              disabled={isAnalyzing || (!soilData.ph && !soilData.nitrogen)}
              size="lg"
              variant="farm"
              className="w-full"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2" />
                  Analyzing Soil Health...
                </>
              ) : (
                <>
                  <Leaf className="w-4 h-4 mr-2" />
                  Analyze Soil Health
                </>
              )}
            </Button>
          </div>

          {/* Analysis Results */}
          <div className="space-y-6">
            {analysis && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle>Overall Soil Health</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-farm-green mb-2">
                          {Math.round(analysis.overallHealth)}%
                        </div>
                        <Progress value={analysis.overallHealth} className="h-3" />
                      </div>
                      <div className="text-sm text-muted-foreground text-center">
                        {analysis.overallHealth >= 80 ? "Excellent soil health" :
                         analysis.overallHealth >= 60 ? "Good soil health" :
                         analysis.overallHealth >= 40 ? "Fair soil health" :
                         "Poor soil health - needs attention"}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Nutrient Analysis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Object.entries(analysis.nutrients).map(([key, nutrient]: [string, any]) => (
                      <div key={key} className="flex items-center justify-between p-3 rounded-lg border">
                        <div className="flex items-center gap-3">
                          {getStatusIcon(nutrient.status)}
                          <div>
                            <div className="font-medium capitalize">{key}</div>
                            <div className="text-sm text-muted-foreground">
                              {nutrient.value} {key === 'ph' ? '' : key === 'ec' ? 'mS/cm' : 'kg/ha'}
                            </div>
                          </div>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className={`capitalize ${getStatusColor(nutrient.status)}`}
                        >
                          {nutrient.status}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {analysis.recommendations.map((rec: string, index: number) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-farm-green rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{rec}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SoilHealth;