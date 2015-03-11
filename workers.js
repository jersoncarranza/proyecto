var http	= require('http');
var conf = require('./conf.json');
var expressServer = require('./app/ExpressServer.js');
var mongoose = require('mongoose');
var socketIO= require('./app/socketIO.js');
 

var Workers = function (config) {
config = config || {}

mongoose.connect('mongodb://' +conf.db.user +':'+ conf.db.password + conf.db.host +'/'+ conf.db.name);
var app = new expressServer();


var server = http.createServer(app.expressServer);
var Io = new socketIO({server:server});

server.listen(conf.port);
console.log('escuchando el puerto 7000');
}

//para poder debuggearlos
if (module.parent){//es para llamarlo al padre 
module.exports = Workers; 
}else{
	new Workers();// o si no creese a si mismo
	console.log('debuggers')
}