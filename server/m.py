import google.generativeai as genai
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS


# Configure API Key - TODO: Move this to environment variable
# Use: export GOOGLE_API_KEY="your-api-key"
genai.configure(api_key="AIzaSyBLEg7pe65TJnh5q2f5geJ5SWzT7hHiAIs")

# Initialize chatbot model with the correct model name
model = genai.GenerativeModel(model_name='gemini-2.0-flash')
chat = model.start_chat()

# Flask app setup
app = Flask(__name__)
CORS(app)  # Enable CORS for frontend-backend communication

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get_response", methods=["POST"])
def get_response():
    user_input = request.json.get("message")

    if not user_input:
        return jsonify({"response": "Please enter a message."})

    try:
        
        response = chat.send_message(user_input)
        return jsonify({"response": response.text})
    except Exception as e:
        print(f"Error details: {str(e)}")  
        return jsonify({"response": f"Error: {str(e)}"})

if __name__ == "__main__":
    app.run(debug=True)