var http	= require('http');
var conf = require('./conf.json');
var expressServer = require('./app/ExpressServer');
var mongoose = require('mongoose');
var socketIO= require('./app/socketIO.js');
 

var Workers = function (config) {
config = config || {}

mongoose.connect('mongodb://localhost/naruto');
//mongoose.connect('mongodb://' +conf.db.user +':'+ conf.db.password + conf.db.host +'/'+ conf.db.name);
//mongodb://nodejitsu:3af9571979d1c5269b1208be54bfa38f@troup.mongohq.com:10073/nodejitsudb3726992572
var app = new expressServer();


var server = http.createServer(app.expressServer);
var Io = new socketIO({server:server});

server.listen(conf.port);
console.log('escuchando el puerto 7000');
}
/*virginia 23 diciembre*/

//para poder debuggearlos
if (module.parent){//es para llamarlo al padre 
module.exports = Workers; 
}else{
	new Workers();// o si no creese a si mismo
	console.log('debuggers')
}