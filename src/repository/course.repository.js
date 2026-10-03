import Course from "../models/Course.module.js";
import Module from "../models/Module.module.js";

class CourseRepo {
  async getPublished() {
    return Course.find({ status: "published" });
  }

  async getPublishedById(courseId) {
    return Course.findOne({
      _id: courseId,
      status: "published",
    });
  }

    async getModulesByCourseId(courseId) {
    return Module.find({
      courseId: courseId,
      status: "published",
    }).sort({ order: 1 });
  }
}


export default new CourseRepo();
