var express = require('express');
var router = express.Router();
var http=require('http');
var appRoutes=require('./appRoutes');
 var port=process.env.PORT||8080;
var bodyParser=require('body-parser');
var cors=require('cors');
var app=express();

var mongoose =require('mongoose');

mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser:true});
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/',appRoutes);
 http.createServer(app).listen(port);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
