const mongoose=require("mongoose")
const productSchema=new mongoose.Schema({
    title:{type:String,required:true},
    price:Number,
    description:String,
    image:{type:Array,default : []},
    promo:Number,
    categorie:String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
}, {
    timestamps:true
})
module.exports=mongoose.model("products",productSchema)