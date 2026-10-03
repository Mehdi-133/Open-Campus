import express from "express";
import ModuleController from "../controllers/module.controller.js";

const moduleRoute = express.Router();

moduleRoute.get("/:moduleId/resources", ModuleController.resources);

export default moduleRoute;
