const express=require('express')
const cors=require('cors')
require('dotenv').config()
var cookieParser = require('cookie-parser');

const connectDB=require('./server/database/database')
const userRouter=require('./server/routes/userRouter')

const PORT=process.env.PORT

const app=express()
app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use('/',userRouter)

connectDB()
app.listen(PORT,()=>{
    console.log(`Running on localhost:${PORT}`);
})
