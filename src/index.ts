import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  debugger;
  res.json({ message: "hello" });
});

/* Error handler middleware */
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.code || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
