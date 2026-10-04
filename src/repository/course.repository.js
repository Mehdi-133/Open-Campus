import Course from "../models/Course.module.js";
import Module from "../models/Module.module.js";

const escapeRegExp = (value) => {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

const allowedSortFields = ["createdAt", "publishedAt"];

class CourseRepo {
  async getPublished({
    category,
    level,
    keyword,
    sortBy,
    order = "desc",
  } = {}) {
    const filters = {
      status: "published",
    };

    if (category) {
      filters.category = category;
    }

    if (level) {
      filters.level = level;
    }

    if (typeof keyword === "string" && keyword.trim()) {
      const keywordPattern = new RegExp(escapeRegExp(keyword.trim()), "i");

      filters.$or = [
        { title: keywordPattern },
        { shortDescription: keywordPattern },
        { description: keywordPattern },
      ];
    }

    const query = Course.find(filters);

    if (allowedSortFields.includes(sortBy)) {
      const sortDirection = order === "asc" ? 1 : -1;
      query.sort({ [sortBy]: sortDirection });
    }

    return query;
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
