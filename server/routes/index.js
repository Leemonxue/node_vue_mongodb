var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api', function(req, res, next) {
  
  db.UserModel.findById('59ae3e829356dc236c2257b5',{name:1, id:1, _id:0},function(err,docs){
    	if(err){
    		console.log(err)
    	}else{
    		console.log(docs);
    		console.log("test")
    	}
});
  res.json({name:'aaa',id:'123'});
});

module.exports = router;
