# 🚀 MERN Stack Project & Blog Showcase  

A **full-stack application** designed to showcase personal projects or blog posts.  
Built with the **MERN stack (MongoDB, Express.js, React, Node.js)** and styled with **Tailwind CSS**, this project features a clean, modern, and fully responsive design.  

🔗 **Live Demo:** [https://hacksnack.shan.is-a.dev/](https://hacksnack.shan.is-a.dev/)  

---

## ✨ Features  

- **Component-Based Architecture** – Modular frontend built with React.  
- **RESTful API** – Robust backend powered by Node.js and Express.  
- **MongoDB Database** – Flexible and scalable NoSQL storage.  
- **Responsive Design** – Mobile-first UI with Tailwind CSS.  
- **CI/CD Pipeline** – Automatic deployments via Vercel on every push.  
- **Secure API** – CORS policy restricts API access to deployed frontend.  
- **Containerized (Optional)** – Docker & Docker Compose for easy self-hosting.  

---

## 🛠 Tech Stack  

**Frontend:**  
- React (Vite)  
- Tailwind CSS  
- JavaScript (ES6+)  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB (Mongoose)  

**Deployment & DevOps:**  
- Vercel (Frontend & Backend)  
- Docker & Docker Compose  

---

## ⚙️ Local Development Setup  

To run this project locally, ensure you have **Node.js** installed and either **MongoDB Atlas** or a local MongoDB instance.  

### 1. Clone the Repository  
```bash
git clone https://github.com/Adwaith-Shan-Pk/HackSnack
cd HackSnack

```
### 2. Backend Setup
```
cd backend
npm install
touch .env

PORT=5001
FRONTEND_URL=http://localhost:5173
npm run dev

The backend will be running at http://localhost:5001.
```
### 3. Frontend Setup
```
cd frontend

# Install dependencies
npm install

# Create a .env file in the 'frontend' directory
# and add the backend API URL
touch .env

frontend/.env file:

VITE_API_URL=http://localhost:5001

# Run the frontend development server
npm run dev

The frontend will be running at http://localhost:5173.
```

## Deployment on Vercel
This project is configured for easy deployment on Vercel as two separate projects (frontend and backend).

```Fork this repository to your own GitHub account.

Import Backend Project:

On Vercel, create a "New Project" and import your forked repository.

Set the Root Directory to backend.

Add your MONGO_URI and FRONTEND_URL as Environment Variables.

Deploy.

Import Frontend Project:

Create another "New Project" and import the same repository.

Set the Root Directory to frontend.

Add the VITE_API_URL environment variable, using your live backend's Vercel URL as the value.

Deploy.

Vercel will automatically handle CI/CD, redeploying your projects whenever you push a new commit.
```

## Self-Hosting with Docker
This project is fully containerized for easy self-hosting.

Ensure you have Docker and Docker Compose installed.

Clone the repository.
In the root directory, run the following command:

```
docker-compose up --build 
```
This will build the combined application image and start the app and mongo services. Your entire application will be accessible at http://localhost:5001.