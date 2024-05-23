const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    np:{type:String,required:true},
    email:String,
    password:String,
    phone:String,
    image:String,
    imageboutique:String,
    couvertureboutique:String, 
    nomboutique:String,
    adresse:String,
    adresseboutique:String,
    favoris:{type:Array,default : []},
    panier:{type:Array,default : []},
    commandeachteur:{type:Array,default : []},
    commandevendeur:{type:Array,default : []}
}
)
module.exports=mongoose.model("users",userSchema)