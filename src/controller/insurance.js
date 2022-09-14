const insureService=require('../service/insurance')

/**
 * @type insuranceController
 */
let instance = null;

class insuranceController {
  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

  async getList(req, res) {
    const insurance = await insureService.getInstance().list();
    if (insurance == []) {
      res.status(404).json({ message: "Not List" });
      return;
    }
    res.json(insurance);
  }
  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

  async getOne(req, res) {
    const insurance = await insureService.getInstance().get(req.params.id);
    if (insurance == null) {
      res.status(404).json({ message: "Id no encontrado" });
      return;
    }
    res.json(insurance);
  }

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

  async put(req, res) {
    const existInsurance = await insureService.getInstance().get(req.params.id);
    if (existInsurance == null) {
      res.status(404).json({ message: "Not found" })
    }
    let insurance={...req.body,_id:req.params.id}
    insurance=await insureService.getInstance().update(insurance)
    res.json(insurance)
  }

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

    async delete(req,res){
        const existInsurance = await insureService.getInstance().get(req.params.id)
        if (existInsurance == null) {
            res.status(404).json({ message: "Not found" })
          }
          await insureService.getInstance().delete(req.params.id)
          res.json(existInsurance)
    }

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

  async post(req,res){
    const insurance=await insureService.getInstance().insert(req.body)
    res.json(insurance)
}

  static getInstance() {
    if (instance == null) {
      instance = new insuranceController();
    }

    return instance;
  }
}


module.exports=insuranceController