var express = require("express");
const bodyParser = require('body-parser')
var router = express.Router();
//const multer = require('multer') 
var movie = require("../model/movie_model");

const { request } = require("express");

/*const storage = multer.diskStorage({
  destination: function (request,file,callback){
      callback(null, './newmovie/upload/images');
  },

  filename: function(request,file,callback){
    callback(null,Date.now()+file.originalname);
  },
});
*/

/*const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 3,
  },
});*/


// GET all
router.get("/", (req, res) => {
    movie.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 1
router.get("/:_id", (req, res) => {
    movie.findById(req.params._id).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// POST (create new data)
router.post("/", async  (req, res) => {
  console.log(request.file);
  const objForInsert = new movie({
    name: req.body.name,
    img: req.body.img,
    vdo_ex: req.body.vdo_ex,
    vdo_main: req.body.vdo_main,
    img:request.file.filename,
  });

  objForInsert.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("เพิ่มข้อมูลเรียบร้อย");
  });
});

// PUT (update current data)
router.put("/:_id", (req, res) => {
    movie.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("อัพเดทข้อมูลเรียบร้อย");
  });
});

// DELETE (delete 1 data)
router.delete("/:_id", (req, res) => {
    movie.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("ลบข้อมูลเรียบร้อย");
  });
});

module.exports = router;
