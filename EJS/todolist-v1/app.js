//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"\\date.js")

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let items = [];

app.get("/", function(req, res){
    
    let day = date();
    res.render("list", {dayOfWeek: day, newListItems: items});
    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //     case 1:
    //         day = "Monday";
    //     case 2:
    //         day = "Tuesday";
    //     case 3:
    //         day = "Wednesday";
    //     case 4:
    //         day = "Thursday";
    //     case 5:
    //         day = "Friday";
    //     case 6:
    //         day = "Saturday";
    // }
    // if (today.getDay() === 6 || today.getDay() === 0){
    //     var day = "Weekend!";
    // }
    // else {
    //     var day = "Weekday";
    // }
    // res.render("list", {dayOfWeek: day});
});

app.post("/", function(req, res){
    items.push(req.body.newItem);
    // console.log(item);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});