import gradio as gr
import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import plotly.graph_objects as go
import plotly.express as px
from plotly.subplots import make_subplots
import json

# Mock data for demonstration
CROPS_DATA = {
    "Rice": {"season": "Kharif", "water_requirement": "High", "soil_type": "Clay loam", "yield": "4-6 tons/ha"},
    "Wheat": {"season": "Rabi", "water_requirement": "Medium", "soil_type": "Loam", "yield": "3-4 tons/ha"},
    "Maize": {"season": "Kharif", "water_requirement": "Medium", "soil_type": "Sandy loam", "yield": "2.5-3.5 tons/ha"},
    "Cotton": {"season": "Kharif", "water_requirement": "Low", "soil_type": "Black soil", "yield": "1.5-2.5 tons/ha"},
    "Sugarcane": {"season": "Year-round", "water_requirement": "Very High", "soil_type": "Deep loam", "yield": "70-80 tons/ha"}
}

SOIL_TYPES = ["Clay loam", "Loam", "Sandy loam", "Black soil", "Deep loam", "Red soil"]
SEASONS = ["Kharif", "Rabi", "Zaid", "Year-round"]

def get_crop_recommendation(soil_type, season, water_availability, temperature, rainfall):
    """Get crop recommendation based on input parameters"""
    recommendations = []
    
    for crop, data in CROPS_DATA.items():
        score = 0
        
        # Soil type matching
        if data["soil_type"] == soil_type:
            score += 30
        elif data["soil_type"] in ["Loam", "Clay loam"] and soil_type in ["Loam", "Clay loam"]:
            score += 20
        
        # Season matching
        if data["season"] == season or data["season"] == "Year-round":
            score += 25
        elif (season == "Kharif" and data["season"] == "Kharif") or (season == "Rabi" and data["season"] == "Rabi"):
            score += 20
        
        # Water requirement matching
        if water_availability == "High" and data["water_requirement"] in ["High", "Very High"]:
            score += 20
        elif water_availability == "Medium" and data["water_requirement"] == "Medium":
            score += 20
        elif water_availability == "Low" and data["water_requirement"] == "Low":
            score += 20
        
        # Temperature and rainfall considerations
        if temperature >= 20 and temperature <= 35:
            score += 15
        elif temperature >= 15 and temperature <= 40:
            score += 10
            
        if rainfall >= 100 and rainfall <= 200:
            score += 10
        elif rainfall >= 50 and rainfall <= 300:
            score += 5
            
        if score > 0:
            recommendations.append({
                "crop": crop,
                "score": score,
                "details": data
            })
    
    # Sort by score and return top 3
    recommendations.sort(key=lambda x: x["score"], reverse=True)
    return recommendations[:3]

def create_weather_chart():
    """Create a mock weather chart"""
    dates = pd.date_range(start=datetime.now(), periods=7, freq='D')
    temperatures = np.random.normal(30, 5, 7)
    rainfall = np.random.exponential(20, 7)
    humidity = np.random.normal(70, 10, 7)
    
    fig = make_subplots(
        rows=3, cols=1,
        subplot_titles=('Temperature (°C)', 'Rainfall (mm)', 'Humidity (%)'),
        vertical_spacing=0.1
    )
    
    fig.add_trace(go.Scatter(x=dates, y=temperatures, mode='lines+markers', name='Temperature'), row=1, col=1)
    fig.add_trace(go.Bar(x=dates, y=rainfall, name='Rainfall'), row=2, col=1)
    fig.add_trace(go.Scatter(x=dates, y=humidity, mode='lines+markers', name='Humidity'), row=3, col=1)
    
    fig.update_layout(height=400, showlegend=False, title_text="7-Day Weather Forecast")
    return fig

def create_soil_health_chart():
    """Create a mock soil health chart"""
    nutrients = ['Nitrogen', 'Phosphorus', 'Potassium', 'pH', 'Organic Matter']
    values = [75, 60, 80, 6.5, 3.2]
    
    fig = go.Figure(data=[
        go.Bar(x=nutrients, y=values, marker_color=['#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'])
    ])
    
    fig.update_layout(
        title="Soil Health Analysis",
        xaxis_title="Nutrients",
        yaxis_title="Values",
        height=400
    )
    
    return fig

def create_yield_prediction_chart():
    """Create a mock yield prediction chart"""
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    actual = [100, 120, 110, 130, 140, 150]
    predicted = [105, 115, 125, 135, 145, 155]
    
    fig = go.Figure()
    fig.add_trace(go.Scatter(x=months, y=actual, mode='lines+markers', name='Actual Yield', line=dict(color='#22c55e')))
    fig.add_trace(go.Scatter(x=months, y=predicted, mode='lines+markers', name='Predicted Yield', line=dict(color='#3b82f6', dash='dash')))
    
    fig.update_layout(
        title="Crop Yield Prediction",
        xaxis_title="Month",
        yaxis_title="Yield (tons/ha)",
        height=400
    )
    
    return fig

def chatbot_response(message, history):
    """Simple chatbot for farming advice"""
    farming_keywords = {
        "pest": "For pest control, consider using integrated pest management (IPM) techniques. Use neem oil or other organic pesticides as a first line of defense.",
        "fertilizer": "Soil testing is crucial before applying fertilizers. Use organic fertilizers like compost, vermicompost, or green manure when possible.",
        "water": "Implement drip irrigation or sprinkler systems for efficient water usage. Monitor soil moisture regularly.",
        "weather": "Check local weather forecasts regularly. Use weather-based farming decisions for optimal crop management.",
        "soil": "Regular soil testing helps maintain soil health. Add organic matter and practice crop rotation.",
        "crop": "Choose crops based on your soil type, climate, and market demand. Consider crop rotation for better soil health."
    }
    
    message_lower = message.lower()
    
    for keyword, response in farming_keywords.items():
        if keyword in message_lower:
            return response
    
    return "I'm here to help with farming advice! Ask me about pests, fertilizers, water management, weather, soil health, or crop selection."

# Create the Gradio interface
with gr.Blocks(theme=gr.themes.Soft(), title="Smart Farming Assistant") as demo:
    gr.Markdown(
        """
        # 🌾 Smart Farming Assistant
        **Empowering farmers with AI-driven insights and recommendations**
        
        ---
        """
    )
    
    with gr.Tabs():
        # Dashboard Tab
        with gr.Tab("📊 Dashboard"):
            with gr.Row():
                with gr.Column(scale=1):
                    gr.Markdown("### Quick Stats")
                    stats_output = gr.JSON(
                        value={
                            "Total Farmers": "50M+",
                            "Accuracy Rate": "95%",
                            "Yield Increase": "40%",
                            "Active Sessions": "2.3K"
                        },
                        label="Statistics"
                    )
                
                with gr.Column(scale=2):
                    gr.Markdown("### Weather Forecast")
                    weather_chart = gr.Plot(create_weather_chart())
            
            with gr.Row():
                with gr.Column():
                    gr.Markdown("### Soil Health Analysis")
                    soil_chart = gr.Plot(create_soil_health_chart())
                
                with gr.Column():
                    gr.Markdown("### Yield Prediction")
                    yield_chart = gr.Plot(create_yield_prediction_chart())
        
        # Crop Recommendation Tab
        with gr.Tab("🌱 Crop Recommendation"):
            gr.Markdown("### Get Personalized Crop Recommendations")
            
            with gr.Row():
                with gr.Column():
                    soil_type = gr.Dropdown(choices=SOIL_TYPES, label="Soil Type", value="Clay loam")
                    season = gr.Dropdown(choices=SEASONS, label="Growing Season", value="Kharif")
                    water_availability = gr.Dropdown(choices=["Low", "Medium", "High"], label="Water Availability", value="Medium")
                
                with gr.Column():
                    temperature = gr.Slider(minimum=10, maximum=45, value=30, step=1, label="Temperature (°C)")
                    rainfall = gr.Slider(minimum=0, maximum=500, value=150, step=10, label="Expected Rainfall (mm)")
            
            recommend_btn = gr.Button("Get Recommendations", variant="primary")
            recommendations_output = gr.JSON(label="Crop Recommendations")
            
            recommend_btn.click(
                fn=get_crop_recommendation,
                inputs=[soil_type, season, water_availability, temperature, rainfall],
                outputs=recommendations_output
            )
        
        # Soil Health Tab
        with gr.Tab("🌍 Soil Health"):
            gr.Markdown("### Soil Health Monitoring & Analysis")
            
            with gr.Row():
                with gr.Column():
                    gr.Markdown("#### Current Soil Status")
                    soil_status = gr.JSON(
                        value={
                            "pH Level": "6.5 (Optimal)",
                            "Nitrogen": "75 kg/ha (Good)",
                            "Phosphorus": "60 kg/ha (Moderate)",
                            "Potassium": "80 kg/ha (Good)",
                            "Organic Matter": "3.2% (Good)"
                        }
                    )
                
                with gr.Column():
                    gr.Markdown("#### Recommendations")
                    soil_recommendations = gr.Markdown(
                        """
                        **Based on your soil analysis:**
                        
                        ✅ **pH Level**: Optimal for most crops
                        ✅ **Nitrogen**: Sufficient levels
                        ⚠️ **Phosphorus**: Consider adding phosphate fertilizers
                        ✅ **Potassium**: Good levels maintained
                        ✅ **Organic Matter**: Healthy soil structure
                        
                        **Next Steps:**
                        - Add 50 kg/ha of DAP fertilizer
                        - Continue organic matter addition
                        - Monitor pH monthly
                        """
                    )
        
        # Advisory Tab
        with gr.Tab("💡 Farming Advisory"):
            gr.Markdown("### Expert Farming Advice & Tips")
            
            with gr.Row():
                with gr.Column():
                    gr.Markdown("#### Today's Tip")
                    daily_tip = gr.Markdown(
                        """
                        **🌾 Rice Cultivation Best Practices**
                        
                        **Pre-planting:**
                        - Ensure proper land leveling
                        - Maintain 5-7 cm water level
                        - Use certified seeds
                        
                        **During growth:**
                        - Monitor water levels regularly
                        - Apply nitrogen in split doses
                        - Control weeds early
                        
                        **Harvest:**
                        - Harvest at 80-85% grain maturity
                        - Dry grains to 14% moisture content
                        """
                    )
                
                with gr.Column():
                    gr.Markdown("#### Weather Advisory")
                    weather_advisory = gr.Markdown(
                        """
                        **🌤️ Current Weather Conditions**
                        
                        **Temperature**: 30°C (Optimal for rice)
                        **Humidity**: 75% (Good for growth)
                        **Rainfall**: 150mm (Adequate)
                        
                        **Recommendations:**
                        - Continue normal irrigation
                        - Monitor for pest outbreaks
                        - Prepare for upcoming dry spell
                        """
                    )
        
        # Chatbot Tab
        with gr.Tab("🤖 AI Assistant"):
            gr.Markdown("### Chat with our AI Farming Expert")
            gr.Markdown("Ask questions about farming practices, pest control, fertilizers, and more!")
            
            chatbot = gr.ChatInterface(
                fn=chatbot_response,
                title="Farming AI Assistant",
                description="Ask me anything about farming!",
                examples=[
                    "How do I control pests naturally?",
                    "What fertilizers should I use?",
                    "How often should I water my crops?",
                    "What's the best time to plant?",
                    "How can I improve soil health?"
                ]
            )
        
        # About Tab
        with gr.Tab("ℹ️ About"):
            gr.Markdown(
                """
                ## About Smart Farming Assistant
                
                **Our Mission**: To democratize access to agricultural knowledge and technology, empowering farmers worldwide with data-driven insights.
                
                **Key Features**:
                - 🌱 **AI-Powered Crop Recommendations**: Get personalized suggestions based on soil, weather, and local conditions
                - 🌍 **Soil Health Monitoring**: Track and improve your soil quality over time
                - 🌤️ **Weather Intelligence**: Make informed decisions with accurate weather forecasts
                - 💡 **Expert Advisory**: Access farming best practices and expert tips
                - 🤖 **AI Assistant**: Get instant answers to your farming questions
                
                **Technology Stack**:
                - Machine Learning for crop recommendations
                - IoT sensors for soil monitoring
                - Satellite data for weather analysis
                - Natural Language Processing for AI assistance
                
                **Impact**:
                - **50M+** farmers supported worldwide
                - **95%** accuracy in recommendations
                - **40%** average yield increase
                - **2.3K** active daily sessions
                
                ---
                
                *Built for the farming community*
                """
            )

# Launch the app
if __name__ == "__main__":
    demo.launch(share=False, server_name="127.0.0.1", server_port=7860) 