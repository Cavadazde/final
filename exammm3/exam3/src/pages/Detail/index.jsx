import { Button, Grid } from '@mui/material'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../../component/services/productApi'

const Detail = () => {
  const {id}=useParams()
  const {data}=useGetProductByIdQuery(id)
  return (
    <div>
      <div className="container">
        <Grid container spacing={2} >
          {data &&
           
               <Grid item xs={8}  >
                  <div className="cards" style={{ display: "flex" }}>
                    <div className="card" >
                      <div className="cardImage">
                        <img src={data.data.image} alt="" />
                      </div>

                      <div className="cardPriceTitle">
                        <h4>{data.data.price}</h4>
                        <h2>{data.data.title}</h2>
                        <p>{data.data.description}</p>

                        
                        <Link to={"/"} style={{backgroundColor:"red"}}>Go back</Link>
                      </div>
                    </div>
                  </div>
                </Grid>
             
            }
        </Grid>
      </div>

    </div>
  )
}

export default Detail