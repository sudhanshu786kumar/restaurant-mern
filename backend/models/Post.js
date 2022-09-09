const mongoose=require('mongoose')
const schema=mongoose.Schema;
const PostSchema=new schema({
    
    title:{
        type:String
    }
    ,
    data:{
        type:String
    },
    img:{
        type:String
    },
    price:{
        type:String
    },
    isveg:{
        type:Boolean
    }

});


module.exports=mongoose.model("PostSchema",PostSchema);

