let express = require("express");

let router=express.Router()
router.get('/add',function(req,res){
res.send('人的添加')
})

module.exports 