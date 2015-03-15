var mongoose = require('mongoose'),
	Schema	 = mongoose.Schema;

var FileSchema = new Schema({
	subject: {type:String, require:true},//nombre materia
	description: {type:String, require:true},//descripcion
	teacher:{type:String, require:true},//profesor
	level:  {type:String,require:true},//nivel
	code:   {type:String,require:true},//codigo
	homework: [{
		partial_n:String,
		homework_n:[{
			description:String,
			options_n:[{
				student:String,
				url:String
			}],
		}],
	}],
	exam:[{
		partial_n:String,
		description:String		
		}],
	materia:[{
		partial_n:String,
		materia_n:[{
			description:String,
			url:String
		}],
	}]
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