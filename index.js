const express = require('express')
const app = express()

const path = require("path")
const fs = require('fs')

const { Mongoose } = require('mongoose')
const mongo =require('./mongo')

const { getMaxListeners } = require('./schemas/user_schemas')
const userSchema =require('./schemas/user_schemas')


app.get('/', (req, res) => {
  const filename = path.join(__dirname, 'index.html')
  const indexData = fs.readFileSync(filename)
  res.end(indexData)
  //res.send('hello world')
})

/*const handler = (req, res) => {
  const filename = path.join(__dirname, 'index.html')
  const indexData = fs.readFileSync(filename)
  res.end(indexData)
}
const server = http.createServer(handler)*/

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
      /*const result = await userSchema.find({
        //field:'value'ตัวอย่าง >> 
        password:'test'
      })*/
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

const app1 =({
  data() {
      return {
          product: 'Socks',
          // Solution
          description: 'A warm fuzzy pair of socks.' 
          // Solution
      }
  }
})


app.listen(3000, function () {
  console.log("server running on port 3000");
})