import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";
import courseRoute from "./routes/Course.route.js";
import moduleRoute from "./routes/module.route.js";

const app = express();

app.use(express.json());

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Check API health
 *     description: Confirms that the Open Campus API is running.
 *     tags:
 *       - System
 *     responses:
 *       200:
 *         description: API is running
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 */
app.get("/health", (_request, response) => {
  response.json({ status: "ok" });
});

/**
 * @swagger
 * /api/test/not-found:
 *   get:
 *     summary: Test 404 - Route Not Found
 *     description: This URL is intentionally not registered as an Express route. Use Try it out to verify the global notFound and errorHandler middleware response.
 *     tags:
 *       - System
 *     responses:
 *       404:
 *         description: Route not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               success: false
 *               message: not found /api/test/not-found
 */
app.use("/api/courses", courseRoute);
app.use("/api/modules", moduleRoute);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(notFound);
app.use(errorHandler);

export default app;
