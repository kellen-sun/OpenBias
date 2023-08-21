const router = require('express').Router();
let Article = require('../models/article.model');

router.route('/').get((req,res)=>{
    Article.find()
        .then(article => res.json(article))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res)=>{
    const url = req.body.url;
    const title = req.body.title;
    const reviews = Object(req.body.reviews)

    const newarticle = new Article({url, title, reviews});
    
    newarticle.save()
    .then(()=> res.json('Article added'))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:id').get((req,res) => {
    Article.findById(req.params.id)
        .then(article => res.json(article))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res)=> {
    Article.findByIdAndDelete(req.params.id)
        .then(()=>res.json('Article deleted successfully'))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:id').post((req, res) => {
    Article.findById(req.params.id)
      .then(article => {
        article.url = req.body.url;
        article.title = req.body.title;
        article.reviews = Object(req.body.reviews)
  
        article.save()
          .then(() => res.json('Article updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;
