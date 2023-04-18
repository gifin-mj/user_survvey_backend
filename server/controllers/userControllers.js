
const UserModel=require('../models/userModel')



module.exports={

    getUser:async(req,res)=>{
        
        try{

            let users=await UserModel.find()
            res.status(200).json(users)

        }
        catch(error){
            res.status(400).json({message: error.message});
        }

}

,

    newUser:async(req,res)=>{
        const{name,age,username}=req.body.userdata
        const user=new UserModel({
            name:name,
            age:parseInt(age),
            username:username
        })
        try{
            const addeduser=await user.save()
            res.status(201).json(addeduser);
        }
        catch(error){
            res.status(400).json({message: error.message});
        }
}

,

    deleteUser:async(req,res)=>{
        let id = req.params.id
        try{
            const deleteduser=await UserModel.findByIdAndDelete(id)
            res.status(200).json({deleteduser})
        }
        catch(error){
            res.status(400).json({message:error.message})
        }
    },

    getUserById:async(req,res)=>{
        let id=req.params.id
        try{
            const edituser=await UserModel.findById(id)
            res.status(200).json({edituser})
        }
        catch(err){
            res.status(400).json({message:err.message})
        }
    },
    updateUser:async(req,res)=>{
        let id =req.params.id
        const {name,age,username}=req.body.userdata
        let user={
            name:name,
            age:parseInt(age),
            username:username
        }
        try{
            let updateduser=await UserModel.findByIdAndUpdate(id,user)
            res.status(200).json({updateduser})
        }
        catch(err){
            res.json(400).json({message:err.message})
        }
    }

}

