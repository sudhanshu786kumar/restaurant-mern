const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cors=require('cors');
const routes=require('./Routes/Routes')

app.use(cors());
app.use(express.json());
app.use('/foodie',routes)
mongoose.connect("mongodb+srv://dummy:njjQ5ild9dLQSoD3@cluster0.3orb9qh.mongodb.net/?retryWrites=true&w=majority").then(res=>console.log("connected")).then(()=>{
    app.listen(5000)
}).catch((err)=>console.log(err));