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
    {id: 1, user_id: 1, image_url:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1aK9Xa.img?w=534&h=356&m=6&x=258&y=93&s=89&d=89', title: 'kevin', content: 'quite dapper huh'},
    {id: 2, user_id: 2, image_url:'https://th.bing.com/th/id/R.a97748a2b819ad07bc1217f3d85c029a?rik=Zx4YW1dzzd3HwA&pid=ImgRaw&r=0', title: 'item 2', content: 'item 2 content'},
    {id: 3, user_id: 2, image_url:'', title: 'item 3', content: 'item 3 content'}
  ]);
};
