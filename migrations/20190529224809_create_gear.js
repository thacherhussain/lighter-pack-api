exports.up = (knex) => {
  'use strict';

  return knex.schema.createTable('gear', (table) => {
    table.increments('id');
    table.string('title');
    table.string('description');
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  'use strict';

  return knex.schema.dropTable('gear');
};
