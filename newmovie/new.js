const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
/*app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));*/

var mongo_uri ='mongodb+srv://admin:8QnwGw3c8yFnAfLU@cluster0.jixbg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.Promise = global.Promise;
mongoose.connect(mongo_uri, { useNewUrlParser: true ,useUnifiedTopology: true})


const addmovie_schema = {
    name: String,
    img :String,
    vdo_ex:String,
    vdo_main:String,
  };



  const addmovie = mongoose.model("name-movie", addmovie_schema);

  app.post("/", function (req, res) {
   let NewMem = new addmovie({
              name: req.body.name,
              img: req.body.img,
              vdo_ex: req.body.ex,
              vdo_main: req.body.mainvdo,
            });
            NewMem.save();
  
  });
  app.listen(3000, function () {
    console.log("server running on port 3000");
  });