import express from "express";
import CourseController from "../controllers/Course.controller.js";

const courseRoute = express.Router();

courseRoute.get("/", CourseController.index);
courseRoute.get("/:courseId", CourseController.show);
courseRoute.get("/:courseId/modules", CourseController.modules);

export default courseRoute;
