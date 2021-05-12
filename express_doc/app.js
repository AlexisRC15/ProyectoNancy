const express = require('express');
const app = express();
const routes = require('./src/routes/route');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan')


// ?? Settings
const port = 3000;
app.use(morgan("dev"));
app.set('views', path.join(__dirname, '/src/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//  ?? Routes
app.use(routes);

// ?? Static Files
app.use(express.static(path.join(__dirname, 'src', 'public')));


app.listen(port, function() {
    console.log('Server on port ' + port);
});


// ?? https://parzibyte.me/blog/2019/06/27/conexion-node-js-mysql-express/