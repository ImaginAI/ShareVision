const deletePost = async (req, res) => {
    const { 
        db: {Post}, 
        params: { id } } = req;
    const result = await Post.delete(Number(id));
    res.status(result ? 204 : 404).send(result);
  };
  
  module.exports = deletePost;