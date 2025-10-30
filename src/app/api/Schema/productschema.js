const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name:{
        type : String,
        require: true
    },
    description:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    stock:{
        type:String,
        require:true
    },
    firstprize:{
        type:Number,
        require:true
    },
    lastprize:{
        type:Number,
        require:true
    },
    discount:{
        type:String,
        require:true
    },
    offer:{
        type:Boolean,
        require:true
    },
    offerimage:{
        type:String,
        require:true
    },
    images:[
        {
            type:String,
            require:true
        }
    ]
})

const productModel = mongoose.model('productdetails',ProductSchema)

module.exports = productModel