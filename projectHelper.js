// Import db config file
const db = require("./data/dbConfig")

// Export helper functions
module.exports = {
    getProjects,
    getResources,
    getTasks,
    addTask,
    addProject,
    addResource,
    findById
}

// Get the projects db
function getProjects() {
    return db('projects')
}

// Get tasks by id
function getTasks(id) {
    if (!id) {
        return db('tasks')
            .join('projects', 'tasks.projectId', "=", 'projects.id')
            .select('tasks.task', 'projects.project', 'projects.projectDescription')

    }
    return db('tasks')
        .join('projects', 'tasks.projectId', "=", 'projects.id')
        .select('tasks.task', 'projects.project', 'projects.projectDescription')
        .where({ projectId: id })
}

// Get all resources
function getResources() {
    return db('resources')
}

// Find project by id
function findById(id) {
    return db("projects")
        .where({ id })
        .first();
}

// POST new project
function addProject(newProject) {
    return db("projects")
        .insert(newProject)
        .then(ids => {
            return findById(ids[0]);
        });
}

// POST new task
function addTask(newTask) {
    return db("tasks")
        .insert(newTask)
        .then(ids => {
            return findById(ids[0]);
        });
}

// POST new resource
function addResource(newResource) {
    return db("resources")
        .insert(newResource)
        .then(ids => {
            return findById(ids[0]);
        });
}