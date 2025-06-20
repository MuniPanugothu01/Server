// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();
// const connectDB = async () => {
//   try {
//     mongoose.connection.on("connected", () =>
//       console.log("mongoDB connected!")
//     );
//     console.log("MongoDB URI:", process.env.MONGO_DB_URL); // Add this
//     await mongoose.connect(`${process.env.MONGO_DB_URL}`);
//   } catch (err) {
//     console.log(err.message);
//   }
// };
// module.exports = {
//   connectDB,
// };
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected successfully!");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); // Exit the process if the DB connection fails
  }
};

module.exports = {
  connectDB,
};
