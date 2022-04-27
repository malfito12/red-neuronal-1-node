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
app.use(express.static('.'))
app.use('/views',express.static(path.join(__dirname,'./views')))
app.use('/bootstrap',express.static(path.join(__dirname,'../node_modules/bootstrap/dist/js')))
app.use('/jquery',express.static(path.join(__dirname,'../node_modules/jquery/dist')))


//routes
app.use('/',require('./models/indexRouter'))
app.use('/',require('./models/secondRouter'))

//server

const port=app.get('port')
app.listen(port,()=>{
    console.log('server on port '+port)
})

