const customerService = require("../service/customer");

/**
 * @type customerController
 */
let instance = null;

class customerController {
  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

  async getList(req, res) {
    const customer = await customerService.getInstance().list();
    if (customer == []) {
      res.status(404).json({ message: "Not List" });
      return;
    }
    res.json(customer);
  }
  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

  async getOne(req, res) {
    const customer = await customerService.getInstance().get(req.params.id);
    if (customer == null) {
      res.status(404).json({ message: "Id no encontrado" });
      return;
    }
    res.json(customer);
  }

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

  async put(req, res) {
    const existCustomer = await customerService.getInstance().get(req.params.id);
    if (existCustomer == null) {
      res.status(404).json({ message: "Not found" })
    }
    let customer={...req.body,_id:req.params.id}
    customer=await customerService.getInstance().update(customer)
    res.json(customer)
  }

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

    async delete(req,res){
        const existCustomer = await customerService.getInstance().get(req.params.id)
        if (existCustomer == null) {
            res.status(404).json({ message: "Not found" })
          }
          await customerService.getInstance().delete(req.params.id)
          res.json(existCustomer)
    }

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

  async post(req,res){
    const customer=await customerService.getInstance().insert(req.body)
    res.json(customer)
}

  static getInstance() {
    if (instance == null) {
      instance = new customerController();
    }

    return instance;
  }
}


module.exports=customerController