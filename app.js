/*
 * Module Dependencies
 */
var express = require('express'),
    stylus = require('stylus'),
    nib = require('nib')

var app = express()
function compile(str, pth) {
    return stylus(str)
        .set('filename',pth)
        .use(nib())
}

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(stylus.middleware(
	{ src: __dirname + '/public',
	compile: compile
	}
));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	res.render('index',{title: "home"});
})
app.get('/picloq', function (req, res) {
	res.render('picloq/index',{title: "picloq"});
})

//This can go
app.locals.pretty = true;

app.listen(80)
