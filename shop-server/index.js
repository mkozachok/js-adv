var express = require('express')
var fs = require('fs');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());

var shortid = require('shortid');

app.get('/', function(req, res){
  res.send('Works!');
});

app.get('/api/products', function (req, res) {
  fs.readFile('./products.json', 'utf8', function (err, data) {
    if (err) throw err;
    res.send(data);
  });
});

app.get('/api/products/:id', function (req, res) {
  fs.readFile('./products.json', 'utf8', function (err, data) {
    if (err) throw err;

    var products = JSON.parse(data);
    var productId = req.params.id;
    if (products && productId){
      var product = products.find(
        function(item) {
          return item.id === productId;
        }
      );
      res.json(product || null);
    }
  });
});

app.post('/api/products', function (req, res) {
  var data = JSON.parse(fs.readFileSync('./products.json', 'utf8'));
  console.log(req.body);
  var newProduct = JSON.parse(req.body.product);
  var randomId = shortid.generate();

  newProduct.id = randomId;
  console.log(newProduct);
  data.push(newProduct);
  json = JSON.stringify(data);

  fs.writeFile('./products.json', json, 'utf8');

  res.json(newProduct);
});

app.put('/api/products', function (req, res) {
  var data = JSON.parse(fs.readFileSync('./products.json', 'utf8'));
  var newProduct = JSON.parse(req.body.product);
  var productId = req.body.product.id;

  var updated = data.map(function(item) {
    if (item.id === productId) {
      return newProduct;
    } else {
      return item;
    }
  });
  json = JSON.stringify(updated);
  fs.writeFile('./products.json', json, 'utf8');

  res.json(newProduct);
});

app.delete('/api/products/:id', function (req, res) {
  fs.readFile('./products.json', 'utf8', function (err, data) {
    if (err) throw err;

    var products = JSON.parse(data);
    var productId = req.params.id;
    if (products && productId){
      var filterd = products.filter(function(item) {
        return item.id !== productId
      });
    }
    json = JSON.stringify(filterd);
    fs.writeFile('./products.json', json, 'utf8');
    res.json(filterd);
  });
});

app.listen(3333, function() {
  console.log("App listining on port 3333!");
});

var productModel = ['title', 'description', 'price', 'image_src'];


function productIsValid(product) {
  var err = false;
  for (var key in productModel) {
    if (product.indexOf(key) === -1) {
      err = true;
    }
    if (product[key].trim() === 0) {
      err = true;
    }
  }
}