from flask import Flask, request, jsonify
import dialogflow_v2 as dialogflow

app = Flask(__name__)

@app.route('/chatbot', methods=['POST'])
def chatbot_response():
    data = request.get_json()
    user_message = data['message']
    
    # Dialogflow session setup
    session_client = dialogflow.SessionsClient()
    session = session_client.session_path('your-project-id', 'session-id')
    
    text_input = dialogflow.types.TextInput(text=user_message, language_code='en')
    query_input = dialogflow.types.QueryInput(text=text_input)
    
    response = session_client.detect_intent(session=session, query_input=query_input)
    chatbot_reply = response.query_result.fulfillment_text
    
    return jsonify({"reply": chatbot_reply})

if __name__ == '__main__':
    app.run(debug=True)
