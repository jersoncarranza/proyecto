var FileView = require('../views/files.js'),
	FileModel= require('../models/filesm.js');

var Files = function  (conf) {
	conf = conf || {};
	this.view = new FileView();
	this.model = new FileModel();

	this.response = function () {
		this[conf.funcionalidad](conf.req, conf.res, conf.next);
	}
}
	/*===================== GUARDAR ===================*/
	//llama el metodo 
	Files.prototype.post_save = function(req, res, next) {
		this.model.save(req.body, function(doc){//envia los datos a guardar
			res.redirect('/files/see/'+ doc.id)//reenvia ha otra pagina 
		})
	};
	//url 
	Files.prototype.get_add = function(req, res, next) {
		this.view.add(res);
	};
	/*=====================  ELIMINAR  ===========================*/
	//llama el metodo
	Files.prototype.get_delete_data = function(req, res, next) {
		var id = req.params.data;
		console.log(id);
		this.model.delete_id(id, function(){
			res.redirect('/files/list/')
			
		});	
	};
	//url
	Files.prototype.get_erase= function(req, res, next) {
		var object = {del:'vamos a borrar'};
		this.view.erase(res, object);
	};
	/*================== LISTAR =============================*/
	Files.prototype.get_list = function(req, res, next) {
		var object = {};
		var self = this;
		this.model.findAll(function(doc){ 
			object = doc;
			self.view.list(res, object);
		});
		
	};
	//url para listar todos los elementos SLUG o un campo
	Files.prototype.get_see_id  = function(req, res, next) {
		var object = {};
		var self = this;
		var id = req.params.data;
		this.model.findId(id, function (doc) {
			object = doc;
			self.view.see(res, object);
		})
	};
	//llama metodo encontrar las materia por nivel
	Files.prototype.get_seeLevel_level = function(req, res, next) {
		var object = {};
		var self = this;
		var level = req.params.data;
		console.log(level);
		this.model.findLevel(level ,function(doc){
			object = doc;// [0] retorna solo un objeto
			self.view.seeLevel(res, object);
		});
	};
	//materia
	Files.prototype.get_seeSubject_codSub = function(req, res, next) {
		var object = {};
		var self = this;
		this.model.findLevel({subjectCode:req.params.data} ,function(doc){
			object = doc;// [0] retorna solo un objeto
			self.view.seeSubject(res, object);
		});
	};
	/*====================== Actualizar ===========*/
	Files.prototype.post_update = function(req,res) {
		/*var id = req.params.id;*/
		var files = req.body;	
		var id = req.body.id;	
		var pk = req.body._id;	
		console.log(pk);
		this.model.update(id,files, function(doc){
			console.log(doc);
			res.redirect('/files/see/'+ doc.id)//reenvia ha otra pagina 
		});
	};

	Files.prototype.get_actualizar = function(req, res, next) {
		this.view.actualizar(res);
	};
	/*================ CHAT ===========================*/
	//url para el chat
	Files.prototype.get_chat = function(req, res, next) {
		var object = {chat:'chat'};
		this.view.chat(res, object);
	};
module.exports = Files;