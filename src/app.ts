import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

// Middlewares: cors
app.use(cors()); // Allows request from different domain, protocall, port

//  middlewares: parse api response
app.use(express.json()); // make the response usable for req.body
app.use(express.urlencoded({ extended: true })); // make the form data which is in from of url and parse it for req.body.

app.get("/", (req: Request, res: Response) => {
  res.send("home route");
});
export default app;
