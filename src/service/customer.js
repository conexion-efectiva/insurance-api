const customerModel=require('../persistence/customers')

/**
 * @type customerService
 */
 let instance = null

class customerService{

    async get(id){
        return await customerModel.find({_id:id})
  }

  async list(){
    return await customerModel.find()
  }

  async insert(customer){
    const result=await customerModel.create(customer)
    return result.toObject()
  }

  async update(customer){
    await customerModel.updateOne({_id:customer._id},customer)
    return customer
  }

  async delete(id){
    return await customerModel.deleteOne({_id:id})
  }

    static getInstance() {
        if (instance == null) {
          instance = new customerService()
        }
    
        return instance
      }
}

module.exports=customerService