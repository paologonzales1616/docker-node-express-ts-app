import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import moment from "moment";

dotenv.config();

const app: Express = express();

const port = process.env.PORT || 3000;

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/generation", (req: Request, res: Response) => {
  const { birthDate } = req.body;
  console.log("birthDate:", birthDate);
  const momentBirthDate = moment(birthDate, "yyyy-MM-dd");
  if (!momentBirthDate.isValid()) {
    return res.status(400).send("Invalid birth date");
  }

  if (momentBirthDate.isBefore(moment("1945"))) {
    return res.status(200).send("Silent Generation");
  }

});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
