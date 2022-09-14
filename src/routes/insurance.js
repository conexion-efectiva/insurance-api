const express=require('express')
const router=express.Router()
const validateBody=require('../middleware/validateBody')
const insuranceController=require('../controller/insurance')
const {insuranceSchema}=require('../validator/insurance')

router.get('/insurance',(req,res)=> insuranceController.getInstance().getList(req,res))
router.get('/insurance/:id',(req,res)=>insuranceController.getInstance().getOne(req,res))
router.post('/insurance',validateBody(insuranceSchema),(req,res)=>insuranceController.getInstance().post(req,res))
router.put('/insurance/:id',validateBody(insuranceSchema),(req,res)=>insuranceController.getInstance().put(req,res))
router.delete('/insurance/:id',(req,res)=>insuranceController.getInstance().delete(req,res))


module.exports=router
