const User = require('../models/user');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await knex('likes').del()
  await knex('posts').del()
  // await User.deleteAll();
  await User.create('cool_cat', 'password1');
  await User.create('l33t-guy', 'password1');
};
