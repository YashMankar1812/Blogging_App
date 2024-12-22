const mongoose = require("mongoose");

const startServer = async () => {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to the database successfully");
    return dbConnection;
  } catch (error) {
    console.error("Error connecting to the DB", error);
  }
};

module.exports = { startServer };

