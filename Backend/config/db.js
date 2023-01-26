const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongodb connected: ${conn.connection.host}`);
  } catch (e) {
    console.log(`Error: ${e}`);
  }
};

module.exports = connectDb;
