var mongoose = require("mongoose");

var movie_schema = mongoose.Schema(
    {
      name: {
        type: String,
      },
      img: {
        type: String,
      },
      vdo_ex: {
        type: String,
      },
      vdo_main: {
        type: String,
      },
    },{
      collection: "name-movie",
  });
  var name_movie =mongoose.model("name-movie",movie_schema)

  module.exports = name_movie;
