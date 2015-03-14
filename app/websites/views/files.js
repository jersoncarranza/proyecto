var Files = function  (conf) {
	conf = conf || {};
	
}


	/*Files.prototype.see = function(res, object) {res.render('see',object);}*/
	Files.prototype.see = function(res, object) {res.send(object);}

	Files.prototype.add = function(res, object) {res.render('add');}

	/*Files.prototype.list = function(res, object) {res.render('list',object);}*/
	Files.prototype.list = function(res, object) {res.send(object);}

	Files.prototype.chat = function(res, object) {res.render('chat', object);}
	Files.prototype.erase = function(res, object) {res.render('erase', object);}


	Files.prototype.actualizar = function(res, object) {res.render('update');}
	Files.prototype.seeLevel = function(res, object) {res.send(object);}
	Files.prototype.seeSubject = function(res, object) {res.send(object);}

module.exports = Files; 