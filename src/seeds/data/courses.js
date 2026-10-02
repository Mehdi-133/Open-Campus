const courses = [
  {
    key: "javascript",
    title: "JavaScript Fundamentals",
    shortDescription: "Learn the foundations of modern JavaScript.",
    description:
      "A beginner-friendly course covering the essential concepts of JavaScript for web development.",

    objectives: [
      "Understand JavaScript syntax",
      "Work with arrays and objects",
      "Use functions effectively",
      "Understand asynchronous JavaScript",
    ],

    prerequisites: [
      "Basic HTML knowledge",
      "Basic programming concepts",
    ],

    level: "beginner",
    category: "Web Development",
    estimatedDuration: 12,

    status: "published",

    publishedAt: new Date("2026-09-20"),
  },

  {
    key: "nodejs",
    title: "Node.js Backend Development",
    shortDescription: "Build backend applications using Node.js.",
    description:
      "Learn how to build backend applications and APIs using Node.js and Express.",

    objectives: [
      "Understand Node.js",
      "Build REST APIs with Express",
      "Work with asynchronous operations",
      "Connect an application to MongoDB",
    ],

    prerequisites: [
      "JavaScript fundamentals",
      "Basic understanding of HTTP",
    ],

    level: "intermediate",
    category: "Backend Development",
    estimatedDuration: 18,

    status: "published",

    publishedAt: new Date("2026-09-25"),
  },

  {
    key: "mongodb",
    title: "Advanced MongoDB",
    shortDescription: "Explore advanced MongoDB concepts.",
    description:
      "An advanced course covering MongoDB optimization, indexing and data modeling.",

    objectives: [
      "Design MongoDB data models",
      "Understand indexes",
      "Optimize database queries",
    ],

    prerequisites: [
      "MongoDB fundamentals",
      "Node.js fundamentals",
    ],

    level: "advanced",
    category: "Database",
    estimatedDuration: 15,

    status: "draft",

    publishedAt: null,
  },
];

export default courses;
