const express = require('express')
const app = express()

const { Mongoose } = require('mongoose')
const mongo =require('./mongo')

const { getMaxListeners } = require('./schemas/user_schemas')
const userSchema =require('./schemas/user_schemas')


app.get('/', (req, res) => {
  res.send('hello world')
})

const connectToMongoDB= async ()=>{
  await mongo().then( async(Mongoose) =>{
    try{
      console.log('Conmected to mongodb!')

      // เพิ่ม data //
      /*const user ={
        email:'test3@gmail.com',
        username:'test3',
        password:'test3'
      }
      await new userSchema(user).save()*/

      // ค้นหา //
      const result = await userSchema.find({
        //field:'value'ตัวอย่าง >> 
        password:'test'
      })
      //console.log('Result:',result)

      //updateOne คือ เปลียนแค่ตัวบนสุด ,updateMany คือ เปลียนทุกอันที่ค้นหาเจอ //
      /*await userSchema.updateOne(
        {
          username:'test',
        },
        {
          username:'testupdate'
        }
      )*/

      //ลบ data //
      /*await userSchema.deleteOne({
        //password:'test',
      })*/

    } finally{
      Mongoose.connection.close()
    }
  })
}
connectToMongoDB()

app.listen(3000, function () {
  console.log("server running on port 3000");
})