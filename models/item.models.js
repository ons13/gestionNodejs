const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
	name: { type: String },
	price: { type: Number },
	instockquantity: { type: Number },
	category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }
},
	{
		timestamps: true
	});

module.exports = mongoose.model("Item", ItemSchema);