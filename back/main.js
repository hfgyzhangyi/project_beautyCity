const express=require("express");
const bodyParser=require("body-parser");
const connectRouter=require("./router/connect.js");
var server=express();
server.listen(3000);
server.all('*',function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
	next();
});
server.use(express.static(__dirname+"/public"));
server.use(bodyParser.urlencoded({
	extended:false
}));
server.use("/connect",connectRouter);