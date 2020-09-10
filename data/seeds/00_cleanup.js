// Import knex cleaner
const cleaner = require("knex-cleaner");

// Export cleaned seeds
exports.seed = function (knex) {
    // Clean seeds
    return cleaner.clean(knex, {
        ignoreTables: ["knex_migrations", "knex_migrations_lock"] // don't empty migration tables
    });
};