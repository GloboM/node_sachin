
const express = require('express');
const chatCat = require('./app');
var app = express();

app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));

app.use('/',chatCat.routes)


app.listen(app.get('port'), function () {
    console.log('app is listening on port : ',app.get('port'));
})
