
const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("AI WhatsApp Assistant is running!");
});

app.get("/health", (req, res) => {
  res.json({
    status: "success",
    message: "AI WhatsApp Assistant is working"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
