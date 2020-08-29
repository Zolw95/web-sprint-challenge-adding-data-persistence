const db = require("../data/config");
const router = require("../routers/projectRouter");

async function getResources() {
  try {
    const resources = await db("resources");

    return await resources;
  } catch (err) {
    console.log(err.stack);
    return null;
  }
}

async function addResource(data) {
  try {
    const resource = await db("resources").insert(data);

    return await resource;
  } catch (err) {
    console.log(err.stack);
    return null;
  }
}

async function getProjects() {
  try {
    const projects = await db("projects");
    return await projects;
  } catch (err) {
    console.log(err.stack);
    return null;
  }
}

async function addProject(data) {
  try {
    const project = await db("projects").insert(data);

    return await project;
  } catch (err) {
    console.log(err.stack);
    return null;
  }
}

async function getTasks() {
  try {
    const tasks = await db("tasks as t")
      .join("projects as p", "p.id", "t.projectId")
      .select(
        "p.name as ProjectName",
        "p.description as ProjectDescription",
        "t.description as TaskDescription",
        "t.id as TaskId",
        "t.description as TaskDescription",
        "t.notes as TaskNotes",
        "t.completed as Completed",
        "t.projectId as ProjectId"
      );

    return await tasks;
  } catch (err) {
    console.log(err.stack);
    return null;
  }
}

async function addTask(data, id) {
  try {
    const task = await db("tasks").insert({ ...data, projectId: id });

    return task;
  } catch (err) {
    console.log(err.stack);
    return { msg: "Invalid Project Id" };
  }
}

module.exports = {
  getResources,
  addResource,
  getProjects,
  addProject,
  getTasks,
  addTask,
};
