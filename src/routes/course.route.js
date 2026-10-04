import express from "express";
import CourseController from "../controllers/Course.controller.js";

const courseRoute = express.Router();

/**
 * @swagger
 * /api/courses:
 *   get:
 *     summary: Get published courses
 *     description: |
 *       Returns published courses with optional filtering, keyword search, and date sorting.
 *
 *       **Postman test scenarios available here:**
 *
 *       1. **Published courses:** leave every query parameter empty.
 *       2. **By category:** set `category` to `Web Development`.
 *       3. **By level:** set `level` to `beginner`.
 *       4. **Category and level:** set both `category` and `level`.
 *       5. **Keyword search:** set `keyword` to `javascript`.
 *       6. **Search and filter:** set `keyword`, `category`, and `level` together.
 *       7. **No matching results:** set `keyword` to `unknown-course`.
 *       8. **Oldest first:** set `sortBy` to `createdAt` and `order` to `asc`.
 *       9. **Newest first:** set `sortBy` to `publishedAt` and `order` to `desc`.
 *
 *       Click **Try it out**, enter the values for one scenario, and click **Execute**.
 *     tags:
 *       - Courses
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         examples:
 *           categoryFilter:
 *             summary: Filter by category
 *             value: Web Development
 *         description: Filter courses by an exact category.
 *       - in: query
 *         name: level
 *         schema:
 *           type: string
 *         examples:
 *           levelFilter:
 *             summary: Filter by level
 *             value: beginner
 *         description: Filter courses by an exact level.
 *       - in: query
 *         name: keyword
 *         schema:
 *           type: string
 *         examples:
 *           matchingKeyword:
 *             summary: Matching keyword
 *             value: javascript
 *           noMatchingKeyword:
 *             summary: No matching results
 *             value: unknown-course
 *         description: Search course titles and descriptions. The search is case-insensitive.
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           enum:
 *             - createdAt
 *             - publishedAt
 *         examples:
 *           creationDate:
 *             summary: Sort by creation date
 *             value: createdAt
 *           publicationDate:
 *             summary: Sort by publication date
 *             value: publishedAt
 *         description: Select the creation or publication date for sorting.
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum:
 *             - asc
 *             - desc
 *           default: desc
 *         examples:
 *           oldestFirst:
 *             summary: Oldest first
 *             value: asc
 *           newestFirst:
 *             summary: Newest first
 *             value: desc
 *         description: Sort oldest first with asc or newest first with desc.
 *     responses:
 *       200:
 *         description: Published courses retrieved successfully
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
 *                     $ref: '#/components/schemas/Course'
 *             examples:
 *               publishedCourses:
 *                 summary: Published courses found
 *                 value:
 *                   success: true
 *                   count: 1
 *                   data:
 *                     - title: JavaScript Fundamentals
 *                       level: beginner
 *                       category: Web Development
 *                       status: published
 *               noMatchingResults:
 *                 summary: No matching results
 *                 value:
 *                   success: true
 *                   count: 0
 *                   data: []
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
courseRoute.get("/", CourseController.index);

/**
 * @swagger
 * /api/courses/{courseId}:
 *   get:
 *     summary: Get one published course
 *     description: Returns a published course by its MongoDB ID. Copy an _id from GET /api/courses to test this endpoint.
 *     tags:
 *       - Courses
 *     parameters:
 *       - in: path
 *         name: courseId
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB course ID
 *         example: 68d37d45af7dcdb4c82f4585
 *     responses:
 *       200:
 *         description: Published course retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Course'
 *       400:
 *         description: Invalid course ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Published course not found
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
courseRoute.get("/:courseId", CourseController.show);

/**
 * @swagger
 * /api/courses/{courseId}/modules:
 *   get:
 *     summary: Get modules for a published course
 *     description: Returns the published modules for a published course, ordered by their order field.
 *     tags:
 *       - Courses
 *       - Modules
 *     parameters:
 *       - in: path
 *         name: courseId
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB course ID
 *         example: 68d37d45af7dcdb4c82f4585
 *     responses:
 *       200:
 *         description: Published modules retrieved successfully
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
 *                     $ref: '#/components/schemas/Module'
 *       400:
 *         description: Invalid course ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Published course not found
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
courseRoute.get("/:courseId/modules", CourseController.modules);

export default courseRoute;
