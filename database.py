# backend/database.py
from flask_sqlalchemy import SQLAlchemy

# Initialize the database
db = SQLAlchemy()

def init_db(app):
    # Database configuration
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'  # Path to your SQLite DB file
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
