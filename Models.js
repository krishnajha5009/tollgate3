const mongoose = require('mongoose');
const ClaimSchema = new mongoose.Schema(
    {
        name: String,
        hospital:String,
        address:String,
        phone:Number,
        age:Number,
        author:String,
        distance:Number,
        policy: String,
        claims: String,
        status:{
            type:String, 
        },
        date: {
            type:Date,
            default:Date.now(),
        },
    }
);
module.exports=mongoose.model('Claim', ClaimSchema);