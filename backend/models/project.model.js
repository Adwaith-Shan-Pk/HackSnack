const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true 
    },
    slug: {
        type: String,
        required: true,
        unique: true, 
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String, 
        required: true
    },
    imageUrl: {
        type: String,
        required: false 
    },
    tags: {
        type: [String], 
        default: []
    },
    liveUrl: {
        type: String, 
        required: false
    },
    githubUrl: {
        type: String, 
        required: false
    },
}, {
    
    timestamps: true
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
