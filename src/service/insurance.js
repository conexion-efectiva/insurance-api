const insuranceModel=require('../persistence/insurance')

/**
 * @type insuranceService
 */
 let instance = null

 class insuranceService{

    async get(id){
        return await insuranceModel.find({_id:id})
    }

    async list(){
        return await insuranceModel.find()
    }

    async update(insu){
        await insuranceModel.updateOne({_id:insu._id},insu)
        return insu
    }

    async insert(insu){
        const result=await insuranceModel.create(insu)
        return result.toObject()
    }

    async delete(id){
        return await insuranceModel.deleteOne({_id:id})
        
    }

    static getInstance() {
        if (instance == null) {
          instance = new insuranceService()
        }
    
        return instance
      }
     }


module.exports=insuranceService
 