import express, { Request, Response } from "express";
import cors from "cors";
import {
  language,
  skill,
  experience,
  hobie,
  education,
  reference,
  contact,
  header
} from './app/components/service/data_info.js'

const app = express();
app.use(cors());


app.get("/header", (req: Request, res: Response) => {
  res.json(header);
});

app.get("/language", (req: Request, res: Response) => {
  res.json(language);
});

app.get("/skill", (req: Request, res: Response) => {
  res.json(skill);
});

app.get("/hobie", (req: Request, res: Response) => {
  res.json(hobie);
});

app.get("/experience", (req: Request, res: Response) => {
  res.json(experience);
});

app.get("/education", (req: Request, res: Response) => {
  res.json(education);
});

app.get("/reference", (req: Request, res: Response) => {
  res.json(reference);
});

app.get("/contact", (req: Request, res: Response) => {
  res.json(contact);
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
