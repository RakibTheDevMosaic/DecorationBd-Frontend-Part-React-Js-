import React from 'react'
import Style from "../../../Styles/Styles";
import ban from "../../../Assets/img/bannerImg/dv.png";
import "./ServiceBanner.scss";
const ServiceBanner = () => {
  return (
    <div className={`1500px:${Style.section} 1024px:w-[98%] 1280px:w-[96%] w-[97%] 1500px:ml-[94px]  bannerContainer3`}>
    <div className="imgContainer3">
    <img src={ban} alt="" />
    </div>
  </div>
  )
}

export default ServiceBanner
