const mongoose = require("mongoose");
const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const isMongoDB = process.env.DB_TYPE === "mongodb";

let sequelize;

const connectDB = async () => {
    try {
        if (isMongoDB) {
            // MongoDB Connection
            await mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log("✅ MongoDB connected successfully");
        } else {
            // PostgreSQL Connection
            sequelize = new Sequelize(process.env.PG_URI, {
                dialect: "postgres",
                logging: false,
            });

            await sequelize.authenticate();
            console.log("✅ PostgreSQL connected successfully");
        }
    } catch (error) {
        console.error("❌ Database connection error:", error);
        process.exit(1);
    }
};

module.exports = { connectDB, sequelize, mongoose };
