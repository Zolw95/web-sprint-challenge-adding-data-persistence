const express = require("express");
const Projects = require("../models/projects");

const router = express.Router();

router.get("/resources", async (req, res, next) => {
  try {
    const resources = await Projects.getResources();

    res.status(201).json(resources);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
    next(err);
  }
});

router.post("/resources", async (req, res, next) => {
  const data = req.body;
  try {
    if (!data.name || data.name.length < 1) {
      return res.status(400).json({ msg: "Resource name is a required field" });
    }

    const newResource = await Projects.addResource(data);

    res.status(201).json({ msg: `Resource #${newResource} Added Successfuly` });
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
    next(err);
  }
});

router.get("/projects", async (req, res, next) => {
  try {
    const projects = await Projects.getProjects();

    res.status(201).json(projects);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
    next(err);
  }
});

router.post("/projects", async (req, res, next) => {
  const data = req.body;
  try {
    if (!data.name || data.name.length < 1) {
      return res.status(400).json({ msg: "Project name is a required field." });
    }

    const newProject = await Projects.addProject(data);

    res.status(201).json({ msg: `Project #${newProject} Added Successfully` });
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
    next(err);
  }
});

router.get("/tasks", async (req, res, next) => {
  try {
    const tasks = await Projects.getTasks();

    res.status(201).json(tasks);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
    next(err);
  }
});

router.post("/projects/:id/tasks", async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  try {
    if (!data.description || data.description.length < 1) {
      return res
        .status(400)
        .json({ msg: "Task description is a required field" });
    }

    if (!id || id === "") {
      return res.status(400).json({ msg: "Valid project ID is required." });
    }

    const newTask = await Projects.addTask(data, id);

    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
    next(err);
  }
});

module.exports = router;
