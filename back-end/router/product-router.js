const express=require("express")
const { addProduct, getProducts, deleteProduct, updateProduct, getUserProduct, getDetailProduct } = require("../controller/product-controller")
const { isauth } = require("../middelware/isauth")

const productRouter=express.Router()

productRouter.post("/add",isauth,addProduct)
productRouter.get("/get",getProducts)
productRouter.delete("/delete/:id",isauth,deleteProduct)
productRouter.put("/update/:id",isauth,updateProduct)
productRouter.get("/getmyproduct",isauth,getUserProduct)
productRouter.get("/detail/:id",getDetailProduct)
module.exports=productRouter