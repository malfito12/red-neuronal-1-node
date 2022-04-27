const express=require('express')
const router=express.Router()
const indexController=require('../controllers/indexController')


router.get('/',indexController.indexPage)
router.get('/first',indexController.firstPage)
router.get('/second',indexController.secondPage)
router.get('/third',indexController.thirdPage)
router.get('/fourth',indexController.fourthPage)
router.get('/fifth',indexController.fifthPage)
router.get('/sixth',indexController.sixthPage)
router.get('/seventh',indexController.seventhPage)
router.get('/eighth',indexController.eighthPage)
router.get('/nineth',indexController.ninethPage)
router.get('/tenth',indexController.tenthPage)

module.exports=router