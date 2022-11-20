const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  dbUrl: process.env.APP_BASE_URL || "http://jsonplaceholder.typicode.com",
};
