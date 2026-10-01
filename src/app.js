import express from "express";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());

app.use(notFound);
app.use(errorHandler);

app.get("/health", (_request, response) => {
  response.json({ status: "ok" });
});

export default app;
