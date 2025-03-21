const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
    logging: false, // Set to true for debugging SQL queries
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("✅ PostgreSQL connected successfully!");
    } catch (error) {
        console.error("❌ PostgreSQL connection error:", error);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };
