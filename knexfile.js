// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/cars.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  test: {
    client: "sqlite3",
    connection: {
      filename: "./data/cars-test.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations-test",
    },
    seeds: {
      directory: "./data/seeds-test",
    },
  },
};
