import React from 'react'
import "./header.scss"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>

      
<header>

<div className="navbar-wrapper">
  <div className="logo">
  EATWELL

  </div>

  <div className="menuList">
    <ul>
      <li><Link to={""}>Home</Link></li>
      <li><Link to={"add"}>Add</Link></li>
      <li><Link to={"detail/:id"}> Detail</Link></li>
      <li><Link to={'basket'}>Basket</Link></li>
      <li><Link to={"wishlist"}>Wishlist</Link></li>
    </ul>
  </div>
</div>



      </header>
    </>
  )
}

export default Header