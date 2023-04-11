//jshint eversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

// console.log(date());

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    // let today = new Date();
    // // var currentDay = today.getDay();
    // // var day = "";

    // let options = {
    //     weekday: "long",
    //     day: "numeric",
    //     month: "long"
    // };

    // let day = today.toLocaleDateString("en-US", options);
    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thurday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;
    //     default:
    //         console.log("Error: Current day is eual to: " + currentDay);
    // }

    //if (currentDay === 6 || currentDay === 0) { //6 means saturday and 0 means sunday
    //res.write("<h1>Yay its the weekend!</h1>");
    //day = "Weekend";
    //res.sendFile(__dirname+"/weekend.html");
    //} else {
    //for sending more than one line
    // res.write("<p>It is not the weekend</p>");
    // res.write("<h1>Boo! I have to work!</h1>");
    // res.send();

    //res.sendFile(__dirname+"/index.html")
    //day = "Weekday";
    //res.sendFile(__dirname+"/weekday.html");
    //}
    const day = date.getDate();
    res.render("list", {
        listTitle: day,
        newListItems: items
    });   //rendering a file that is in views folder with extension .ejs
});

app.post("/", function (req, res) {
    //console.log(req.body);
    const item = req.body.newItem;
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");  //redirect to the home route which is app.get
    }
    //console.log(Item1);
    //res.render("list", { newListItem: Item1 });
});

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
    res.render("about");
});

// app.post("/work", function (req, res) {
//     let item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");
// })

app.listen(3000, function () {
    console.log("Server started on port 3000");
})