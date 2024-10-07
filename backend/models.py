from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(50), nullable=False)
    role = db.Column(db.String(20), nullable=False)  # 'user' or 'admin'

class TrendData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    industry = db.Column(db.String(100), nullable=False)
    year = db.Column(db.Integer, nullable=False)
    consumption = db.Column(db.Float, nullable=False)
