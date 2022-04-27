const express=require('express')
const router=express.Router()
const indexController=require('../controllers/secondController')


router.get('/second',indexController.secondPage)

module.exports=router