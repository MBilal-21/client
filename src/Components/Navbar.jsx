import * as React from "react";
import logo2 from '../images/Group 21420.svg'
import { Outlet, Link } from "react-router-dom";


const Navbar = () => {
   
  return (
    <>
    <header  className='navbar d-flex'>
   

      <div className='d-flex'>
        <img src={logo2} alt="Logo" />
        <h1 className="logo-text">Nurturing Wellness, Embracing All</h1>
      </div>
        <ul className='d-flex'>
            <li><Link className="link" to={"/"}> Home</Link></li>
            <li><Link className="link" to={"classes"}> Classes</Link></li>
            <li><Link className="link" to={"pricing"}> Pricing & Membership</Link></li>
            <li><Link className="link" to={"about"}> About</Link></li>
            <li className="text-center"><Link className="link" to={"join"}> Join</Link></li>
        </ul>
    
    </header>
    <Outlet/>
    </>
  )
}

export default Navbar;
