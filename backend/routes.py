from flask import request, jsonify
from models import User, TrendData
from app import db

def setup_routes(app):

    # Login route
    @app.route('/login', methods=['POST'])
    def login():
        data = request.get_json()
        user = User.query.filter_by(username=data['username'], password=data['password']).first()
        if user:
            return jsonify({"message": "Login successful", "role": user.role})
        return jsonify({"message": "Invalid credentials"}), 401

    # Data fetching route
    @app.route('/get_trends', methods=['GET'])
    def get_trends():
        industry = request.args.get('industry')
        trends = TrendData.query.filter_by(industry=industry).all()
        return jsonify([{"year": t.year, "consumption": t.consumption} for t in trends])

    # Admin route to add data
    @app.route('/add_trend', methods=['POST'])
    def add_trend():
        data = request.get_json()
        new_trend = TrendData(industry=data['industry'], year=data['year'], consumption=data['consumption'])
        db.session.add(new_trend)
        db.session.commit()
        return jsonify({"message": "Trend added successfully"})
