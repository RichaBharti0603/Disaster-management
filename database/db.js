const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const isProduction = process.env.NODE_ENV === "production";

const sequelize = new Sequelize(
    isProduction ? process.env.DB_NAME : "database/db.sqlite",
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: isProduction ? "postgres" : "sqlite",
        storage: isProduction ? undefined : "database/db.sqlite",
        logging: false
    }
);

module.exports = sequelize;
