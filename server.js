import express from "express";
import morgan from "morgan";

const path = require("path");
const PORT = 4000;
const app = express();
const logger = morgan("dev");

app.use(logger);

app.use(express.static("frontend"));

const handleListening = () => console.log(`server listening on port http://localhost:${PORT} 💥`);

app.listen(PORT, handleListening);

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
