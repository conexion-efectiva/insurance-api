const mongoose=require('mongoose')

const customerSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    birthDate:String,
    email:String,
    phone:String,


})

const customerModel=mongoose.model('customer',customerSchema)
module.exports=customerModel