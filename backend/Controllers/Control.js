const Post =require("../models/Post");
const User=require("../models/user");
const bcrypt=require("bcryptjs");
const cart=require('../models/Cart')
const postData=async(req,res)=>{
    const{title,data,price,isveg}=req.body
    let datas;
try{
    datas=await new Post({
        title,
        data,
        img:req.file.originalname,
        price,
        isveg
    })
    await datas.save()
}catch(err){
    console.log(err)
}
if(!datas){
    res.status(500).json({
        msg:"data not uploaded"
    })
}return res.status(201).json(datas)
}



const CartData=async(req,res)=>{
    const{title,data,price,isveg}=req.body
    let datas;
try{
    datas= new cart({
        title,
        data,
        price,
        isveg
    })
    await datas.save()
}catch(err){
    console.log(err)
}
if(!datas){
    res.status(500).json({
        msg:"data not uploaded"
    })
}return res.status(201).json(datas)
}






const getData=async(req,res)=>{

    let data=await Post.find()
    if(!data){
        res.status(401).json({
            msg:"no data available"
        })
    }return res.status(200).json(
        data
    )
}

const getCart=async(req,res)=>{
    let data=await cart.find()
    if(!data){
        res.status(401).json({
            msg:"no data available"
        })
    }return res.status(200).json(
        data
    )
}

const DltCart=async(req,res)=>{
    let data;
    let id = req.params.id
    try {
        data = await cart.findByIdAndRemove(id)
    }
    catch (err) {
        console.log(err)
    }
    if (!data) {
        res.status(404).json({
            msg: "No Such Data"
        })
    } else {
        res.status(201).json(data)
    }
}

const UserAdd=async(req,res)=>{
    const{name,email,pwd,contact}=req.body;
    let datas;
    try{
        datas= new User({
            name,email,pwd,contact
        });
        let salt = await bcrypt.genSalt(10);
        datas.pwd = await bcrypt.hash(datas.pwd, salt);

       await datas.save();
    }catch(err){
        console.log(err)
    }
   if(!datas){

    res.status(400).json({
        msg:"failed"
    })
   }return res.status(201).json(datas)
}

const AddCart=async(req,res)=>{
    let id=req.params.id
   let cardItem=await Post.findById(id);
   let userId=await User.findOne({id})
 try{
    let userID=await User.findByIdAndUpdate(id,{
        cart:cardItem
    })
}
catch(err){
    console.log(err)
}


    
}


const login = async(req,res)=>{
    const{email,pwd}=req.body;
const user=await User.findOne({email:email});
if(user){
    const upwd=await bcrypt.compare(pwd,user.pwd);
    if(upwd){
        res.status(200).json({
            user
        })
    }else{
        res.status(400).json({
            err:"failed"
        })
    }
  
}else{
    res.status(401).json({
        err:"does not exist"
    })
}
};

const getUser=async(req,res)=>{
let id=req.params.id
    let data=await User.find()
    if(data){
        return res.json(data)
    }else{
        res.status(404).json({
            err:"error"
        })
    }
}
exports.postData=postData;
exports.getData=getData;
exports.UserAdd=UserAdd;
exports.login=login;
exports.getUser=getUser;
exports.CartData=CartData;
exports.getCart=getCart;
exports.DltCart=DltCart;