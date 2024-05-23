const {body,validationResult} =require('express-validator')
exports.registerValidation=[
    body("email","this format of email is not valid").isEmail(),
    body("password","this password is not strong").isStrongPassword({
        minLength:10,
        minUppercase:1,
        minLowercase:1,
        minNumbers:1,
        minSymbols:1
    })
]
exports.loginValidation=[
    body("email","this format of email is not valid").isEmail()
]
exports.PasswordValidation=[
    body("newpassword","this password is not strong").isStrongPassword({
        minLength:10,
        minUppercase:1,
        minLowercase:1,
        minNumbers:1,
        minSymbols:1
    })
]

exports.validation=(req,res,next)=>{
   
        const errors=validationResult(req)
        if (errors.isEmpty()){
            next()
        }
        else {
            res.status(400).send({errors:errors.array()})
        }
     
}