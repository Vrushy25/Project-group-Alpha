const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// Parse requests of content-type - application/json
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});

// Ensure the path is correct and the file exists
try {
  const tutorialRoutes = require("./app/routes/tutorial.routes.js");
  tutorialRoutes(app);  // Attach the routes
} catch (error) {
  console.error("Error loading tutorial routes:", error.message);
}

// Set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

