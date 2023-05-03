/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('likes', (table) => {
    table.increments('likes_id');
    table.int('user_id').notNullable();
    table.string('post_id').notNullable();
  });
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = (knex) => knex.schema.dropTable('likes');
  