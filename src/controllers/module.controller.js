import mongoose from "mongoose";
import ModuleRepo from "../repository/module.repository.js";

class ModuleController {
  async resources(req, res, next) {
    try {
      const { moduleId } = req.params;

      if (!mongoose.isValidObjectId(moduleId)) {
        return res.status(400).json({
          success: false,
          message: "invalid module ID",
        });
      }

      const module = await ModuleRepo.getPublishedById(moduleId);

      if (!module) {
        return res.status(404).json({
          success: false,
          message: "Module not found",
        });
      }

      const resources = await ModuleRepo.getResourcesByModuleId(moduleId);

      return res.status(200).json({
        success: true,
        count: resources.length,
        data: resources,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new ModuleController();
