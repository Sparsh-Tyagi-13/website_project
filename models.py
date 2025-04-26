from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    resume = db.Column(db.String(200), nullable=True)  # Path to the resume file
    category = db.Column(db.String(50), nullable=False)
    working_hours = db.Column(db.String(50), nullable=False)
    work_type = db.Column(db.String(50), nullable=False)
    salary = db.Column(db.String(50), nullable=False)
    location = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f'<User {self.name}>'
