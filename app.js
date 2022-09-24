

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

items = ["Buy Food", "Cook Food", "Eat Food"];
workItems = [];
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

    today = new Date();

    options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    day = today.toLocaleDateString("en-US", options);

    
  
    res.render("list", {listTitle: day, newItem: items});

});

app.post("/", function(req, res){
    
item = req.body.newItem ;
console.log(req.body);
if(req.body.list === "Work"){

    workItems.push(item);
    res.redirect("/work");
}else {
    items.push(item);
res.redirect("/");
}



} );

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newItem: workItems});
});

app.get("/about", function(req, res){
    res.render("about");
    
});




app.listen(3000, function(){
    console.log("Server started on port 3000 BOSS");
})