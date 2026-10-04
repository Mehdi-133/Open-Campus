import CourseRepo from "../repository/course.repository.js";
import mongoose from "mongoose";

class CourseController {
  async index(req, res, next) {
    try {
      const { category, level, keyword, sortBy, order } = req.query;
      const courses = await CourseRepo.getPublished({
        category,
        level,
        keyword,
        sortBy,
        order,
      });

      return res.status(200).json({
        success: true,
        count: courses.length,
        data: courses,
      });
    } catch (error) {
      next(error);
    }
  }

  async show(req, res, next) {
    try {
      const { courseId } = req.params;

      if (!mongoose.isValidObjectId(courseId)) {
        return res.status(400).json({
          success: false,
          message: "Invalid course ID",
        });
      }

      const course = await CourseRepo.getPublishedById(courseId);

      if (!course) {
        return res.status(404).json({
          success: false,
          message: "Course not found",
        });
      }

      return res.status(200).json({
        success: true,
        data: course,
      });
    } catch (error) {
      next(error);
    }
  }

  async modules(req, res, next) {
    try {
      const { courseId } = req.params;

      if (!mongoose.isValidObjectId(courseId)) {
        return res.status(400).json({
          success: false,
          message: "invalid course ID",
        });
      }

      const course = await CourseRepo.getPublishedById(courseId);

      if (!course) {
        return res.status(404).json({
          success: false,
          message: "Course not found",
        });
      }

      const modules = await CourseRepo.getModulesByCourseId(courseId);

      return res.status(200).json({
        success: true,
        count: modules.length,
        data: modules,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new CourseController();
