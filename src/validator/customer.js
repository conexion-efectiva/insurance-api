const joi=require('joi')

const customerSchema=joi.object({

    firstName:joi.string().required(),
    lastName:joi.string().required(),
    birthDate:joi.string().required(),
    email:joi.string().required(),
    phone:joi.string().required(),
})

module.exports={customerSchema}