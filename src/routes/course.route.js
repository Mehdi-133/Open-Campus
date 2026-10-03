import express from "express";
import CourseController from "../controllers/Course.controller.js";

const courseRoute = express.Router();

courseRoute.get("/", CourseController.index);

export default courseRoute;
