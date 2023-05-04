const deletePost = async (req, res) => {
    const { Post, params: { id } } = req;
    const result = await Post.delete(Number(id));
    res.sendStatus(result ? 204 : 404);
  };
  
  module.exports = deletePost;