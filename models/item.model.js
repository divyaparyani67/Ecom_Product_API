const mongoose = require ("mongoose");
const Schema = mongoose.Schema
const ProductSchema = new Schema(
    {
    
        title: {type: String, required: true},
        desc: {type: String, required: true},
        img: { type: String, required: true},
        catogories: { type: Array},
        size: { type: String},
        color: { type: String},
        price: { type: Number, required: true}
        
        },
    
    { timestamps: true }
);

//export the model
module.exports = mongoose.model('Product', ProductSchema)