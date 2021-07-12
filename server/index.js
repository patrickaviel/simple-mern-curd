const express = require('express');
const app = express();
const mongoose = require('mongoose');
const FoodModel = require('./models/Food')

app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin@crud.ytqnu.mongodb.net/food?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get("/", async (req,res)=>{
    const food = new FoodModel({foodName:"Orange", daysSinceIAte:5});

    try{
        await food.save();
        res.send("Inserted Data.");
    }catch(err){
        console.log(err);
    }
});

app.listen(3001,()=>{
    console.log("Server running on Port 3001...");
});