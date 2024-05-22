
const express = require('express')
const app = express()
const cors=require("cors")
const {default:mongoose}=require("mongoose")
const bodyParser = require('body-parser')

require("dotenv").config()

PORT=process.env.PORT || 3000
DB=process.env.DB_URL

app.use(cors());
app.use(bodyParser.json())
bodyParser.urlencoded({extended: true })




app.get('/', (req, res) => {
  res.send('Hello World!')
})



mongoose.connect('mongodb+srv://bd82qawen:aysel123@cluster0.ux9jpnt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected!')
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
      })
  } );



  const { Schema } = mongoose;

const productSchema = new Schema({
  title: String, 
  price: Number,
  image: String,
  isNewproduct:Boolean,
  discountPercentage:Number

 
});
const Product = mongoose.model('Product', productSchema);
//   get all

app.get("/products",async(req,res)=>{
    
    try {
        const products= await Product.find({})
        if (products.length) {
            res.status(200).send({message:"success",data:products})
            
        } else {
            res.status(201).send({message:"data is empty"})
        }
    } catch (error) {
        res.status(500).send({message:error.message})
    }
})

app.get("/products/:id",async(req,res)=>{
    const {id}=req.params
    try {
        const product= await Product.findById(id)
        if (product) {
            res.status(200).send({message:"success",data:product})
            
        } else {
            res.status(201).send({message:"data is empty"})
        }
    } catch (error) {
        res.status(500).send({message:error.message})
    }
})

app.delete("/products/:id",async(req,res)=>{
    const {id}=req.params
    try {
        const deletedProduct= await Product.findByIdAndDelete(id)
        const products=await Product.find({})
        res.status(200).send({message:"succes",deleted:deletedProduct,allProduct:products})
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