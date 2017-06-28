var express = require('express');
var router = express.Router();

var URL="mongodb://dpi:123456@ds131782.mlab.com:31782/dp"

const db=require('monk')(URL)

const docs=db.get('dpu')
/* GET home page. */
router.get('/push', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  docs.update({"id":"5e438","name":"deepika"},{$push:{"group":{"name":"user1"}}},function (err,docs) {
      if(err) console.log(err)
      else res.send('successful');

  })

});

router.get('/welo', function(req, res, next) {
    docs.find({"age":"16"
    },function(err,docs) {
        if (err) console.log(err);
        else
            res.json(docs[0]);
    })

    });

router.post('/well', function(req, res, next) {
    var username=req.body.name;
    var pass=req.body.password;
    docs.insert({"name": username,"password":pass},
        function(err,docs) {
        if (err) console.log(err);
        else
            res.send(success);
    })

});


router.post('/location', function(req, res, next) {
    var latitude = req.body.lat;
    var longitude = req.body.lng;
    docs.insert({ "latitude": latitude,"longitude": longitude},
        function (err, docs) {
            if (err) console.log(err);
            else
                res.send(success);
        })
});

router.get('/wel', function(req, res, next) {
    res.send('deepi welcome to heroku');
});
module.exports = router;
