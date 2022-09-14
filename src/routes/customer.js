const express=require('express')
const router=express.Router()
const validateBody=require('../middleware/validateBody')
const customerController=require('../controller/customer')
const {customerSchema}=require('../validator/customer')

router.get('/customer',(req,res)=> customerController.getInstance().getList(req,res))
router.get('/customer/:id',(req,res)=>customerController.getInstance().getOne(req,res))
router.post('/customer',validateBody(customerSchema),(req,res)=>customerController.getInstance().post(req,res))
router.put('/customer/:id',validateBody(customerSchema),(req,res)=>customerController.getInstance().put(req,res))
router.delete('/customer/:id',(req,res)=>customerController.getInstance().delete(req,res))


module.exports=router
