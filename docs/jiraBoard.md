# Open Campus Jira Board

The Jira board is the project-management workspace for planning, tracking, testing, and completing work on the Open Campus LMS backend.

[Open the Open Campus Jira board](https://mehdikarbitou-1769453505855.atlassian.net/jira/software/projects/OC/boards/265?sprintStarted=true)

> Access to the board may require an authorized Atlassian account.

## Board overview

| Item | Details |
|---|---|
| Project | Open Campus |
| Project key | OC |
| Board ID | 265 |
| Current backend scope | Public Course → Module → Resource catalogue |
| API documentation | Swagger/OpenAPI |
| Manual testing | Swagger UI and Postman |

Jira is the source of truth for work status, assignment, sprint planning, and delivery progress. This file explains how project work should be described and reviewed.

## Delivery areas

Current work can be organized around these areas:

### Catalogue API

- Published course catalogue
- Published course details
- Published modules by course
- Resources by module

### Course discovery

- Category filtering
- Level filtering
- Keyword search
- Creation and publication date sorting

### Reliability

- MongoDB ObjectId validation
- Published-only business rules
- Global 404 handling
- Unexpected-error handling

### Developer experience

- MongoDB seed and drop workflows
- Swagger documentation
- Postman scenarios
- README and technical documentation
- Docker-based local MongoDB setup

## Suggested workflow

| Stage | Meaning |
|---|---|
| Backlog | The work is recorded but not selected for immediate development |
| To Do | Requirements and acceptance criteria are clear |
| In Progress | Implementation is actively being completed |
| Review / Testing | Code and API behavior are being verified |
| Done | Acceptance criteria, tests, and documentation are complete |

Use the exact statuses configured in Jira if their names differ from this guide.

## How to write a good Jira issue

Each issue should be small, testable, and focused on one outcome.

### Recommended issue structure

~~~markdown
## User story
As a [type of user],
I want [goal],
so that [reason or value].

## Scope
- What must be implemented
- Which endpoint or layer is affected
- What must remain unchanged

## Acceptance criteria
- [ ] Expected successful behavior
- [ ] Validation or business rule
- [ ] Error behavior
- [ ] Published-only protection, when relevant
- [ ] Swagger or Postman test completed

## Technical notes
- Route:
- Controller:
- Repository:
- Model:
- Query parameters:

## Test evidence
- Request:
- Expected status:
- Expected response:
~~~

## Example issue

### Summary

Add keyword search to the published course catalogue.

### User story

As a visitor, I want to search published courses by keyword so that I can find relevant learning content quickly.

### Acceptance criteria

- GET /api/courses accepts an optional keyword query parameter.
- Search checks title, shortDescription, and description.
- Search is case-insensitive.
- Search happens in MongoDB.
- Draft courses never appear.
- No match returns HTTP 200 with count 0 and an empty data array.
- Existing category, level, and sorting options continue to work.
- Swagger documentation and manual tests are updated.

## Definition of done

An issue is ready to move to Done when:

- The acceptance criteria are satisfied.
- The existing Route → Controller → Repository → Model structure is preserved.
- Only necessary files were changed.
- Published-only rules still work.
- Successful, empty, invalid, and not-found responses were considered.
- Relevant Swagger or Postman requests pass.
- Swagger comments are updated when an API contract changes.
- README or technical documentation is updated when required.
- No secrets or local environment values were committed.
- The issue contains enough evidence for another developer to verify the result.

## Project links

- [Repository README](../README.md)
- [Requirements analysis](analyse-cahier-de-charge.md)
- [Data dictionary](data-dictionary.md)
- [Class diagram](diagrams/classes-diagram.drawio)
- [Use-case diagram](diagrams/useCase.drawio)
- [Open Campus Jira board](https://mehdikarbitou-1769453505855.atlassian.net/jira/software/projects/OC/boards/265?sprintStarted=true)

## Local verification links

These links work while the API is running locally:

- [API health check](http://localhost:3000/health)
- [Published course catalogue](http://localhost:3000/api/courses)
- [Swagger UI](http://localhost:3000/api-docs/)

## Working agreement

- Keep issues focused and understandable.
- Add acceptance criteria before starting implementation.
- Avoid mixing unrelated backend and documentation work in one issue.
- Record blockers and important decisions in Jira.
- Attach API evidence or screenshots when useful.
- Link related issues instead of duplicating work.
- Keep Jira status aligned with the real state of the code.

---

The Jira board tracks project execution. The repository documents the implementation. Both should remain consistent.
