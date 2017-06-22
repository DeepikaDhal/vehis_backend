var express = require('express');
var router = express.Router();

var URL="mongodb://dpi:123456@ds131782.mlab.com:31782/dp"

const db=require('monk')(URL)

const docs=db.get('dpu')
/* GET home page. */
router.get('/welcome', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  docs.insert({"name":"mona","age":"19"},function (err,docs) {
      if(err) console.log(err)
      else res.send('success');

  })

});

router.get('/wel', function(req, res, next) {
    res.send('deepi welcome to heroku');
});
module.exports = router;
