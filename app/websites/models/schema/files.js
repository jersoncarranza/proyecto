var mongoose = require('mongoose'),
	Schema	 = mongoose.Schema;

var FileSchema = new Schema({
	title: {type:String, require:true},//titulo
	student: {type:String, require:true},//estudiante
	level: {type:String, require:true}, //nivel
	content: {type:String,require:true},//contenido
	subject: [{
		name:String,
		teacher:String,//teacher
		code:String //codigo de la materia
		}],
	url: [{
		url1:String,
		description:String		
		}], //url
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