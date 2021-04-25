require("dotenv").config();

const {
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_PORT,
  DEV_DB,
  PROD_DB,
  TEST_DB,
} = process.env;

module.exports = {
  development_var: {
    use_env_variable: "${DATABASE_URL}",
  },
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DEV_DB,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: TEST_DB,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: PROD_DB,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
  },
};

// module.exports = config.js;