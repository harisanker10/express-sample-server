import express from "express";

const app = express();

app.all("*", (req, res) => {
  res.status(200).json({ path: req.url, message: "Sample express server" });
});

app.listen(3000, () => {
  console.log("Server listening at 3000");
});
