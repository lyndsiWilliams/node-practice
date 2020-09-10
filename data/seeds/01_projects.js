// Export seeds
exports.seed = function (knex, Promise) {
    // Create project seeds
    return knex("projects").insert([
        {
            project: "Project 1",
            projectDescription: "Project Description 1",
            completed: false
        },
        {
            project: "Project 2",
            projectDescription: "Project Description 2",
            completed: false
        },
        {
            project: "Project 3",
            projectDescription: "Project Description 3",
            completed: false
        }
    ]);
};