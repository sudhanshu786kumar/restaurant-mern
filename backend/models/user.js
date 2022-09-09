const mongoose=require('mongoose')
const schema=mongoose.Schema;
const UserSchema=new schema({
    
    name:{
        type:String
    }
    ,
    email:{
        type:String
    },
    pwd:{
        type:String
    },
    contact:{
        type:String
    },
   
    
  

});


module.exports=mongoose.model("UserSchema",UserSchema);

