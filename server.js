const express = require('express')
const app = express()
// css
/* app.use(express.static(__dirname+'/public'))
 */
// middleware
const accessMiddleware = (req,res,next)=>{
    var date = new Date(Date.now())
    var hour = date.getHours() 
    var day = date.getDay()

    if(((day >=1 && day<=5 )) && (hour>=9 && hour<17)){
        console.log('welcome')
        next();
    }else{
        console.log('we are closed')
        res.sendFile(__dirname + '/public/close.html')
    }
}


app.use(accessMiddleware)
app.use(express.static('public'))

/* app.get('/home.html',accessMiddleware,(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','home.html'))
})

app.get('/contactus.html',accessMiddleware,(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','contactus.html'))
})

app.get('/ourservices.html',accessMiddleware,(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','ourservices.html'))
}) */

app.listen(5000,(err)=>{
    if(err) throw err
    else console.log('server is running on port 5000')
})