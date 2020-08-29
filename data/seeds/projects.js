exports.seed = async function (knex) {
  await knex("projects").insert([
    {
      id: 1,
      name: "Project 1",
      description: "Project 1 Description",
      completed: true,
    },
    {
      id: 2,
      name: "Project 2",
      description: "Project 2 Description",
      completed: false,
    },
    {
      id: 3,
      name: "Project 3",
      description: "Project 3 Description",
      completed: true,
    },
  ]);

  await knex("resources").insert([
    {
      id: 1,
      name: "Project 1 Resource",
      description: "Resource 1 Description",
    },
    {
      id: 2,
      name: "Resource 2",
      description: "Resource 2 Description",
    },
    {
      id: 3,
      name: "Resource 3",
      description: "Resource 3 Description",
    },
  ]);

  await knex("tasks").insert([
    {
      id: 1,
      description: "Task 1 Description",
      notes: "Task 1 Notes",
      completed: true,
      projectId: 1,
    },
    {
      id: 2,
      description: "Task 2 Description",
      notes: "Task 2 Notes",
      completed: false,
      projectId: 2,
    },
    {
      id: 3,
      description: "Task 3 Description",
      notes: "Task 3 Notes",
      completed: true,
      projectId: 3,
    },
  ]);

  await knex("projects_resources").insert([
    {
      projectId: 1,
      resourceId: 1,
    },
    {
      projectId: 1,
      resourceId: 2,
    },
    {
      projectId: 3,
      resourceId: 3,
    },
  ]);
};
