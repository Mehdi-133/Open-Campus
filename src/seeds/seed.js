import "dotenv/config";
import mongoose from "mongoose";

import connectDb from "../config/db.js";

import Course from "../models/Course.module.js";
import Module from "../models/Module.module.js";
import Resource from "../models/Resource.module.js";

import courses from "./data/courses.js";
import modules from "./data/modules.js";
import resources from "./data/resources.js";

const seedData = async () => {
  try {
    await connectDb();

    const coursesToSeed = courses.map(({ key, ...course }) => course);
    const seedCourse = await Course.insertMany(coursesToSeed);
    console.log(`course seed success ${seedCourse.length}`);

    const courseIdMap = new Map(
      courses.map((course, index) => [course.key, seedCourse[index]._id]),
    );

    const modulesToSeed = modules.map(({ key, courseKey, ...module }) => {
      const courseId = courseIdMap.get(courseKey);

      if (!courseId) {
        throw new Error(`Course key "${courseKey}" was not found`);
      }

      return { ...module, courseId };
    });

    const seedModule = await Module.insertMany(modulesToSeed);
    console.log(`module seed success ${seedModule.length}`);

    const moduleIdMap = new Map(
      modules.map((module, index) => [module.key, seedModule[index]._id]),
    );

    const resourcesToSeed = resources.map(({ moduleKey, ...resource }) => {
      const moduleId = moduleIdMap.get(moduleKey);

      if (!moduleId) {
        throw new Error(`Module key "${moduleKey}" was not found`);
      }

      return { ...resource, moduleId };
    });

    const seedResource = await Resource.insertMany(resourcesToSeed);
    console.log(`resource seed success ${seedResource.length}`);
  } catch (error) {
    console.error(`There was an issue while seeding: ${error.message}`);
    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();
  }
};

seedData();
