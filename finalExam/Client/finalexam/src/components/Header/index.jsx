import { Link } from "react-router-dom"
import "./header.scss"
import { useContext } from "react"
import { BasketContext } from "../../context/basketContext"

const Header = () => {
    const {basket}=useContext(BasketContext)
  return (
    <header>
<div className="container">
    <div className="navbar-wrapper">
        <div className="logo">
            <h1>COOLSHOP</h1>
        </div>
        <div className="menuList">
<ul>
    <li><Link to={""}>Home</Link></li>
    <li><Link to={"add"}>Add</Link></li>
    <li><Link to={"basket"}>Basket <sup>{basket.length}</sup></Link></li>
    <li><Link to={"/:id"}>Detail</Link></li>
    
</ul>
        </div>
    </div>
</div>


    </header>
  )
}

export default Header