// Import express
const express = require('express');
// Initiate router
const router = express.Router()
// Import project helper
const Projects = require('../projectHelper')


// Get all projects
router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' });
        });
});

// Get all resources
router.get('/resources', (req, res) => {
    Projects.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get resources' });
        });
});

// Get all tasks
router.get('/tasks', (req, res) => {

    Projects.getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks' });
        });
});

// Get single project by id
router.get('/:id', (req, res) => {
    const { id } = req.params;

    Projects.findById(id)
        .then(project => {
            if (project) {
                res.json(scheme);
            } else {
                res.status(404).json({ message: 'Could not find project with given id.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get project' });
        });
});

// Post a new project
router.post('/', (req, res) => {
    const projectData = req.body;

    Projects.addProject(projectData)
        .then(newProject => {
            res.status(201).json(newProject);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new project' });
        });
});

// Post a new task
router.post('/tasks', (req, res) => {
    const taskData = req.body;

    Projects.addTask(taskData)
        .then(newTask => {
            res.status(201).json(newTask);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new task' });
        });
});

// Post a new resource
router.post('/resources', (req, res) => {
    const resourceData = req.body;

    Projects.addResource(resourceData)
        .then(newResource => {
            res.status(201).json(newResource);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new resource' });
        });
});

// Export the router
module.exports = router