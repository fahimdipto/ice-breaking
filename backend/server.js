import express from 'express'
import mongoose from "mongoose";
import {} from 'dotenv/config'
import cards from "./model/Cards.js";
import cors from 'cors'


//App Config
const app=express();

//Middleware
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

//API Endpoints
app.get('/',(req,res)=>{
    res.send('Hello to ice-breaking API');
})
app.post('/cards',(req,res)=>{
    const dbCard = req.body;
    cards.create(dbCard, (err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

app.get('/cards',(req,res)=>{
    cards.find( (err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

//DB Config
//Listener
const PORT = process.env.PORT;
console.log(process.env.ATLAS_URL);
console.log(PORT);
mongoose.connect(process.env.ATLAS_URL, {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>app.listen(PORT,() =>console.log(`Server Running on port ${PORT}`))
).catch((error)=> console.log(error.message));



