import mongoose from "mongoose";

const conncetDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);

    console.log(`connected on :  ${connection.connection.host}`);
  } catch (error) {
    console.error(`error connection:  ${error.message}`);
    process.exit(1); // if we want make it success we do 0 or normal exit maybe
  }
};

export default conncetDb;
