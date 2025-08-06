import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Send, 
  Bot, 
  User, 
  Mic, 
  MicOff,
  Languages,
  Lightbulb,
  Leaf,
  CloudRain,
  Bug
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
  suggestions?: string[];
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Namaste! 🙏 I'm your Krishi Mitr AI assistant. I can help you with crop recommendations, farming techniques, pest control, and weather advice. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
      suggestions: [
        "Best crops for sandy soil",
        "Weather forecast for farming",
        "Organic pest control methods",
        "Fertilizer recommendations"
      ]
    }
  ]);
  
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const languages = [
    { code: "english", name: "English", flag: "🇺🇸" },
    { code: "hindi", name: "हिंदी", flag: "🇮🇳" },
    { code: "punjabi", name: "ਪੰਜਾਬੀ", flag: "🇮🇳" },
    { code: "bengali", name: "বাংলা", flag: "🇮🇳" },
    { code: "marathi", name: "मराठी", flag: "🇮🇳" }
  ];

  const quickSuggestions = [
    { icon: Leaf, text: "Crop recommendations", category: "crops" },
    { icon: CloudRain, text: "Weather updates", category: "weather" },
    { icon: Bug, text: "Pest control", category: "pest" },
    { icon: Lightbulb, text: "Farming tips", category: "tips" }
  ];

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Simple rule-based responses - replace with actual AI API
    if (message.includes("crop") || message.includes("recommendation")) {
      return "Based on your location and soil type, I recommend considering rice, wheat, or cotton. For more specific recommendations, please share your soil test results and location. Would you like me to analyze your specific conditions?";
    } else if (message.includes("weather")) {
      return "Current weather conditions show moderate temperature and good humidity levels for farming. I recommend checking the 7-day forecast before planning any major farming activities. Would you like location-specific weather advice?";
    } else if (message.includes("pest") || message.includes("disease")) {
      return "For organic pest control, consider neem oil, companion planting, and biological controls. Can you describe the specific pest problem you're facing? I can provide targeted solutions.";
    } else if (message.includes("fertilizer")) {
      return "Fertilizer recommendations depend on your soil test results and crop choice. Generally, a balanced NPK ratio works well for most crops. Have you done a recent soil test?";
    } else if (message.includes("organic")) {
      return "Organic farming is excellent for sustainable agriculture! I can help with organic fertilizers, natural pest control, and soil health improvement. What specific aspect interests you?";
    } else {
      return "I'm here to help with all your farming questions! You can ask me about crop selection, soil health, weather planning, pest control, fertilizers, and sustainable farming practices. What would you like to know?";
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate API delay
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date(),
        suggestions: [
          "Tell me more",
          "Show examples",
          "Different options",
          "Next steps"
        ]
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion);
    inputRef.current?.focus();
  };

  const toggleVoiceInput = () => {
    if (!isListening) {
      // Start voice recognition
      if ('webkitSpeechRecognition' in window) {
        const recognition = new (window as any).webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = selectedLanguage === 'hindi' ? 'hi-IN' : 'en-US';
        
        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);
        recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setInputMessage(transcript);
        };
        
        recognition.start();
      }
    } else {
      setIsListening(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">AI Farming Assistant</h1>
          <p className="text-muted-foreground">
            Get instant answers to your farming questions in your preferred language
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Languages className="w-5 h-5 text-primary" />
                  Language
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {languages.map((lang) => (
                    <Button
                      key={lang.code}
                      variant={selectedLanguage === lang.code ? "default" : "outline"}
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setSelectedLanguage(lang.code)}
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {quickSuggestions.map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => handleSuggestionClick(suggestion.text)}
                    >
                      <suggestion.icon className="w-4 h-4 mr-2" />
                      {suggestion.text}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="flex-shrink-0">
                <CardTitle className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-primary" />
                  Krishi Mitr AI Assistant
                  <Badge variant="secondary" className="ml-auto">
                    Online
                  </Badge>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col p-0">
                {/* Messages */}
                <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                        <div className={`flex gap-3 max-w-[80%] ${message.isBot ? '' : 'flex-row-reverse'}`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.isBot ? 'bg-primary' : 'bg-accent'
                          }`}>
                            {message.isBot ? (
                              <Bot className="w-4 h-4 text-primary-foreground" />
                            ) : (
                              <User className="w-4 h-4 text-accent-foreground" />
                            )}
                          </div>
                          
                          <div className={`space-y-2 ${message.isBot ? '' : 'text-right'}`}>
                            <div className={`rounded-lg p-3 ${
                              message.isBot 
                                ? 'bg-muted text-foreground' 
                                : 'bg-primary text-primary-foreground'
                            }`}>
                              {message.text}
                            </div>
                            
                            {message.suggestions && (
                              <div className="flex flex-wrap gap-2">
                                {message.suggestions.map((suggestion, index) => (
                                  <Button
                                    key={index}
                                    variant="outline"
                                    size="sm"
                                    className="text-xs"
                                    onClick={() => handleSuggestionClick(suggestion)}
                                  >
                                    {suggestion}
                                  </Button>
                                ))}
                              </div>
                            )}
                            
                            <div className="text-xs text-muted-foreground">
                              {message.timestamp.toLocaleTimeString([], { 
                                hour: '2-digit', 
                                minute: '2-digit' 
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                            <Bot className="w-4 h-4 text-primary-foreground" />
                          </div>
                          <div className="bg-muted rounded-lg p-3">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>

                {/* Input Area */}
                <div className="border-t p-4">
                  <div className="flex gap-2">
                    <div className="flex-1 flex gap-2">
                      <Input
                        ref={inputRef}
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Ask me anything about farming..."
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                        className="flex-1"
                      />
                      <Button
                        onClick={toggleVoiceInput}
                        variant="outline"
                        size="icon"
                        className={isListening ? "bg-destructive text-destructive-foreground" : ""}
                      >
                        {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                      </Button>
                    </div>
                    <Button 
                      onClick={sendMessage}
                      disabled={!inputMessage.trim() || isTyping}
                      variant="farm"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Chatbot;