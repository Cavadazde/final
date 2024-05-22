import { Link, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../services/productApi";
import Grid from "antd/es/card/Grid";
import { Button } from "antd";
import { Helmet } from "react-helmet";
import "./detail.scss"


const Detail = () => {
  const { id } = useParams();
  const { data } = useGetProductByIdQuery(id);
  return (
    <div>

<Helmet>
        <meta charSet="utf-8" />
        <title>Detail</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container" >
        <div className="detailCard" >
        {data && 
             
             <Grid item xs={8}>
               <div className="cards">
                 <div className="card">
                   <img src={data.data.image} alt="" />
                   <h3>{data.data.title}</h3>
                   <p>$55{data.data.price}</p>
                   <Button><Link to={"/"}>Go back</Link></Button>
                 </div>
               </div>
             </Grid>
         
         }
        </div>
       
      </div>
    </div>
  );
};

export default Detail;
