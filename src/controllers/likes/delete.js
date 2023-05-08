const deleteLikes = async (req, res) => {
    const { 
        db: {Likes}, 
        params: { like_id } } = req;
    const result = await Likes.delete(like_id);
    res.status(result ? 204 : 404).send(result);
  };
  
  module.exports = deleteLikes;