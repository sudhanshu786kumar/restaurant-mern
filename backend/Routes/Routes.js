const express=require('express');

const router=express.Router();

const schema=require("../models/Post");

const Controller=require("../Controllers/Control");
const multer = require('multer');

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'../frontend/public')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
})

const upload=multer({storage:storage});

router.post("/poste",upload.single("img"),Controller.postData);
router.post("/cart",Controller.CartData);
router.get("/cart",Controller.getCart)
router.get("/",Controller.getData);
router.post("/signup",Controller.UserAdd);
router.post("/signin",Controller.login);
router.get("/getuser",Controller.getUser);
router.delete("/delete/:id",Controller.DltCart);
//router.delete("/deletec/:id",Controller.removeC);



module.exports=router


