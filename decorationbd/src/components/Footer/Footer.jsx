import React from "react";
// import Style from "../../../Styles/Styles";
import logo from "../../Assets/img/Logo.png";
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
      <div className="newletterPart">
        <div className="text">be in touch with us :</div>
        <div className="inputEmail">
          <input type="text" placeholder="Enter your e-mail" />
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
      <div
        className="others grid grid-cols-2 md:grid-cols-2
      lg:grid-cols-4 xl:grid-cols-4 mx-auto "
      >
        <div className="footerImg">
          <div>
            <img src={logo} alt="" className="800px:rounded-[26px] rounded-[10px] 
            800px:shadow-md shadow shadow-zinc-100 800px:mb-[18px] 800px:pb-[2px] mb-[5px] pb-0"/>
          </div>
          <div className="text1">contact us for all information and choice your best product.</div>
          <div className="text2">
            Lorem ipsum, dolor sit amet 
            eaque doloremque  nihil! Expedita.
          </div>
        </div>
        <div className="category">
          <div className="title">categories</div>
          <div className="items">
            <div>swings</div>
            <div>furniture</div>
            <div>Hardware</div>
            <div>kitchenware</div>
            <div>monitor stand</div>
            <div> home & decor</div>
          </div>
        </div>
        <div className="links">
          <div className="title">links</div>
          <div className="items">
            <div>FAQ</div>
            <div>compare</div>
            <div>pages</div>
            <div>cookies</div>
            <div>stores</div>
            <div>wishlist</div>
          </div>
        </div>
        <div className="contact">
          <div className="title">contact</div>
          <div className="item">
            <FaMobile />
            <span>+8801717381296</span>
          </div>
          <div className="item">
            <FaLocationArrow />
            <span>
              Kayaloram Rd, Punnamada, Kottakulangara, Alappuzha, Kerela, 688006
            </span>
          </div>
          <div className="item">
            <FaEnvelope />
            <span>Email: DevMosaic@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="endFooter">
        <div className="writtenLogo">
          <h3>decorationBd</h3>
        </div>
        <div className="paymentImg">
          <img src={lg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
