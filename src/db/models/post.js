const knex = require('../knex');

class Post {

  constructor({ id, user_id, image_url, title, content, username }) {
    this.id = id;
    this.user_id = user_id;
    this.image_url = image_url;
    this.title = title;
    this.content = content;
    this.username = username
  }

  static async list() {
    try {
      const query = 'SELECT posts.*,username FROM posts JOIN users ON posts.user_id = users.id';
      const { rows } = await knex.raw(query);
      return rows.map((post) => new Post(post));
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async create(user_id, image_url, title, content) {
    try {

      const query = `INSERT INTO post (user_id, image_url, title, content)
        VALUES (?, ?, ?, ?) RETURNING *`;
      const { rows: [post] } = await knex.raw(query, [user_id, image_url, title, content]);
      return new Post(post);
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  update = async (post) => { // dynamic queries are easier if you add more properties
    try {
      const [updatedPost] = await knex('posts')
        .where({ id: this.id })
        .update({ post })
        .returning('*');
      return updatedPost ? new Post(updatedPost) : null;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

}

module.exports = Post;
