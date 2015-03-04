var files = require('../websites/models/schema/files.js');
var redsematica = new files({
	title:'Red Semantica', //titulo
	slug:'Image', //slug
	subject:'Bases de conocimiento',//materia
	subjectCode:'EIS811', //codigo de la materia
	teacher:'Ivan Menes', //teacher
	student:'Anonymous', //estudiante
	content:'Es una Red Semantica Realizada en java con vectores',
	url:'www.github.com/redsemantica',
	level:'8'
	});

redsematica.save(function (err, justin){
	console.log('redsematica guardada');		
});