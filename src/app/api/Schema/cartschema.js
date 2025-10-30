const mongoose = require('mongoose')

const itemsschema = new mongoose.Schema({
    id:{
        type:String,
        require:true
    },
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
    quantity:{
        type:Number,
        require:true
    },
    images:[
        {
            type:String,
            require:true
        }
    ]
})

const CartSchema = new mongoose.Schema({
    deviceId:{
        type: String,
        require:true,
    },
    grandtotal:{
        type:Number,
        require:true
    },
    items:[itemsschema]
})

const CartModel = mongoose.model('cartproducts',CartSchema)

module.exports = CartModel