exports.seed = function(knex) {
  'use strict';

  return knex('categories').del()
    .then(() => {
      return knex('categories').insert([
        { id: 1, category_name: 'Climbing' },
        { id: 2, category_name: 'Packs' },
        { id: 3, category_name: 'Hydration' },
        { id: 4, category_name: 'Cooking/Food' }
      ]);
    });
};
