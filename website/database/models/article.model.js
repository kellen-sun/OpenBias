const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  url: {type: String, required: true},
  title: {type: String, required: true},
  reviews: {type: Object, required: true},
  
}, {
  timestamps: true,
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;