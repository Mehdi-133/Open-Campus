import Module from "../models/Module.module.js";
import Resource from "../models/Resource.module.js";

class ModuleRepo {
  async getPublishedById(moduleId) {
    return Module.findOne({
      _id: moduleId,
      status: "published",
    });
  }

  async getResourcesByModuleId(moduleId) {
    return Resource.find({
      moduleId: moduleId,
    }).sort({ order: 1 });
  }
}

export default new ModuleRepo();