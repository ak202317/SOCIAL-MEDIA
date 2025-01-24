const mongoose = require("mongoose");

module.exports = async() => {
  const mongoUri = 'mongodb+srv://megabyte388:yzQAPAxHu9dX9lfb@cluster1.w1346.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1'
  
  try {
    const connect = await mongoose.connect(mongoUri);
    console.log("successfully connected MongoDb");

    // console.log("Mongo Connected.........", connect.connection.host);
    console.log(`MongoDB connected: ${connect.connection.host}`);

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};