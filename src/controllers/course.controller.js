import CourseRepo from "../repository/course.repository.js";

class CourseController {
  async index(req, res, next) {
    try {
      const courses = await CourseRepo.getPublished();
      return res.status(200).json({
        success: true,
        count: courses.length,
        data: courses,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new CourseController();
