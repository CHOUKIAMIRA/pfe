const bcrypt=require('bcrypt')
const jwt=require("jsonwebtoken")
const users=require("../model/model-user")
exports.register = async(req,res)=>{
    const {np,email,password}=req.body //distraction
try {
    const found=await users.findOne({email})
    console.log(found)
    if(found){
        res.status(400).send({errors:[{msg:"this email is exist you need to login"}]})
    }
    else {
        const user=new users(req.body)
        const salt=10 //force de hashage
        const hashpassword=bcrypt.hashSync(password,salt)
        user.password=hashpassword
        const secretkey="amira123"
        const token = jwt.sign({id:user._id},secretkey)
        await user.save()
        res.status(200).send({msg:"registred success",user,token})
    }
} catch (error) {
    res.status(500).send({msg:"register failed",error})
    
}
}
exports.login = async(req,res)=>{
    const {email,password}=req.body
try {
    const found=await users.findOne({email})
    if (!found){
        res.status(400).send({errors:[{msg:"email is not exist you need to register first"}]})
    }
    else {
        const match=bcrypt.compareSync(password,found.password)
        if (!match){
            res.status(400).send({errors:[{msg:"password incorrect"}]})
        }
        else{
            const secretkey="amira123"
            const token = jwt.sign({id:found._id},secretkey,{expiresIn:"6h"})
            res.status(200).send({msg:"login is successfully",token,user:found})

        }
    }
} catch (error) {
    res.status(500).send({msg:"login failed",error})
}
}
exports.getcurrent=async(req,res)=>{
try {
    const user = req.user
    res.status(200).send({user})
} catch (error) {
    res.status(500).send({error})
}
}
exports.updateUsers=async(req,res)=>{
    
    try {   
        const user=await users.findById(req.params.id)
        if (req.body.newpassword) {
            const {oldpassword,newpassword}=req.body
            
            const match=bcrypt.compareSync(oldpassword,user.password)
            if(!match){
                res.status(400).send({errors:[{msg:"password incorrect"}]}) 
            }else{
const hashnewpassword=bcrypt.hashSync(newpassword,10)
user.password=hashnewpassword
await user.save()
res.status(200).send({msg:"la modification se fait avec succes "})
            }
            
       
        }else{
    await  users.updateOne({_id:user._id},{$set : req.body})
    res.status(200).send({msg:"la modification se fait avec succes "})}
    } catch (error) {
        res.status(500).send({msg:"la modification a echoué "}) 
    }
}

exports.getusers =async (req,res) =>{
    try {
     const allusers=await users.find()   
     res.status(200).send({msg:"users getted",allusers})
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"users not getted",error})
    }
}

