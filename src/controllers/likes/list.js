const listLikes = async (req, res) => {
    const {
        db: {Likes},
        params: {post_id}
    }= req;
    const like = await Likes.list(post_id);
    res.send(like);
};
  
module.exports = listLikes;
  