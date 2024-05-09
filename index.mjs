import express from "express";
import { courses } from "./courses.mjs";
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()
let corsOptions = {
  origin: ["http://localhost:3000"],
  methods: "GET, POST, PUT, DELETE, PATCH",
  credentials: true,
};
const app = express();
const PORT = process.env.PORT || 5000;

app.use("*", cors(corsOptions));

app.get("/api/courses", (req, res) => {
  res.json(courses); // Send the entire courses array as JSON response
});

app.get('/api/courses/:id', (req, res) => {
  const courseId = parseInt(req.params.id);
  const course = courses.find(course => course.id === courseId);

  if (!course) {
    return res.status(404).json({ error: 'Course not found' });
  }

  res.json(course); // Send the found course as JSON response
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
