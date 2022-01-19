const express = require("express");
const bodyParser = require("body-parser");
const date=require(__dirname + "/date.js");

const app= express();

app.set("view engine" , "ejs"); // telling to use ejs
app.use(bodyParser.urlencoded({extended:true})); 
app.use(express.static("public")); // for using public static files

var items=["buy books","faltu bakwass","dimag kharab"];
var workitems =[];
app.get("/",function(req,res){

    var currentday= date.getDay();
    
    res.render("list", {listname: currentday, newitems:items});

    //var day="";
    // switch(currentday)
    // {
    //     case 1 :
    //         day="monday"
    //         break;
    //     case 2 :
    //         day="Tuesday"
    //         break;
    //     case 3 :
    //         day="wednesday"
    //         break;
    //     case 4 :
    //         day="thrusday"
    //         break;
    //     case 5 :
    //         day="friday"
    //         break;
    //     case 6 :
    //         day="saturday"
    //         break;
    //     case 7 :
    //         day="sunday"
    //         break;
    //     default:
    //         console.log("Error!! today day is ");
    // }
   
    
});
app.post("/",function(req,res){
    console.log(req.body); // first word dera h console pe list name ka 
    item= req.body.itemName;
    if(req.body.p==="Work"){
        workitems.push(item);
        res.redirect("/work"); 
    }else{
        items.push(item);
        res.redirect("/");
    }
    
    
});

app.get("/work",function(req,res){
    
    res.render("list",{listname:"Work List", newitems:workitems});
});

// app.post("/work",function(req,res){
//     item= req.body.itemName;
//     workitems.push(item);
// });

app.listen(3000,function(){
    console.log("Server Started");
});