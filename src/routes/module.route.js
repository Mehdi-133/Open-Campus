import express from "express";
import ModuleController from "../controllers/module.controller.js";

const moduleRoute = express.Router();

/**
 * @swagger
 * /api/modules/{moduleId}/resources:
 *   get:
 *     summary: Get resources for a published module
 *     description: Returns the resources for a published module, ordered by their order field. Copy a module _id from GET /api/courses/{courseId}/modules to test this endpoint.
 *     tags:
 *       - Modules
 *     parameters:
 *       - in: path
 *         name: moduleId
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB module ID
 *         example: 68d37d45af7dcdb4c82f4586
 *     responses:
 *       200:
 *         description: Module resources retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 count:
 *                   type: integer
 *                   example: 2
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Resource'
 *       400:
 *         description: Invalid module ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Published module not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
moduleRoute.get("/:moduleId/resources", ModuleController.resources);

export default moduleRoute;
