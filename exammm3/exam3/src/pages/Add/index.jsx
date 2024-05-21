import React from 'react'
import { usePostProductMutation } from '../../component/services/productApi'
import { Link, useNavigate } from "react-router-dom"
import addFormValidations from '../../validations/addFormValidations'
import TextField from '@mui/material/TextField';
import {useFormik} from 'formik'

const Add = () => {

  const[postProduct,refetch]=usePostProductMutation()
  const navigate=useNavigate()

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      price: '',
      image:''
    },
    onSubmit: async values => {
    console.log(values);
    const response=await postProduct(values);
    console.log("response",response);
    await refetch()
    navigate("/")
    },
    validationSchema:addFormValidations
  });
  return (
    <>
 <div className="container">
 <form onSubmit={formik.handleSubmit} style={{display:"flex",flexDirection:"column",gap:"20px"}}>

<TextField
  id="title"
  name="title"
  type="text"
  onChange={formik.handleChange}
  value={formik.values.title}
/>
{formik.touched.title && formik.errors.title &&(
  <span style={{color:"red"}}>{formik.errors.title}</span>
)}

<TextField
  id="price"
  name="price"
  type="number"
  onChange={formik.handleChange}
  value={formik.values.price}
/>
{formik.touched.price && formik.errors.price &&(
  <span style={{color:"red"}}>{formik.errors.price}</span>
)}
<TextField
  id="description"
  name="description"
  type="text"
  onChange={formik.handleChange}
  value={formik.values.description}
/>
{formik.touched.description && formik.errors.description &&(
  <span style={{color:"red"}}>{formik.errors.title}</span>
)}
   <TextField
  id="image"
  name="image"
  type="url"
  onChange={formik.handleChange}
  value={formik.values.image}
/>
{formik.touched.image && formik.errors.image &&(
  <span style={{color:"red"}}>{formik.errors.image}</span>
)}
<button type="submit" style={{padding:"10px",width:"40%",backgroundColor:"blue"}}> <Link to={"/"}>Submit</Link>   </button>
</form>
 </div>
      
    </>
  )
}

export default Add