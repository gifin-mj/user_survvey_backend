const mongoose=require('mongoose')

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.Mongo_DB_URI,{
            useNewURLParser:true,
            useUnifiedTopology:true 
        })
        console.log("Database Connected "+mongoose.connection.host);
    }
    catch(err){
        console.log(err);
    }
}
module.exports=connectDB