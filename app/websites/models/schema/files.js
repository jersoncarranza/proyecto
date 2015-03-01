var mongoose = require('mongoose'),
	Schema	 = mongoose.Schema;

var FileSchema = new Schema({
	title: {type:String, require:true},
	slug: {type:String, require:true},
	content: String
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