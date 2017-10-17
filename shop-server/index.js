var express = require('express')
var fs = require('fs');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var shortid = require('shortid');

app.get('/', function(req, res){
  res.send('Hello World!');
});

app.get('/api/products', function (req, res) {
  fs.readFile('./products.json', 'utf8', function (err, data) {
    if (err) throw err;
    res.json(data);
  });
});

app.get('/api/products/:id', function (req, res) {
  fs.readFile('./products.json', 'utf8', function (err, data) {
    if (err) throw err;

    var parsedData = JSON.parse(data);
    var products = parsedData.products;
    var productId = req.params.id;
    if (products && productId && products[productId]){
      res.json(products[productId]);
    } else {
      res.json({ error: "No products found with id " + productId });
    }
  });
});

app.post('/api/products', function (req, res) {
  var data = JSON.parse(fs.readFileSync('./products.json', 'utf8'));
  var newProduct = req.body.product;
  var randomId = shortid.generate();

  data.products[randomId] = newProduct;
  json = JSON.stringify(data);
  fs.writeFile('./products.json', json, 'utf8');
  res.send("done");
});

app.put('/api/products', function (req, res) {
  var data = JSON.parse(fs.readFileSync('./products.json', 'utf8'));
  var newProduct = req.body.product;
  var productId = req.body.id;
  data.products[productId] = newProduct;
  json = JSON.stringify(data);
  fs.writeFile('./products.json', json, 'utf8');
  res.send("done");
});

app.delete('/api/products/:id', function (req, res) {
  fs.readFile('./products.json', 'utf8', function (err, data) {
    if (err) throw err;

    var parsedData = JSON.parse(data);
    var products = parsedData.products;
    var productId = req.params.id;
    if (products && productId && products[productId]){
      delete parsedData.products[productId];

      json = JSON.stringify(parsedData);
      fs.writeFile('./products.json', json, 'utf8');
      res.send("done");
    } else {
      res.json({ error: "No products found with id " + productId });
    }
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