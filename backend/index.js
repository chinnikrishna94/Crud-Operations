const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const router = require('./routes/contactRoutes')
const bodyParser = require('body-parser')
const cors = require('cors')


const app= express();
const port = 5000

dotEnv.config();

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// app.use(cors({
//     origin: "http://localhost:5000",
//     methods: ['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type']
// }))


app.get('/',(req,res)=>{
    try{
        res.send("this is")
    }catch(error){
        console.log(error)
    }
})


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('mongodb connected successfully')
}).catch((error)=>{
    console.log(error)
})

app.listen(port,()=>{
    console.log('server started')
})

app.use('/contact',router)