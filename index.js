const express = require('express');
const hbs = require('express-handlebars');
const fs = require('fs');
const download = require('download');

const app = express();

app.use(express.static('public'));

app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

app.get('/', function(request, response){
    response.render('title');
});


app.get("/description", function (request, response) {
  
    response.render("description");
});

app.get("/links", function (request, response) {
  
    response.render("link");
});









app.listen(5500);