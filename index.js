const express = require('express');
const hbs = require('express-handlebars');
const fs = require('fs');
const download = require('download');

const app = express();

var pageOne =0;
var pageTwo =0;
var pageThree =0;

app.use(express.static('public'));

app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

app.get('/', function(request, response){
    pageOne +=1;
    response.render('title');
});


app.get("/description", function (request, response) {
  pageTwo +=1;
    response.render("description");
});

app.get("/links", function (request, response) {
  pageThree +=1;
    response.render("link");
});


// fs.writeFileSync();


// const data = new Uint8Array(Buffer.from('h index.js'));
// fs.writeFile('visitas.txt', data, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });


// fs.writeFile('message.txt', 'h index.js', 'utf8', callback);





app.listen(5500);