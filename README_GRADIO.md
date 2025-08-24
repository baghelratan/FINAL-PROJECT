# 🌾 Smart Farming Assistant - Gradio Version

A comprehensive AI-powered farming application built with Gradio, providing crop recommendations, soil health monitoring, weather insights, and expert farming advice.

## 🚀 Features

### 📊 Dashboard
- **Quick Stats**: View key metrics like total farmers supported, accuracy rate, and yield increase
- **Weather Forecast**: 7-day weather predictions with temperature, rainfall, and humidity charts
- **Soil Health Analysis**: Visual representation of soil nutrient levels
- **Yield Prediction**: Historical and predicted crop yield trends

### 🌱 Crop Recommendation
- **Smart Algorithm**: AI-powered crop suggestions based on:
  - Soil type (Clay loam, Loam, Sandy loam, Black soil, Deep loam, Red soil)
  - Growing season (Kharif, Rabi, Zaid, Year-round)
  - Water availability (Low, Medium, High)
  - Temperature and rainfall conditions
- **Scoring System**: Ranked recommendations with detailed crop information

### 🌍 Soil Health
- **Nutrient Analysis**: Monitor Nitrogen, Phosphorus, Potassium, pH, and Organic Matter
- **Status Indicators**: Color-coded health status for each nutrient
- **Actionable Recommendations**: Specific steps to improve soil quality

### 💡 Farming Advisory
- **Daily Tips**: Expert farming practices for different crops
- **Weather Advisory**: Current conditions and farming recommendations
- **Best Practices**: Pre-planting, growth, and harvest guidelines

### 🤖 AI Assistant
- **Chatbot Interface**: Ask questions about farming practices
- **Keyword Recognition**: Smart responses for common farming topics
- **Example Questions**: Pre-built queries to get started

## 🛠️ Installation

### Prerequisites
- Python 3.8 or higher
- pip package manager

### Setup
1. **Clone or download the project files**
2. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the application**:
   ```bash
   python app.py
   ```

4. **Access the app**: Open your browser and go to `http://localhost:7860`

## 📱 Usage

### Getting Started
1. **Dashboard**: View overview statistics and charts
2. **Crop Recommendation**: Input your soil and climate conditions for personalized suggestions
3. **Soil Health**: Monitor your soil's nutrient levels and get improvement tips
4. **Farming Advisory**: Access expert farming knowledge and weather insights
5. **AI Assistant**: Chat with the AI for instant farming advice

### Crop Recommendation Example
1. Select your soil type (e.g., "Clay loam")
2. Choose the growing season (e.g., "Kharif")
3. Set water availability (e.g., "Medium")
4. Adjust temperature and rainfall sliders
5. Click "Get Recommendations" to see AI-powered crop suggestions

### AI Assistant Tips
- Ask about: pests, fertilizers, water management, weather, soil health, crop selection
- Use natural language: "How do I control pests naturally?"
- Get instant, expert-level farming advice

## 🔧 Customization

### Adding New Crops
Edit the `CROPS_DATA` dictionary in `app.py`:
```python
CROPS_DATA = {
    "New Crop": {
        "season": "Kharif",
        "water_requirement": "Medium",
        "soil_type": "Loam",
        "yield": "2-3 tons/ha"
    }
}
```

### Modifying Soil Types
Update the `SOIL_TYPES` list to include your local soil classifications.

### Enhancing the AI Assistant
Add new keywords and responses in the `chatbot_response` function.

## 🌐 Deployment

### Local Development
```bash
python app.py
```

### Production Deployment
```bash
# For production, disable sharing and set specific host/port
demo.launch(share=False, server_name="0.0.0.0", server_port=7860)
```

### Docker Deployment
```dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 7860
CMD ["python", "app.py"]
```

## 📊 Data Sources

Currently uses mock data for demonstration. To integrate real data:

1. **Weather API**: Connect to OpenWeatherMap or similar services
2. **Soil Sensors**: Integrate IoT soil monitoring devices
3. **Satellite Data**: Use remote sensing data for crop monitoring
4. **ML Models**: Train custom models on your agricultural dataset

## 🔮 Future Enhancements

- **Real-time Data Integration**: Connect to weather APIs and soil sensors
- **Machine Learning Models**: Implement trained models for better predictions
- **Multi-language Support**: Add support for local languages
- **Mobile App**: Create companion mobile applications
- **Offline Mode**: Enable basic functionality without internet
- **User Authentication**: Individual farmer profiles and history
- **Community Features**: Farmer-to-farmer knowledge sharing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with [Gradio](https://gradio.app/) for rapid ML app development
- Inspired by the need to democratize agricultural technology
- Dedicated to empowering farmers worldwide

---

**🌾 Empowering 50M+ Farmers with AI-Driven Insights** 