# Disaster Management App

## Overview
The Disaster Management App is a comprehensive platform designed to provide real-time disaster alerts, connect users with shelters, facilitate donations through blockchain, and offer post-disaster resources. It integrates AI/ML for disaster prediction, real-time location tracking, and blockchain for transparent donation management.

## Features
- **Real-time Alerts:** Get notified about disasters based on historical data and real-time location tracking.
- **Shelter Locator:** Find government and NGO-run shelters quickly.
- **Donation System:** Secure blockchain-based donation tracking.
- **AI/ML Prediction:** Analyze disaster-prone areas for better preparedness.
- **Post-Disaster Support:** Access government policies and NGO resources for rehabilitation.

## Tech Stack
### Backend:
- **Node.js & Express.js** - Server-side framework for handling API requests.
- **MongoDB & Mongoose** - NoSQL database for storing user, alert, and shelter data.
- **Blockchain (Ethereum or Hyperledger)** - Secure, transparent donation management.
- **AI/ML (Python, TensorFlow, or Scikit-Learn)** - Disaster prediction models.
- **JWT Authentication** - Secure user authentication and authorization.

### Frontend:
- **React.js & Tailwind CSS** - Modern UI framework for a smooth user experience.
- **Leaflet.js / Google Maps API** - Interactive maps for shelter locations.

### DevOps & Deployment:
- **Docker & Kubernetes** - Containerized deployment for scalability.
- **AWS / Firebase / DigitalOcean** - Cloud hosting services.
- **CI/CD (GitHub Actions)** - Automating testing and deployment.

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB
- Python (for AI/ML models)

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/disaster-management.git
   cd disaster-management/backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables in `.env`:
   ```env
   MONGO_URI=mongodb://127.0.0.1:27017/disaster_management
   PORT=5000
   JWT_SECRET=your_secret_key
   ```
4. Start the server:
   ```sh
   node server.js
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## API Endpoints
### Authentication
- **POST** `/api/users/register` - Register a new user
- **POST** `/api/users/login` - Authenticate user

### Disaster Alerts
- **GET** `/api/alerts` - Fetch real-time alerts
- **POST** `/api/alerts` - Create a new alert

### Shelter Management
- **GET** `/api/shelters` - Get available shelters
- **POST** `/api/shelters` - Add a shelter

### Donations (Blockchain-Based)
- **GET** `/api/donations` - Fetch donation records
- **POST** `/api/donations` - Make a donation

## Contributors
Mudita Jain
Richa Bharti
Pritidarshani Biswal

