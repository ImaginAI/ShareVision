const { Query } = require('pg');
const knex = require('../knex');

class Likes {

  constructor({ id, user_id, post_id}) {
    this.id = id;
    this.user_id = user_id;
    this.post_id = post_id;
  }
// method for unliking 
// method for liking 
//method for viewing likes 

static async create(user_id,post_id) {
    try {

      const query = `INSERT INTO likes (user_id,post_id)
        VALUES (?, ?) RETURNING *`;
      const { rows: [likes] } = await knex.raw(query, [user_id, post_id]);
      return new Likes(likes);
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async list(post_id) {
    try {
      const query = `SELECT COUNT(*) FROM likes WHERE post_id = ?`;
      const { rows } = await knex.raw(query , [post_id]);
      return rows;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
//   static async find(id) {
//     try {
//       const query = 'SELECT * FROM posts WHERE id = ?';
//       const { rows: [post] } = await knex.raw(query, [id]);
//       return post ? new Post(post) : null;
//     } catch (err) {
//       console.error(err);
//       return null;
//     }
//   }

  static async delete(id) {
    try {
      const query = `DELETE FROM likes WHERE id = ?`
      const res = await knex.raw(query, [id]);
      return res.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }

}

module.exports = Likes;
