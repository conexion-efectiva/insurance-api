const joi=require('joi')

const insuranceSchema=joi.object({

    name:joi.string().required(),
    type:joi.string().required(),
    validad:joi.string().required(),
    expires:joi.string().required(),
    price:joi.number().required(),
    identi:joi.string().required(),
})

module.exports={insuranceSchema}