import React from 'react'
import ban from "../../../Assets/img/bannerImg/bn.png";
import Style from "../../../Styles/Styles";
import "./Banner2.scss";

const Banner2 = () => {
  return (
    <div className={`1500px:${Style.section} 1280px:w-[96%] w-[98%] 1500px:ml-[94px]  bannerContainer`}>
      <div className="imgContainer">
      <img src={ban} alt="" />
      </div>
    </div>
  )
}

export default Banner2
