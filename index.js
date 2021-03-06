var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var mongo_uri ='mongodb+srv://admin:vCc8NJ4QMPNzYlSc@cluster0.jixbg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.Promise = global.Promise;
mongoose.connect(mongo_uri, { useNewUrlParser: true ,useUnifiedTopology: true}).then(
  () => {
    console.log("[success] task 2 : connected to the database ");
  },
  (error) => {
    console.log("[failed] task 2 " + error);
    process.exit();
  }
);

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("[success] task 1 : listening on port " + port);
});

app.get("/", (req, res) => {
  res.status(200).send("หน้าแรกของ api express");
});

app.post('/', (req, res)=>{

  console.log(JSON.stringify(req.fields));
});

// path สำหรับ MongoDB ของเรา
var users = require("./router/users_router");
var movie = require("./router/movie_router");

app.use("/api/users", users);
app.use("/api/name-movie", movie);

app.use((req, res, next) => {
  var err = new Error("ไม่พบ path ที่คุณต้องการ");
  err.status = 404;
  next(err);
});


