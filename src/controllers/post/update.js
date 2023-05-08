const { isAuthorized } = require('../../utils/auth-utils');

const updatePost = async (req, res) => {
  const {
    db: { Post },
    params: { id },
    body: { title, content }
  } = req;

  // if (!isAuthorized(id, session)) return res.sendStatus(403);

  const post = await Post.find(id);
  if (!post) return res.sendStatus(404);

  const updatedPost = await post.update(title, content);
  res.send(updatedPost);
  if(!updatePost) return res.sendStatus(404);
  res.send(updatedPost)
};

module.exports = updatePost;
