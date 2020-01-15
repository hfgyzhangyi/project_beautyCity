const express=require("express");
var router=express.Router();
router.get("/",(req,res)=>{
	res.send({
		position:"上海市，闵行区，浦江镇 中国.",
		email:"724560502@qq.com",
		phone:"18221528042",
		message:"18221528042@163.com"
	});
})
module.exports=router;