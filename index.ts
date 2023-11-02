import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";

dotenv.config();

let app: Application | undefined = undefined;

app = express();
const port = process.env.PORT || 8000;

app.use(express.static("public"));

app.get("/", (_req: Request, res: Response) => {
  res.sendFile(__dirname + "/views/index.html");
});

// API endpoint
app.get("/api/whoami", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const language = req.headers["accept-language"];
  const software = req.headers["user-agent"];
  res.json({ ipaddress: ip, language: language, software: software });
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
