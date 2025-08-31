// Sample data seeding script for MongoDB using Mongoose
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/project.model'); 


dotenv.config();

const sampleProjects = [
    {
        title: "E-commerce Website",
        slug: "ecommerce-website",
        description: "A full-featured e-commerce platform built with the MERN stack.",
        "content": "This project includes user authentication, product catalog, shopping cart, and a checkout process. It leverages Redux for state management and Stripe for payments. The backend is a RESTful API built with Express and MongoDB.",
        imageUrl: "https://placehold.co/600x400/555/fff?text=E-Commerce",
        "tags": ["React", "Node.js", "MongoDB", "Stripe"],
        "liveUrl": "#",
        "githubUrl": "#"
    },
    {
        title: "Task Management App",
        slug: "task-management-app",
        description: "A simple and intuitive task manager to organize your daily workflow.",
        "content": "Users can create, update, delete, and mark tasks as complete. Features drag-and-drop functionality to reorder tasks. Built with React functional components and hooks. Data is persisted in MongoDB.",
        imageUrl: "https://placehold.co/600x400/333/fff?text=Task+App",
        "tags": ["React", "Express", "Mongoose"],
        "liveUrl": "#",
        "githubUrl": "#"
    },
    {
        title: "Personal Portfolio",
        slug: "personal-portfolio-react",
        description: "A dynamic and responsive personal portfolio to showcase my skills and projects.",
        "content": "This is the very project you're looking at! It's built with React and TailwindCSS for styling. It fetches project data from a custom Node.js API. Fully responsive and features a dark mode toggle.",
        imageUrl: "https://placehold.co/600x400/111/fff?text=Portfolio",
        "tags": ["React", "TailwindCSS", "UI/UX"],
        "liveUrl": "#",
        "githubUrl": "#"
    }
];

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected for seeding.");
    } catch (error) {
        console.error(`Error connecting to DB for seeding: ${error.message}`);
        process.exit(1);
    }
};

const importData = async () => {
    try {
        // Clear existing data
        await Project.deleteMany();
        // Insert new data
        await Project.insertMany(sampleProjects);

        console.log("Data successfully imported!");
        process.exit();
    } catch (error) {
        console.error(`Error importing data: ${error.message}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Project.deleteMany();
        console.log("Data successfully destroyed!");
        process.exit();
    } catch (error) {
        console.error(`Error destroying data: ${error.message}`);
        process.exit(1);
    }
};
connectDB().then(() => {
    // Check for command-line arguments
    if (process.argv[2] === '--destroy') {
        destroyData();
    } else {
        importData();
    }
});

