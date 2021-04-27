const mongoose = require('mongoose')
const mongoPath ='mongodb+srv://admin:vfdu5uskLys7hSM8@cluster0.jixbg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const options ={
    useNewUrlParser:true,
    useUnifiedTopology:true
  }
module.exports = async()=>{
    await mongoose.connect(mongoPath,options)
    
    return mongoose
}
