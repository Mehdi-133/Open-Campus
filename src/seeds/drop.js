import "dotenv/config";
import mongoose from "mongoose";

import connectDb from "../config/db.js";

import Course from "../models/Course.module.js";
import Module from "../models/Module.module.js";
import Resource from "../models/Resource.module.js";

const dropData = async () => {
  try {
    await connectDb();

    await Resource.deleteMany();
    await Module.deleteMany();
    await Course.deleteMany();

    console.log("data dropped successfully");
  } catch (error) {
    console.error(`there was an issue while dropping data: ${error.message}`);
    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();
  }
};

dropData();
