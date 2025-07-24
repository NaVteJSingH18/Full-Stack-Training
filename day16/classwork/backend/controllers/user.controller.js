const { userModel } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt =require("jsonwebtoken");

const userSignup =async(req,res)=>{
    const {name, email , password, phoneNumber, age} = req.body;
    console.log(req.body);
    

    const userExist = await userModel.findOne({email});

    if(userExist){
        return res.status(400).send("User already exists!");
    }
    

    try {
        bcrypt.hash(password,7,async(err, hash)=>{
            if (err) {
                return res.status(400).send("Error while hashing!");
            } else {
                const user = new userModel({name, email, password:hash, phoneNumber, age});

                await user.save();
                res.status(200).send("Userdata successfully stored in DB");
            }
        });
        
        
    } catch (error) {
        res.status(400).send({error:error});
    }
}
const userLogin =async(req,res)=>{
    const { email , password} = req.body;
    console.log(req.body);
    

    const userExist = await userModel.findOne({email});

    if(!userExist){
        return res.status(400).send("User does not exist...");
    }
    try {
        bcrypt.compare(password, userExist.password,async(err, result) =>{
       const token = jwt.sign( { userID: userExist._id },'RB',{ expiresIn: '1h' });
           
            if(!result){
                return res.status(401).send({error: "Error while hashing"});
            }else{
                return res.status(200).send({msg:"user logged in successful",token:token});
            }
        
});   
    } catch (error) {
        res.status(400).send({error:error.message});
    }
}



// const userLogin =()=>{

// // }

module.exports = {
    userSignup,userLogin
    
}





// bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
//  myPlaintextPassword- userpass
//  saltRounds- pass pass hardness

// Store hash in your password DB.
// });