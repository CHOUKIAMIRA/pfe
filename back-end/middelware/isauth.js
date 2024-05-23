const jwt=require("jsonwebtoken");
const users=require("../model/model-user")
exports.isauth=async(req,res,next)=>{
    const token=req.header("token")
    try {
     const secretkey="amira123" 
     const decode=jwt.decode(token,secretkey)
     console.log(decode)
     if (decode){
        const user=await users.findOne({_id:decode.id}) 
        req.user =user 
        next()
     }
     else{
        res.status(400).send({msg:"user not found"})
     }
    
    } catch (error) {
        res.status(500).send({msg:"user not found",error})
    }
}