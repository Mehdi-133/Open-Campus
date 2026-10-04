import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "Open Campus API",
      version: "1.0.0",
      description:
        "REST API documentation for the Open Campus LMS course catalogue.",
    },

    servers: [
      {
        url: "http://localhost:3000",
        description: "Local development server",
      },
    ],

    tags: [
      {
        name: "Courses",
        description: "Published course catalogue endpoints",
      },
      {
        name: "Modules",
        description: "Course module and resource endpoints",
      },
      {
        name: "System",
        description: "API system endpoints",
      },
    ],

    components: {
      schemas: {
        Course: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              example: "68d37d45af7dcdb4c82f4585",
            },
            title: {
              type: "string",
              example: "JavaScript Fundamentals",
            },
            shortDescription: {
              type: "string",
              example: "Learn the foundations of modern JavaScript.",
            },
            description: {
              type: "string",
              example:
                "A beginner-friendly course covering the essential concepts of JavaScript.",
            },
            objectives: {
              type: "array",
              items: {
                type: "string",
              },
            },
            prerequisites: {
              type: "array",
              items: {
                type: "string",
              },
            },
            level: {
              type: "string",
              example: "beginner",
            },
            category: {
              type: "string",
              example: "Web Development",
            },
            estimatedDuration: {
              type: "number",
              example: 12,
            },
            status: {
              type: "string",
              enum: ["draft", "published"],
              example: "published",
            },
            trainerId: {
              type: "string",
              nullable: true,
            },
            publishedAt: {
              type: "string",
              format: "date-time",
              nullable: true,
            },
            createdAt: {
              type: "string",
              format: "date-time",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
            },
          },
        },

        Module: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              example: "68d37d45af7dcdb4c82f4586",
            },
            courseId: {
              type: "string",
              example: "68d37d45af7dcdb4c82f4585",
            },
            title: {
              type: "string",
              example: "JavaScript Basics",
            },
            description: {
              type: "string",
              example: "Introduction to JavaScript syntax and variables.",
            },
            order: {
              type: "integer",
              example: 1,
            },
            estimatedDuration: {
              type: "number",
              example: 3,
            },
            status: {
              type: "string",
              enum: ["draft", "published"],
              example: "published",
            },
            createdAt: {
              type: "string",
              format: "date-time",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
            },
          },
        },

        Resource: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              example: "68d37d45af7dcdb4c82f4587",
            },
            moduleId: {
              type: "string",
              example: "68d37d45af7dcdb4c82f4586",
            },
            title: {
              type: "string",
              example: "Variables and Data Types",
            },
            type: {
              type: "string",
              example: "video",
            },
            url: {
              type: "string",
              nullable: true,
              example: "https://example.com/javascript-variables",
            },
            fileReference: {
              type: "string",
              nullable: true,
            },
            description: {
              type: "string",
            },
            originalFilename: {
              type: "string",
              nullable: true,
            },
            fileSize: {
              type: "number",
              nullable: true,
            },
            estimatedDuration: {
              type: "number",
              nullable: true,
            },
            order: {
              type: "integer",
              example: 1,
            },
            createdAt: {
              type: "string",
              format: "date-time",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
            },
          },
        },

        Error: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: false,
            },
            message: {
              type: "string",
              example: "Resource not found",
            },
          },
        },
      },
    },
  },

  apis: ["./src/app.js", "./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
