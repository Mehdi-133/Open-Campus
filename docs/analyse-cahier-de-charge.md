# Requirements Analysis — Open Campus

## 1. Project Context

Open Campus is a Learning Management System (LMS) backend project designed to centralize and organize learning content.

The complete platform aims to manage courses, modules, educational resources, users, enrollments, learner progress, quizzes, quiz attempts, and trainer feedback.

The backend must provide structured and consistent data that can later be consumed by a web interface.

This first brief does not require the complete LMS to be developed. Its purpose is to understand the global product, design its main structure, and establish the first backend foundation around the course catalogue.

---

## 2. Problem Statement

A learning platform needs more than a simple collection of educational resources.

Courses must be structured into modules, modules must contain organized resources, learners must eventually be able to enroll and track their progress, and trainers need a way to organize and supervise learning content.

Without a centralized system, learning content, learner progress, assessments, and access rules become difficult to manage consistently.

Open Campus aims to provide a structured backend capable of supporting these needs progressively.

---

## 3. Product Need

- **For whom?** Visitors, learners, trainers, and administrators.

- **What is the need?** Provide a centralized learning platform where courses and educational content can be organized, accessed, and progressively managed.

- **Why?** To make learning content structured and accessible while preparing the platform for enrollment, progress tracking, assessments, and trainer supervision.

The core learning structure is:

Course → Module → Resource

---

## 4. Objectives

### Product Objectives

- Centralize courses and learning paths.
- Organize courses into ordered modules.
- Associate educational resources with modules.
- Allow visitors to discover published courses.
- Support different user roles.
- Allow learners to enroll in multiple courses.
- Track learner progress.
- Provide module quizzes and record attempts.
- Allow trainers to follow learner progress.
- Provide data that can be consumed by a future web interface.

### Current Brief Objectives

- Analyze the complete LMS requirements.
- Identify actors, entities, relationships, and business rules.
- Create the main UML diagrams.
- Organize the work through a Scrum/Jira backlog.
- Build the first backend foundation using Node.js and Express.
- Connect the application to MongoDB using Mongoose.
- Implement the Course, Module, and Resource catalogue.
- Provide representative sample data.
- Allow public consultation of published courses.
- Implement course search, filtering, and sorting.
- Handle API errors consistently.
- Document and test the implemented API.

---

## 5. Users and Needs

| User | Core Need |
| :--- | :--- |
| **Visitor** | Browse published courses and understand the available learning offer without accessing protected content. |
| **Learner** | Enroll in courses, access authorized learning content, follow progress, and complete quizzes. |
| **Trainer** | Create and organize courses, modules, and resources, manage publication, follow learners, and provide feedback. |
| **Administrator** | Supervise users, roles, courses, and platform content. |

### Important Role Distinction

A **Visitor** is an unauthenticated actor and is not an account role.

The account roles are:

- `learner`
- `trainer`
- `admin`

---

## 6. Core Features

The complete Open Campus LMS is expected to support:

- Course catalogue.
- Detailed course information.
- Ordered course modules.
- Educational resources.
- Educational file resources.
- User accounts and authentication.
- Roles and permissions.
- Course enrollment.
- Learner progress tracking.
- Module quizzes.
- Quiz attempts and score calculation.
- Trainer feedback.
- Search, filtering, and sorting.
- Protected learning content.

---

## 7. Main Business Entities

The global LMS contains the following main entities:

### User

Represents a registered person using the platform.

Important information includes:

- full name;
- unique email;
- secured password;
- role;
- account status;
- creation date.

### Course

Represents a learning path.

Important information includes:

- title;
- description;
- objectives;
- prerequisites;
- level;
- category;
- estimated duration;
- publication status;
- responsible trainer;
- creation/publication dates.

### Module

Represents an ordered learning step inside a course.

Important information includes:

- title;
- description;
- order;
- estimated duration;
- status;
- associated course.

### Resource

Represents educational content belonging to a module.

Important information includes:

- title;
- type;
- URL or storage reference;
- description;
- original filename when applicable;
- file size when applicable;
- estimated duration;
- display order;
- associated module.

### Enrollment

Represents the relationship between a learner and a course.

Important information includes:

- learner;
- course;
- enrollment date;
- status;
- global progress.

### Progress

Represents a learner's advancement through learning content.

Important information includes:

- learner;
- course;
- module;
- optional resource;
- status;
- start date;
- completion date.

### Quiz

Represents an assessment associated with a module.

Important information includes:

- module;
- title;
- questions;
- answer choices;
- correct answers;
- minimum score;
- status.

### QuizAttempt

Represents a learner's submission of a quiz.

Important information includes:

- learner;
- quiz;
- submitted answers;
- score;
- result;
- submission date.

### Feedback

Represents feedback given by a trainer about a learner.

Important information includes:

- trainer;
- learner;
- course;
- content;
- creation date.

---

## 8. Main Relationships

The main relationships identified from the requirements are:

- A trainer can be responsible for courses.
- A course belongs to one responsible trainer.
- A course contains one or more modules.
- A module belongs to one course.
- A module contains educational resources.
- A resource belongs to one module.
- A module may contain a quiz.
- A learner can enroll in multiple courses.
- An enrollment connects a learner to a course.
- Progress connects a learner to their learning activity.
- A learner can make quiz attempts.
- A quiz attempt belongs to a learner and a quiz.
- A trainer can provide feedback about a learner in the context of a course.

The exact cardinalities must be validated during the class diagram design.

---

## 9. Business Rules

The main business rules identified are:

- A user has one main role.
- A user's email must be unique.
- Passwords must never be stored in plain text.
- A course belongs to a responsible trainer.
- A course can be `draft` or `published`.
- Only published courses are publicly visible.
- A course contains one or more modules.
- Modules are ordered inside their course.
- A resource belongs to one module.
- Resources have an explicit display order.
- A learner can enroll in several published courses.
- A learner cannot have two active enrollments for the same course.
- Learner progress must be calculated by the backend.
- A module may contain a quiz.
- A quiz attempt belongs to a learner and a quiz.
- Correct quiz answers must not be exposed to learners.
- Trainers manage data related to their own courses.
- Administrators have broader supervision permissions.
- API errors must follow a consistent JSON structure.
- Private content must not be publicly exposed without authorization.

---

## 10. Current Brief Scope

The global requirements describe the complete Open Campus product.

The current brief focuses on the first technical foundation and does not require the complete LMS to be implemented.

### Included — Implementation

The current implementation focuses on:

- Node.js and Express backend foundation.
- MongoDB connection using Mongoose.
- Course model.
- Module model.
- Resource model.
- Representative sample data.
- Public catalogue of published courses.
- Published course details.
- Course modules.
- Module resources.
- Category filtering.
- Level filtering.
- Keyword search.
- Creation/publication date sorting.
- API error handling.
- API testing.
- Docker-based MongoDB environment.
- Project and API documentation.

The main implemented data scope is:

Course → Module → Resource

### Included — Design Only

The following concepts must be considered during UML conception so the global LMS structure is understood:

- User.
- Enrollment.
- Progress.
- Quiz.
- QuizAttempt.
- Feedback.
- Authentication and roles.
- Trainer ownership.
- Learner access rules.

They should be designed now but not automatically implemented during this brief.

### Future Implementation

The following functionality should be postponed until a future brief requires it:

- complete authentication;
- authorization;
- user management;
- learner enrollment;
- learner progress tracking;
- quizzes;
- quiz attempts;
- trainer feedback;
- complete trainer management;
- administration features;
- protected learner spaces.

---

## 11. Out of Scope

The global specifications explicitly exclude:

- complete React interface;
- advanced graphical interface;
- video streaming;
- payment;
- official certificates;
- real-time messaging;
- email notifications;
- videoconferencing;
- recommendation engine;
- advanced analytics;
- external platform integration;
- detailed infrastructure architecture.

These features should not be implemented as part of the current project scope.

---

## 12. Current API Needs

The first API should support the public course catalogue.

Expected public operations include:

### Browse Published Courses

`GET /api/courses`

Allows visitors to retrieve published courses.

The catalogue should support:

- category filtering;
- level filtering;
- keyword search;
- date sorting.

### View Course Details

`GET /api/courses/:courseId`

Allows a visitor to retrieve the details of a published course.

### View Course Modules

`GET /api/courses/:courseId/modules`

Allows the modules of a course to be retrieved in their defined order.

### View Module Resources

`GET /api/modules/:moduleId/resources`

Allows the resources of a module to be retrieved in their defined order.

The exact API contract should be finalized during API design and documented according to the actual implementation.

---

## 13. UML Needs

The current conception requires three main diagrams.

### Class Diagram

Purpose:

Understand the static structure of the complete LMS.

It should identify:

- entities;
- important attributes;
- relationships;
- cardinalities.

### Use Case Diagram

Purpose:

Understand the interactions between Open Campus and its actors:

- Visitor;
- Learner;
- Trainer;
- Administrator.

### Course Consultation Sequence Diagram

Purpose:

Understand the interaction flow when a visitor requests course information from the API.

These diagrams should help connect the business requirements to the future backend implementation.

---

## 14. Important Technical Decisions

### Course, Module, and Resource

The current design direction is to represent Course, Module, and Resource separately.

Conceptually:

Course
  ↓
Module
  ↓
Resource

The exact MongoDB/Mongoose representation should be decided after validating the UML relationships.

### References vs Embedding

MongoDB allows related data to be embedded or referenced.

This decision should not be made only because one solution is easier to code.

The decision should consider:

- relationships;
- lifecycle;
- access patterns;
- update frequency;
- ordering;
- future permissions.

### Global Design vs Current Implementation

The UML should represent the global LMS.

The code should represent only the current implementation scope.

This distinction prevents both under-designing the product and overengineering the first brief.

---

## 15. Questions / Points to Clarify

### Resource Visibility

The global requirements distinguish public and protected content.

**Question:** Which module resources should be publicly accessible during the current brief before authentication and authorization are implemented?

This must be clarified before claiming that protected resources are securely handled.

### Trainer Reference

A course belongs to a responsible trainer.

**Question:** How should the current Course implementation represent its trainer while the User/authentication functionality is not yet implemented?

The UML can represent the complete relationship, but the temporary implementation needs a clear decision.

### Module Order

Modules are explicitly ordered.

**Question:** Can two modules inside the same course have the same `order`, or must the order be unique within a course?

### Resource Order

Resources are also ordered.

**Question:** Can two resources inside the same module share the same `order`, or should the order be unique within a module?

### Publication Date

Courses must support sorting by creation or publication date.

**Question:** Should `publishedAt` only receive a value when a course becomes published, while `createdAt` is generated when the course is created?

### File Upload

The global LMS requires real file uploads and protected file access.

**Question:** Which future realization brief will require the actual upload/storage implementation?

For the current conception, Resource should prepare the required file metadata without implementing functionality outside the current brief.

---

## 16. Risks

### Scope Creep

The global cahier des charges describes many features.

The main risk is attempting to implement the entire LMS during the first brief.

**Decision:** Design globally, implement only the current brief.

### Premature Technical Decisions

Starting directly with Mongoose schemas could cause the database structure to dictate the business model.

**Decision:** Understand relationships and cardinalities through UML before finalizing MongoDB models.

### Protected Content Without Authentication

The global product includes private learner content, but the current catalogue does not yet implement complete authentication.

**Decision:** Do not claim protected access exists until authorization is actually implemented.

### Overengineering

Adding unnecessary architecture or patterns could increase complexity without helping the brief.

**Decision:** Use the simplest architecture that correctly satisfies the requirements and remains understandable.

---

## 17. Current Project Status

| Area | Status |
| :--- | :--- |
| Requirements analysis | Done |
| Jira backlog | Done |
| User Stories | Done |
| Tasks | Done |
| Class diagram | In progress |
| Use case diagram | Not started |
| Sequence diagram | Not started |
| Express backend | Not started |
| MongoDB / Mongoose | Not started |
| Seed data | Not started |
| Catalogue API | Not started |
| Search / Filter / Sort | Not started |
| Error handling | Not started |
| Docker | Not started |
| API testing | Not started |
| API documentation | Not started |

---

## Conclusion

Open Campus is an LMS backend designed to provide a structured foundation for managing learning content and, progressively, users, enrollments, progress, assessments, and trainer supervision.

The global product is centered around the relationships between users, courses, modules, resources, enrollments, progress, quizzes, quiz attempts, and feedback.

The current brief intentionally focuses on a smaller technical scope:

**Course → Module → Resource**

The objective is to first understand and design the complete LMS through requirements analysis and UML, then implement a clean Express/MongoDB catalogue API supporting published courses, course details, ordered modules and resources, search, filtering, sorting, error handling, testing, and documentation.

The main principle throughout the project is:

**Design the complete product, implement only the current scope, and understand every important technical decision before coding.**