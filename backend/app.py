from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from routes import setup_routes

app = Flask(__name__)
CORS(app)

# Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tech_trends.db'
app.config['SECRET_KEY'] = 'your-secret-key'

# Database
db = SQLAlchemy(app)

# Setup routes
setup_routes(app)

if __name__ == '__main__':
    app.run(debug=True)
