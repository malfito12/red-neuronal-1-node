const express=require('express')
const app=express()
const path=require('path')

//settings
app.set('port',process.env.PORT || 3000)
app.set('views',path.join(__dirname,'./views'))
app.engine('html',require('ejs').renderFile)
app.set('view engine','html')


//middlewares

//fails static


//routes
app.use('/',require('./models/indexRouter'))
app.use('/bootstrap',require('../node_modules/bootstrap/dist/js/bootstrap.bundle'))

//server

const port=app.get('port')
app.listen(port,()=>{
    console.log('server on port '+port)
})

