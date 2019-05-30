exports.seed = function(knex) {
  'use strict';

  return knex('gear').del()
    .then(() => {
      return knex('gear').insert([
        { id: 1, title: 'Ice Axe', description: 'Black Diamond 60cm' },
        { id: 2, title: 'Backpack', description: 'Osprey 32L' },
        { id: 3, title: 'Backpack', description: 'Aura 65L' },
        { id: 4, title: 'Harness', description: 'Black Diamond' }
      ]);
    });
};
