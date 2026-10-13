import express from "express";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send(" backend Initial setup successful on the port");
});

app.listen(PORT, () => {
  console.log(`Server starting on PORT http://localhost:${PORT}/ `);
});
