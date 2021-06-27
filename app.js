const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname+"/date.js")


const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));
app.set("view engine","ejs")

const itemText = ["1111","2222","4444"];  // cant change to "const" have a "." after verbels
const workList = [];                     // cant change to "const" have a "." after verbels

app.get("/",function(req,res){
    const day = date.getDate();
    res.render("list",{listTitle:day,newListItem:itemText})
})

app.get("/work",function(req,res){
  res.render("list",{listTitle:"works",newListItem:workList});
})

app.get("/about",function(req,res){
  res.render("about");
});


app.post("/",function(req,res){
  const item = req.body.Item           // cant change to "const" have a "." after verbels
  console.log(req.body)
  if(req.body.listAdd === 'works'){
    workList.push(item)
    res.redirect("/work")
  }else{
    console.log(req.body)
    itemText.push(item)
    res.redirect("/")
  }
})
app.post("/delte",function(req,res){
  const item = req.body.Item           // cant change to "const" have a "." after verbels
  console.log(req.body)
  if(req.body.listDelte === 'works'){
    workList.pop(item)
    res.redirect("/work")
  }else{
    itemText.pop(item)
    res.redirect("/")
  }
})


app.listen(3000,function(){
  console.log("you conected to port 3000 now!!")
})
