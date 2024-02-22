import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="d-flex div-1"> 
          <ul className="d-flex">
            <li><Link className="link" to={"/"}>Home</Link></li>
            <li><Link className="link" to={"classes"}>Classes</Link>  </li>
            <li><Link className="link" to={"pricing-&-Membership"}>pricing & Membership</Link></li>
            <li><Link className="link" to={"about"}>About</Link></li>
          </ul>
        <div className=" d-flex">
          <img src="#" alt="ico" />
          <img src="#" alt="ico" />
          <img src="#" alt="ico" />
          <img src="#" alt="ico" />
        </div>
      </div>
      <hr />
      <ul className="d-flex">
        <li><Link className="link" to={"terms-&-Cconditions"}>Terms & Conditions </Link></li>
        <li><Link className="link" to={"privacy-policy"}>Privacy Policy</Link></li>
        <li><Link className="link" to={"cookies"}>Cookies</Link></li>
      </ul>
    </div>
  );
};

export default Footer;
