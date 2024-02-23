import * as React from "react";
import logo2 from '../images/Group 21420.svg'
import {  Link } from "react-router-dom";


const Navbar = () => {
   
  return (
    <>
    <header  className='navbar d-flex'>
   
    
      <div className='d-flex'>
        <Link to={"/"} className="link" ><img src={logo2} alt="Logo"/></Link>
       <Link to={"/"} className="link" ><h1 className="logo-text">Nurturing Wellness, Embracing All</h1></Link> 
      </div>
        <ul className='d-flex'>
            <li><Link className="link" to={"/"}> Home</Link></li>
            <li><Link className="link" to={"classes"}> Classes</Link></li>
            <li><Link className="link" to={"pricing-&-membership"}> Pricing & Membership</Link></li>
            <li><Link className="link" to={"about"}> About</Link></li>
            <li className="text-center" ><Link className="link" to={"join"}> Join</Link></li>
        </ul>
    
    </header>
    </>
  )
}

export default Navbar;
