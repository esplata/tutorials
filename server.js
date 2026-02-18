const express = require("express");
const cors = require("cors");
const db = require("./App/models/index");
const tutorialRouter = require("./App/routes/tutorial.router");

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple route
application.get("/", (req, res) => {
  res.json({ message: "Welcome to the tutorial Application." });
});

// routes

app.use("/api/tutorials", tutorialRouter);

// Sync database
db.sequelize.sync().then(() => {
  console.log("Synced dv");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
