let apimovie = "http://movie.app.ruk-com.cloud/api/name-movie/";
let clickNext = document.querySelector(".clickkk");
const { default: axios } = require("axios");
var movie = require("../model/movie_model");
var mongoose = require("mongoose");

mongoose.connect('mongodb+srv://admin:8QnwGw3c8yFnAfLU@cluster0.jixbg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
var Schema = new mongoose.Schema({
  name: String,
  img: String,
  vdo_ex: String,
  vdo_main: String,
})

var user =mongoose.model('name-movie',Schema)
// post_();

clickNext.addEventListener("click", function () {
  let namemovie = document.getElementById("name").value;
  let img = document.getElementById("img").value;
  let ex = document.getElementById("ex").value;
  let mainvdo = document.getElementById("mainvdo").value;

  app.post('/',function(req, res){
      new movie({
      name: req.namemovie,
      img: req.img,
      vdo_ex: req.ex,
      vdo_main: req.mainvdo,
    }).save(function(err,doc){
      if(err)res.json(err);
      else res.send('SuccessFully inserted')
    })
  });
  

  // axios.post("http://movie.app.ruk-com.cloud/api/name-movie",{
  //   name: namemovie,
  //   img: img,
  //   vdo_ex: ex,
  //   vdo_main: mainvdo,
  // })

  


  alert(namemovie + "<<<<");
  //   axios({
  //     method: "post",
  //     url: apimovie,
  //     data: {
  //       name: name,
  //       img: img,
  //       vdo_ex: ex,
  //       vdomain: mainvdo,
  //     },
  //   });

  //   let name = document.getElementById("name").value;
  //   let img = document.getElementById("img").value;
  //   let ex = document.getElementById("ex").value;
  //   let mainvdo = document.getElementById("mainvdo").value;
  //   let res = await axios.post(apimovie, {
  //     name: name_,
  //     img: img,
  //     vdo_ex: ex,
  //     vdo_main: mainvdo,
  //   });
  //   let data = res.data;
  //   alert(data);
});

// axios.post(
//   "http://movie.app.ruk-com.cloud/api/name-movie",
//   {
//     name: document.getElementById("name"),
//     img: document.getElementById("img"),
//     vdo_ex: document.getElementById("ex"),
//     vdo_main: document.getElementById("mainvdo"),
//   },
//   {
//     // Config
//   }
// );

//   axios
//     .post(apimovie, obj)
//     .then(function (response) {
//       console.log("yeser");
//     })
//     .catch(function (error) {
//       console.log(error);
//     });<a href=javascript:history.back(1)>ย้อนกลับ</th></a>