const express = require('express')
const app = express()
const cors=require("cors")
const mongoose=require("mongoose")
const bodyParser = require('body-parser')
const dotenv = require("dotenv");
dotenv.config();

PORT=process.env.PORT || 3000
const DB = process.env.DB_URL


bodyParser.urlencoded({extended: true})
app.use(bodyParser.json())
app.use(cors());


mongoose.connect(DB)
  .then(() => {
    console.log('Connected!');
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
      })
  })
    

  const { Schema } = mongoose;

const productSchema = new Schema({
  title: String, 
  image: String,
  price: Number,
  description:String
 
  },
  {
    timestamps:true
  }
);


const Product = mongoose.model('Product', productSchema);


// get all


app.get("/products",async(req,res)=>{
    try {
        const products=await Product.find({})
       
        if (products.length>0) {
            res.status(200).send({message:"success",data:products})            
        } else {
            res.status(201).send({message:"data is empty "})
        }
        
    } catch (error) {
        res.status(500).send({message:error.message})
        
    }
})

app.get("/products/:id",async(req,res)=>{
    const {id}=req.params
    try {
        const product=await Product.findById(id)
       
        if (product) {
            res.status(200).send({message:"success",data:product})            
        } else {
            res.status(201).send({message:"data is empty "})
        }
        
    } catch (error) {
        res.status(500).send({message:error.message})
        
    }
})


app.delete("/products/:id",async(req,res)=>{
    const {id}=req.params
    try {
        const deletedroduct=await Product.findOneAndDelete(id)
        const products=await Product.find({})
        res.status(200).send({message:"success",deletedroduct:deletedroduct,allProduct:products})            
    } catch (error) {
        res.status(500).send({message:error.message})
        
    }
})


app.post("/products",async(req,res)=>{
    try {
        const newProduct=new Product(req.body)
        console.log(req.body);
   await newProduct.save()
       res.status(201).send({message:"success",data:newProduct})            
    } catch (error) {
        res.status(500).send({message:error.message})
        
    }
})



