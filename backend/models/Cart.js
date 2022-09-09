const mongoose=require('mongoose')
const schema=mongoose.Schema;
const CartSchema=new schema({
    userId:{
type:String
    },
    title:{
        type:String
    }
    ,
    data:{
        type:String
    },
    price:{
        type:String
    },
    isveg:{
        type:Boolean
    }

});


module.exports=mongoose.model("CartSchema",CartSchema);

