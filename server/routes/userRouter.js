const express=require('express')
const router=express.Router()

const {getUser,newUser,deleteUser,getUserById,updateUser}=require('../controllers/userControllers')

router.get('/',getUser)
router.post('/newuser',newUser)
router.get('/getuserbyid/:id',getUserById)
router.patch('/updateuser/:id',updateUser)
router.delete('/deleteuser/:id',deleteUser)


module.exports=router