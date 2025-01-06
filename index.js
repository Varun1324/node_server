const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    console.log("Server Running");
})

app.post("/register",(req,res)=>{
    console.log(res);
    const formdata = req.body;
    console.log(formdata);
    res.status(200).json({ message: 'successful!' });
})  

app.listen(3000,()=>{
    console.log("server running on port 3000");
})
