# backend/app.py
from flask import Flask, request, jsonify
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required
from models import User, db
from database import init_db

app = Flask(__name__)

# Secret Key for JWT
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'  # Change this to a secure key

# Initialize Bcrypt and JWTManager
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

# Initialize Database
init_db(app)

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    # Ensure all fields are provided
    if not data.get('email') or not data.get('password') or not data.get('name'):
        return jsonify({"msg": "Missing required fields"}), 400

    # Check if user already exists
    user = User.query.filter_by(email=data['email']).first()
    if user:
        return jsonify({"msg": "User already exists"}), 400

    # Hash the password
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')

    # Create new user
    new_user = User(name=data['name'], email=data['email'], password=hashed_password)

    # Add to the database
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"msg": "User created successfully"}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    # Ensure all fields are provided
    if not data.get('email') or not data.get('password'):
        return jsonify({"msg": "Missing required fields"}), 400

    # Check if user exists
    user = User.query.filter_by(email=data['email']).first()
    if not user or not bcrypt.check_password_hash(user.password, data['password']):
        return jsonify({"msg": "Invalid credentials"}), 401

    # Create JWT token
    access_token = create_access_token(identity=user.id)

    return jsonify(access_token=access_token), 200

@app.route('/dashboard', methods=['GET'])
@jwt_required()
def dashboard():
    return jsonify(msg="Welcome to your dashboard!")

if __name__ == '__main__':
    app.run(debug=True)
