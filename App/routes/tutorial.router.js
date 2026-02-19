const express = require("express");
const tutorials = require("../repositories/tutorial");

const router = express.Router();

// Create a new Tutorial
router.post("/", async (req, res) => {
  if (!req.body.title) {
    res.status(422).send({ message: "Content can't be empty" });
  } else {
    try {
      const reult = await tutorials.create(req.body.title);
      res.json({ success: true, message: "tutorial saved successfully" });
    } catch (err) {
      res.json({ success: false, message: "err.details" });
    }
  }
});

// Retrieve all tutorials
router.get("/", async (req, res) => {
  try {
    const allTutorials = await tutorials.findAll();
    if (!allTutorials) {
      return res.status(404).send("No users found");
    }
    res.json(allTutorials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Retrieve a single Tutorial
router.get("/:id", async (req, res) => {
  try {
    const oneTutorial = await tutorials.findOne(req.params.id);
    if (!oneTutorial) {
      return res.status(404).send("Tutorial not found");
    }
    res.json(oneTutorial);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a tutorial
router.put("/:id", async (req, res) => {
  try {
    const isActualized = await tutorials.update(req.params.id, req.body);
    if (isActualized) {
      res.json({ success: true, message: "Tutorial was updated successfully" });
    }
  } catch (err) {
    res.json({ success: false, message: err.detail });
  }
});

// Delete a Tutorial with id
router.delete("/:id", async (req, res) => {
  try {
    const isDeleted = await tutorials.deleteOne(req.params.id);
    if (isDeleted) {
      res.json({ success: true, message: "Tutrial successfully deleted" });
    }
  } catch (err) {
    res.json({ success: false, messagge: err.detail });
  }
});

// Delete All tutorials
router.delete("/", async (req, res) => {
  try {
    const allCleaned = await tutorials.deleteAll();
    if (allCleaned) {
      res.json({
        success: true,
        message: "All tutorials was successfully deleted",
      });
    }
  } catch (err) {
    res.json({ success: false, messagge: err.detail });
  }
});

// Find all published Tutorials
router.get("/published", async (req, res) => {
  try {
    const allPublished = await tutorials.findAllPublished();
    if (!allPublished) {
      return res.status(404).send("There are no published tutorials");
    }
    res.json(allPublished);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
