/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('likes', (table) => {
    table.increments('id');
    table.integer('user_id').references('id').inTable('users').notNullable();
    table.integer('post_id').references('id').inTable('posts').notNullable();
  });
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = (knex) => knex.schema.dropTable('likes');
  