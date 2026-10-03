
import Course from "../models/Course.module.js";

class CourseRepo {
  async getPublished() {
    return  Course.find({status: "published"});
  }
}

export default new CourseRepo();
