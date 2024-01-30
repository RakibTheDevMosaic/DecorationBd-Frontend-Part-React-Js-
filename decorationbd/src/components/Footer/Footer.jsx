import React from "react";
// import Style from "../../../Styles/Styles";
import logo from "../../Assets/img/footerlogo.png";
import lg from "../../Assets/img/pay.png";
import { FaEnvelope, FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
// import { FaRegEnvelope } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

import "./Footer.scss";
const Footer = () => {
  return (
    <div className={`footerSection`}>
      <div className="newsletterWrapper">
      <div className="newletterPart">
        <div className="text">be in touch with us :</div>
        <div className="inputEmail">
          <input type="text" placeholder="Enter your e-mail" className="1350px:text-[12px] 1024px:text-[13px]"/>
          <button>join us</button>
        </div>
        <div className="socialIcons">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
          <a href="#">
            <FaPinterestP />
          </a>
        </div>
      </div>
      </div>

       <div className="w-full bg-[#0a0a0a]">
      <div
        className="others grid grid-cols-1 md:grid-cols-2
      lg:grid-cols-4 xl:grid-cols-4 mx-auto "
      >
        <div className="footerImg">
          <div>
            <img src={logo} alt="" className="800px:rounded-[26px] rounded-[10px] 
             800px:mb-[18px] 800px:pb-[2px] mb-[5px] pb-0"/>
          </div>
     
        </div>
        <div className="category">
          <div className="title">popular categories</div>
          <div className="items">
            <div>Monitor Arm/Stand</div>
            <div>Pets house</div>
            <div>Home & Decor</div>
            <div>New Arrival</div>
          </div>
        </div>
        <div className="links">
          <div className="title">Useful Links</div>
          <div className="items">
            <div>About Us</div>
            <div>Payment Method</div>
            <div>Delivery Policy</div>
            <div>Return & Refund Policy</div>
            <div>Terms & Conditions</div>
          </div>
        </div>
        <div className="contact">
          <div className="title">Contact Us</div>
          <div className="item">
            <FaMobile />
            <span>+8801717381296</span>
          </div>
          <div className="item">
            <FaEnvelope />
            <span>Email: mnhodarajib@gmail.com</span>
          </div>
        </div>
      </div>
      </div>
      <div className="w-full bg-[#0a0a0a] h-[10%]">
        <div className="1350px:w-[88%] 1280px:w-[90%] 768px:w-[90%] w-[100%] bg-[#27292c] justify-center mx-auto rounded-sm
        text-[13px] h-[50px] text-[#d4d5d5] font-[600] flex items-center">all rights reserved © 2020 - 2024 decorationbd.com ​</div>
      </div>
    </div>
  );
};

export default Footer;
