import Course from "../models/Course.module.js";
import Module from "../models/Module.module.js";

class CourseRepo {
  async getPublished({ category, level } = {}) {
    const filters = {
      status: "published",
    };

    if (category) {
      filters.category = category;
    }

    if (level) {
      filters.level = level;
    }

    return Course.find(filters);
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
