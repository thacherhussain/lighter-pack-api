exports.up = (knex) => {
  'use strict';

  return knex.schema.createTable('categories', (table) => {
    table.increments('id');
    table.string('category_name');
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  'use strict';

  return knex.schema.dropTable('categories');
};
