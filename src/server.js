import express from "express";

const PORT = process.env.PORT || 4000;
const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const handleMain = (req, res) => {
  return res.send("First Server");
};

app.use(logger);
app.get("/", logger, handleMain);

const handleListening = () => console.log(`Server is Learning on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
