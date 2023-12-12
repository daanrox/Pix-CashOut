import express, { Application } from "express";
import logics from "./logics";
import bodyParser from "body-parser";
import { startDatabase } from "./database";
import middlewares from "./middlewares";

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/read", logics.read);
app.post("/create", middlewares.keyExist, logics.create);

const PORT: number = 3000;
app.listen(PORT, async (): Promise<void> => {
  await startDatabase();
  console.log(`App is running on port: ${PORT}`);
});
