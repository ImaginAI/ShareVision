const createLikes = async (req, res) => {
    const {
      db: { Likes },
      body: {user_id,post_id},
    } = req;
  
    const post = await Likes.create(user_id, post_id);
  
    res.send(post);
};
  
module.exports = createLikes;