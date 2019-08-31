let express=require('express')
let app=express()

app.get('/getUser',(req,res)=>{
    res.json({name:'zfpx'})
})
app.listen(3000)