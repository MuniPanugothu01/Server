const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("mongoDB connected!")
    );
    console.log("MongoDB URI:", process.env.MONGO_DB_URL); // Add this
    await mongoose.connect(`${process.env.MONGO_DB_URL}`);
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = {
  connectDB,
};
