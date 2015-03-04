var mongoose = require('mongoose'),
	Schema	 = mongoose.Schema;

var FileSchema = new Schema({
	title: {type:String, require:true},//titulo
	slug: {type:String, require:true},//slug
	subject: {type:String, require:true},//materia
	subjectCode: {type:String, require:true},//codigo de la materia
	teacher: {type:String, require:true},//teacher
	student: {type:String, require:true},//estudiante
	content: String,//contenido
	url: {type:String, require:true}, //url
	level: {type:String, require:true} //nivel
});

FileSchema.set('toJSON',{
	transform: function (doc, ret, options) {
		ret.id = ret._id;
		delete ret._id;
		delete ret._v;
	}
});

var File = mongoose.model('File', FileSchema);
module.exports = File;