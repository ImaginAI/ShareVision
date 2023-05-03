/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 *     table.increments('id');
    table.integer('user_id').references('id').inTable('users').notNullable();
    table.string('image_url');
    table.string('title')
    table.string('content');
    table.timestamps(true, true);
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').insert([
    {id: 1, user_id: 1, image_url:'', title: 'item 1', content: 'item 1 content'},
    {id: 2, user_id: 2, image_url:'', title: 'item 2', content: 'item 2 content'},
    {id: 3, user_id: 2, image_url:'', title: 'item 3', content: 'item 3 content'}
  ]);
};
