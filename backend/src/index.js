import express from "express";

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Express server is running." });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
