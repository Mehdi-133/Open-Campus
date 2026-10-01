import "dotenv/config";
import app from "./app.js";
import conncetDb from "./config/db.js";

const port = process.env.PORT || 3000;

const startServer = async () => {
  await conncetDb();

  app.listen(port, () => {
    console.log(`Open Campus API listening on port ${port}`);
  });
};

startServer();
