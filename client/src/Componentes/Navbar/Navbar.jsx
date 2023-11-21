import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
//import './navbar.module.css'
import '../../Styles/styles.css'


const Navbar = () => {

  return (
    <div className='navbar-cont'>
      <div className='navbar-img'>
      <Link className='nav-img' to={"/"}><img src="https://planearte3d.com.ar/wp-content/uploads/2021/05/IMG_9696-600x800.jpeg" alt="logo" /></Link>
      </div>
      <div>
        <Link  className='navbar-img-cont img' to={"/home"}><img src="https://png.pngtree.com/png-clipart/20210523/original/pngtree-home-button-ui-ux-png-image_6322239.jpg"/></Link>
        <Link  className='navbar-img-cont img'to={"/create"}><img src="https://images.freeimages.com/fic/images/icons/989/ivista_2/256/plus.png"/></Link>
      </div>
      <div><SearchBar/></div>
    </div>
  )
}

export default Navbar