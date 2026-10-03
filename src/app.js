import express from "express";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";
import courseRoute from "./routes/Course.route.js";

const app = express();

app.use(express.json());

app.get("/health", (_request, response) => {
  response.json({ status: "ok" });
});
app.use("/api/courses", courseRoute);


app.use(notFound);
app.use(errorHandler);

export default app;