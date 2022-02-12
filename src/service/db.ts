import mongoose from "mongoose";

let uri = "mongodb://localhost:27017/{app}";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to mongodb");
  } catch (err) {
    console.log("Error while connecting to DB");
    console.log(err);
  }
};

export default {
  connect,
};
