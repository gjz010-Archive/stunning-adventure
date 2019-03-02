const express=require('express');


const app=express();
const bodyParser=require('body-parser')
app.use(bodyParser.json());
app.post("/", (req, res)=>{
    console.log(req);
    res.json({"message": "你想要闯进金山冒险，但是被警察赶了出来。"});
})

app.listen(6666);
