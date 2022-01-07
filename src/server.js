import express from "express";
import morgan from "morgan";

const path = require("path");
const PORT = 4000;
const app = express();
const logger = morgan("dev");

app.use(logger);
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

const handleListening = () => console.log(`server listening on port http://localhost:${PORT} 💥`);

app.listen(process.env.PORT || PORT, handleListening);
