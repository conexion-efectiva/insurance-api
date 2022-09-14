
const mongoose=require('mongoose')

const insuranceSchema=mongoose.Schema({
    name:String,
    type:String,
    validad:String,
    expires:String,
    price:Number,
    identi:String


})


const insuranceModel=mongoose.model('insurance',insuranceSchema)

module.exports=insuranceModel
