import express from "express";
import path from 'path';
import { fileURLToPath } from "url";

const app = express();
const __fileNameNew = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileNameNew);



app.get("/", function (req, res) {
  res.sendFile("public/index.html", { root: __dirname });
});

app.listen(3000);
