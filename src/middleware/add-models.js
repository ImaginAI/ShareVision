const User = require('../db/models/user');
const Post = require('../db/models/post');
const Likes = require('../db/models/likes');



const addModels = (req, res, next) => {
  req.db = {
    User,
    Post,
    Likes,

  };
  next();
};

module.exports = addModels;
