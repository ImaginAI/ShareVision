const createPost = async (req, res) => {
    const {
      db: { Post },
      body: { user_id, image_url, title, content},
    } = req;
  
    const post = await Post.create( user_id, image_url, title, content);
  
    res.send(post);
};
  
module.exports = createPost;