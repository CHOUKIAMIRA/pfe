const express=require("express")
const { register, login, getcurrent, updateUsers, getBoutique, getusers } = require("../controller/controller")
const { registerValidation, validation, loginValidation, PasswordValidation } = require("../middelware/validation")
const { isauth } = require("../middelware/isauth")
const userRouter=express.Router()
userRouter.post("/register",registerValidation,validation,register)
userRouter.post("/login",loginValidation,validation,login)
userRouter.get("/current",isauth,getcurrent)
userRouter.put("/update/:id", isauth,updateUsers)
userRouter.put("/updatepassword/:id", isauth,PasswordValidation,validation,updateUsers)
userRouter.get("/boutique",getusers)

module.exports=userRouter