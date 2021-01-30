require("dotenv").config();
module.exports = {
  development: {
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    db_connection: process.env.DB_CONNECTION,
    dialect: "mysql"
  }
};
