exports.up = async function (knex) {
  await knex.schema.createTable("projects", (tbl) => {
    tbl.increments("id").unique();
    tbl.text("name").notNullable();
    tbl.text("description");
    tbl.boolean("completed").defaultTo(false);
  });

  await knex.schema.createTable("resources", (tbl) => {
    tbl.increments("id").unique();
    tbl.text("name").notNullable();
    tbl.text("description");
  });

  await knex.schema.createTable("tasks", (tbl) => {
    tbl.increments("id").unique();
    tbl.text("description").notNullable();
    tbl.text("notes");
    tbl.boolean("completed").notNullable().defaultTo(false);
    tbl
      .integer("projectId")
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });

  await knex.schema.createTable("projects_resources", (tbl) => {
    tbl
      .integer("projectId")
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl
      .integer("resourceId")
      .notNullable()
      .references("id")
      .inTable("resources")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("projects_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
