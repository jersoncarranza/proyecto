var mongoose = require('mongoose');
var modelArticle = require('./schema/files.js');

var archivos = function  (conf) {
	conf = conf || {};
	this.model = modelArticle;
}

//guardar y actualizar
archivos.prototype.save = function(data,callback) {
	console.log(data.slug);
	this.model.findOneAndUpdate({
		title:data.title,
		slug:data.slug,
		content:data.content
	},data,{upsert:true}).exec(function(err,doc){
		callback(doc);
	});
};
//========================obtener todos==================================
archivos.prototype.findAll = function(callback) {
	this.model
	.find({})
	.exec(function(err, data){
			if(err) throw err;
			callback(data);
	})
};
//obetener los datos de un archivo por un atributo
archivos.prototype.findAt = function(query,callback) {
	this.model.find(query).exec(function(err, doc){
		callback(doc)
	})
};

archivos.prototype.findId = function(id, callback) {
	this.model.findOne({_id:id}).exec(function(err, doc){
			if(err) throw err;
			callback(doc);
		})
};

//==========================borrar x id==================================
archivos.prototype.delete_id = function(id, callback) {
	this.model.remove({_id:id})
		.exec(function(err, doc){
			if(err) throw err;
			callback();
	})
};
//=======================actualizar=================================
archivos.prototype.update = function(id,data,callback) {
	this.model.findOneAndUpdate(
		{_id:id},
		{
			title:data.title,
			slug:data.slug,
			subject: data.subject,//materia
			teacher:data.teacher,  //teacher
			student:data.student ,//student
			content:data.content,//contenido
			url: data.url //url

		},
		function(err,data){
			if(err) throw err;
			callback(data);	
		})
};
module.exports = archivos;