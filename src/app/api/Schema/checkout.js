const mongoose = require('mongoose')
const moment = require('moment-timezone')

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

const shippingdetails = new mongoose.Schema({
    fullname:{
        type : String,
        require: true
    },
    email:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    pincode:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    payment:{
        type:String,
        require:true
    },
    phonenumber:{
        type:Number,
        require:true
    }
})

const shipping = new mongoose.Schema({
    deviceId:{
        type: String,
        require:true,
    },
    status:{
        type:String,
        require:true
    },
    grandtotal:{
        type:Number,
        require:true
    },
    time: {
        type: String,
        default: () => moment().tz("Asia/Kolkata").format("hh:mm A")
    },
    day: {
        type: String,
        default: () => moment().tz("Asia/Kolkata").format("YYYY-MM-DD")
    },
    shipping:[shippingdetails],
    items:[itemsschema]
})

const ShippingModel = mongoose.model('shipping',shipping)

module.exports = ShippingModel