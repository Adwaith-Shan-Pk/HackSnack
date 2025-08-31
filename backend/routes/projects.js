const router = require('express').Router();
const Project = require('../models/project.model');

// --- GET ALL PROJECTS ---
// @route   GET /api/projects
// @desc    Get a list of all projects/blogs
// @access  Public
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (err) {
        console.error("Error fetching projects:", err.message);
        res.status(500).json({ message: 'Server Error: Could not fetch projects.' });
    }
});

// --- GET SINGLE PROJECT BY SLUG ---
// @route   GET /api/projects/:slug
// @desc    Get a single project/blog by its unique slug
// @access  Public
router.get('/:slug', async (req, res) => {
    try {
        const project = await Project.findOne({ slug: req.params.slug });

        if (!project) {
            return res.status(404).json({ message: 'Project not found.' });
        }

        res.json(project);
    } catch (err) {
        console.error(`Error fetching project with slug "${req.params.slug}":`, err.message);
        res.status(500).json({ message: 'Server Error: Could not fetch the project.' });
    }
});

module.exports = router;
