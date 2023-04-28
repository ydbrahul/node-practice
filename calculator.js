const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({e}))//we use urlencoded() when we want to parse data when it comes from html form



app.get("/",(req,res)=>{
   // console.log(__dirname+"/bmiCalculator.html");
    res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/",(req,res)=>{
    console.log("post");
    res.send("Thanks for posting that");
}
);
app.listen(3000,()=>{
    console.log("spin");
});