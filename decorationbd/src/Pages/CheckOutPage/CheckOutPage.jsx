import React, { useState } from 'react'
import Styles from "../../Styles/Styles"
import "./CheckOut.scss"
import { RxCross2 } from 'react-icons/rx';
import bkash from "../../Assets/img/bKash.png";
const CheckOutPage = () => {
    const [coupon,setCoupon] = useState(false);
    const [shipping,setShipping] = useState(false);
    const [quantity,setQuantity] = useState(1);
    const [partialCod,setPartialCod] = useState(false);
    const [paymentButton,setPaymentButton] = useState(false)
    const decrementQuantity = ()=>{
        if(quantity>1){
            setQuantity(quantity-1);
        }
    }
    const incrementQuantity = ()=>{
        setQuantity(quantity+1);
    }
    const data = [
        {
          name:"Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
          price:20000.00,
          sku:"N / A",
          img:{
            url:"https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg"
          }
        }
      ]
     const totalAmount = (data[0].price*quantity+150.00)
     const pCod = (totalAmount*0.25)
  
  return (
    <div className={`1500px:${Styles.section} 1024px:w-[80%] 1280px:w-[96%] w-[98%] flex flex-col 1280px:flex-row items-center gap-[30px]`}>
      <div className="1280px:w-[50%] w-[100%] p-2 1280px:mr-[50px] mr-0">
        <div className="1280px:mt-[20px] mt-[100px] px-[10px] py-[10px] 768px:w-[70%] w-[100%] text-center 
        rounded-md shadow-md shadow-[gray]">
            <span className='768px:text-[19px] text-[15px]
             text-[#077bc4] font-semibold '>Have a coupon? </span> 
             <span className='768px:text-[18px] text-[15px] text-[orangered] ml-[7px]
             font-semibold underline cursor-pointer'
             onClick={()=>setCoupon(!coupon)}>Click here to enter your code.</span>
        </div>  
        <div className={`768px:w-[95%] w-[100%] border 
         border-[rgba(0,0,0,0.2)] mt-[10px] ${coupon?"openCoupon":"closeCoupon"} overflow-hidden`}>
            <h5 className='768px:text-[18px] text-[16px] font-semibold
            text-[#242424] text-start p-[8px] 768px:ml-[20px] ml-[10px]'>If you have a coupon code, please apply it below.</h5>
            <input type="number" placeholder='***Coupon code'
            className='768px:w-[50%] w-[60%] px-[10px] py-[8px] rounded-[50px] 
            768px:mr-[20px] mr-[10px] 768px:ml-[30px] ml-[10px] mt-[20px] mb-[15px] 
            outline-none border border-[gray]'/>
            <button className='w-[33%] rounded-[50px] py-[8px] font-semibold capitalize mt-[20px] mb-[15px]
            768px:text-[18px] text-[15px] text-white bg-[orangered]'>apply coupon</button>
        </div>
        <div className="w-full 768px:p-[15px] p-[5px] mt-[50px] rounded-md shadow-md shadow-[black]">
            <h1 className='text-[30px] text-[#077bc4] font-semibold px-[5px] capitalize'>billing details</h1>
            <div className="768px:w-[90%] w-[100%] mt-[20px] ml-[20px]">
                <label className="block pb-2"> Name :</label>
                <input
                  type="text"
                  placeholder='*** Enter your name'
                  className={`px-[10px] py-[8px] rounded-[50px] outline-none border border-[gray] !w-[80%]`}
                  required
                />
            </div>
            <div className="768px:w-[90%] w-[100%] mt-[10px] ml-[20px]">
                <label className="block pb-2"> Email :</label>
                <input
                  type="email"
                  placeholder='*** Enter your email'
                  className={`px-[10px] py-[8px] rounded-[50px] outline-none border border-[gray] !w-[80%]`}
                  required
                />
            </div>
            <div className="768px:w-[90%] w-[100%] mt-[10px] ml-[20px]">
                <label className="block pb-2"> Phone :</label>
                <input
                  type="number"
                  placeholder='*** Enter your number'
                  className={`px-[10px] py-[8px] rounded-[50px] outline-none border border-[gray] !w-[80%]`}
                  required
                />
            </div>
            <div className="768px:w-[90%] w-[100%] mt-[10px] ml-[20px]">
                <label className="block pb-2"> Address :</label>
                <input
                  type="text"
                  placeholder='*** Enter your address'
                  className={`px-[10px] py-[8px] rounded-[50px] outline-none border border-[gray] !w-[80%]`}
                  required
                />
            </div>
            <div className="768px:w-[90%] w-[100%] mt-[10px] ml-[20px]">
                <label className="block pb-2"> Town / City :</label>
                <input
                  type="text"
                  placeholder='*** Enter your address'
                  className={`px-[10px] py-[8px] rounded-[50px] outline-none border border-[gray] !w-[80%]`}
                  required
                />
            </div>
            <div className="768px:w-[90%] w-[100%] mt-[10px] ml-[20px]">
                <label className="block pb-2"> Postcode / ZIP (optional) :</label>
                <input
                  type="number"
                  placeholder='*** Enter your address'
                  className={`px-[10px] py-[8px] rounded-[50px] outline-none border border-[gray] !w-[80%]`}
                  required
                />
            </div>
            <div className="768px:w-[90%] w-[100%] mt-[10px] ml-[20px]">
                <label className="block pb-2"> Customization :</label>
                <input
                  type="text"
                  placeholder='*** Customization'
                  className={`px-[10px] py-[8px] rounded-[50px] outline-none border border-[gray] !w-[80%]`}
                  required
                />
            </div>
            <div className="768px:w-[90%] w-[100%] mt-[10px] ml-[20px] mb-[20px]">
                <label className="block pb-2"> Country (<span className='text-[orangered]'>*** Fixed</span>) :</label>
                <input
                  type="text"
                  placeholder='Bangladesh'
                  className={`px-[10px] py-[8px] rounded-[50px] outline-none !w-[80%] placeholder:text-[#242424]`}
                  required
                />
            </div>
            <div className="768px:p-[10px] p-[3px] mt-[30px] ml-[5px] 768px:ml-0">
                <span className='768px:text-[18px] text-[16px] font-semibold text-[orangered]'>*** If you want to change shipping address or ship to different address. </span>
                <span className='768px:text-[19px] text-[16px] font-semibold text-[red] underline ml-[5px] cursor-pointer'
                onClick={()=>setShipping(!shipping)}>Click here.</span>
            </div>
            <div className={`mt-[20px] ${shipping?"openShip":"closeShip"} overflow-hidden`}>
            <h1 className='text-[30px] text-[#077bc4] font-semibold px-[5px] capitalize'>shipping details</h1>
            <div className="768px:w-[90%] w-[100%] mt-[20px] ml-[20px]">
                <label className="block pb-2"> Name :</label>
                <input
                  type="text"
                  placeholder='*** Enter your name'
                  className={`px-[10px] py-[8px] rounded-[50px] outline-none border border-[gray] !w-[80%]`}
                  required
                />
            </div>
            <div className="768px:w-[90%] w-[100%] mt-[10px] ml-[20px]">
                <label className="block pb-2"> Email :</label>
                <input
                  type="email"
                  placeholder='*** Enter your email'
                  className={`px-[10px] py-[8px] rounded-[50px] outline-none border border-[gray] !w-[80%]`}
                  required
                />
            </div>
            <div className="768px:w-[90%] w-[100%] mt-[10px] ml-[20px]">
                <label className="block pb-2"> Phone :</label>
                <input
                  type="number"
                  placeholder='*** Enter your number'
                  className={`px-[10px] py-[8px] rounded-[50px] outline-none border border-[gray] !w-[80%]`}
                  required
                />
            </div>
            <div className="768px:w-[90%] w-[100%] mt-[10px] ml-[20px]">
                <label className="block pb-2"> Address :</label>
                <input
                  type="text"
                  placeholder='*** Enter your address'
                  className={`px-[10px] py-[8px] rounded-[50px] outline-none border border-[gray] !w-[80%]`}
                  required
                />
            </div>
            <div className="768px:w-[90%] w-[100%] mt-[10px] ml-[20px]">
                <label className="block pb-2"> Town / City :</label>
                <input
                  type="text"
                  placeholder='*** Enter your address'
                  className={`px-[10px] py-[8px] rounded-[50px] outline-none border border-[gray] !w-[80%]`}
                  required
                />
            </div>
            <div className="768px:w-[90%] w-[100%] mt-[10px] ml-[20px]">
                <label className="block pb-2"> Postcode / ZIP (optional) :</label>
                <input
                  type="number"
                  placeholder='*** Enter your address'
                  className={`px-[10px] py-[8px] rounded-[50px] outline-none border border-[gray] !w-[80%]`}
                  required
                />
            </div>
            <div className="768px:w-[90%] w-[100%] mt-[10px] ml-[20px]">
                <label className="block pb-2"> Customization :</label>
                <input
                  type="text"
                  placeholder='*** Customization'
                  className={`px-[10px] py-[8px] rounded-[50px] outline-none border border-[gray] !w-[80%]`}
                  required
                />
            </div>
            <div className="768px:w-[90%] w-[100%] mt-[10px] ml-[20px] mb-[20px]">
                <label className="block pb-2"> Country (<span className='text-[orangered]'>*** Fixed</span>) :</label>
                <input
                  type="text"
                  placeholder='Bangladesh'
                  className={`px-[10px] py-[8px] rounded-[50px] outline-none !w-[80%] placeholder:text-[#242424]`}
                  required
                />
            </div>
            </div>
        </div>
      </div>
      <div className="1280px:w-[45%] 768px:w-[85%] w-[100%] 768px:p-3 p-[2px] rounded-md 
      shadow shadow-[#077bc4] bg-[#f7f7f7] mt-[20px] mb-[20px] 768px:mb-0">
        <h2 className='px-2 py-3 text-center text-[orangered] 
        capitalize text-[30px] font-semibold'>your order</h2>
        <div className="w-full px-2 py-3 bg-white shadow shadow-[gray] mt-[20px]">
            <div className="flex items-center justify-between pb-2 border-b border-[rgba(0,0,0,0.2)]">
                <h3 className='text-[20px] text-[#242424] font-semibold 768px:pl-3 pl-1 uppercase'>product</h3>
                <h3 className='text-[20px] text-[#242424] font-semibold 768px:pr-3 pr-0 uppercase'>subtotal</h3>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-[rgba(0,0,0,0.2)]">
               <div className="flex items-center">
               <RxCross2  className='text-[orangered] 768px:text-[18px] text-[42px]'/>
               <img src={data[0].img.url} alt="" className='768px:w-[70px] w-[55px] 768px:h-[70px] h-[55px] object-cover cursor-pointer 768px:mx-[5px] mx-0'/>
               <div className="flex flex-col justify-center">
               <h5 className='768px:font-semibold font-[500] pr-[14px] 768px:pr-0 768px:text-[18px] text-[14px] text-[#242424]'>{data[0].name}</h5>
               <div className="px-1 flex items-center gap-[10px] mt-[5px]">
                <button className='w-[23px] h-[23px] bg-[#077bc4] text-white outline-none border-none'
                onClick={decrementQuantity}>-</button>
                <span>{quantity}</span>
                <button className='w-[23px] h-[23px] bg-[#077bc4] text-white outline-none border-none'
                onClick={incrementQuantity}>+</button>
               </div>
               </div>
               </div>
               <span className='768px:text-[18px] text-[17px] font-semibold 768px:pr-3 pr-1
                text-[#077bc4]'>{(data[0].price*quantity).toFixed(2)}<strong>৳</strong></span>
            </div>
            <div className="mt-[10px] py-3  flex items-center justify-between border-b border-[rgba(0,0,0,0.2)]">
              <h5 className='text-[#242424] 768px:text-[18px] text-[17px] font-semibold capitalize 768px:pl-4 pl-1'>subtotal :</h5>
              <span className='768px:text-[18px] text-[17px] font-semibold 768px:pr-3 pr-1
                text-[#077bc4]'>{(data[0].price*quantity).toFixed(2)}<strong>৳</strong></span>
            </div>
            <div className="mt-[10px] py-3  flex items-center justify-between border-b border-[rgba(0,0,0,0.2)]">
              <h5 className='text-[#242424] 768px:text-[18px] text-[17px] font-semibold capitalize 768px:pl-4 pl-1'>
                shipping (<span className='text-[15px] font-semibold text-[orangered] capitalize'>*** delivery charges</span>) :</h5>
              <span className='768px:text-[18px] text-[17px] font-semibold 768px:pr-3 pr-1
                text-[#077bc4]'>150.00<strong>৳</strong></span>
            </div>
             <div className="mt-[10px] py-3  flex items-center justify-between border-b border-[rgba(0,0,0,0.2)]">
              <h5 className='text-[#242424] 768px:text-[18px] text-[17px] font-semibold capitalize 768px:pl-4 pl-1'>total order amount :</h5>
              <span className='text-[18px] font-semibold 768px:pr-3 pr-1
                text-[#077bc4]'>{(totalAmount).toFixed(2)}<strong>৳</strong></span>
            </div>
           
                  <div className={`${partialCod?"openPcod":"closePcod"} overflow-hidden`}>
                    <div className="mt-[10px] py-3  flex items-center justify-between border-b border-[rgba(0,0,0,0.2)]">
              <h5 className='text-[#242424] 768px:text-[18px] text-[17px] font-semibold capitalize 768px:pl-4 pl-1'>Remaining Amount to Pay in COD :</h5>
              <span className='768px:text-[18px] text-[17px] font-semibold 768px:pr-3 pr-1
                text-[#077bc4]'>{(totalAmount-pCod).toFixed(2)}<strong>৳</strong></span>
            </div>
                  <div className="mt-[10px] py-3  flex items-center justify-between border-b border-[rgba(0,0,0,0.2)]">
              <h5 className='text-[#242424] 768px:text-[25px] text-[19px] font-semibold capitalize 768px:pl-4 pl-1'>for order confirmation :</h5>
              <span className='768px:text-[22px] text-[21px] font-semibold 768px:pr-3 pr-1
                text-[orangered]'>{(pCod).toFixed(2)}<strong>৳</strong></span>
            </div></div>
            
              
            <div className="mt-[10px] py-3  flex items-center justify-between">
              <h5 className='text-[#242424] 768px:text-[18px] text-[17px] font-semibold capitalize 768px:pl-4 pl-1'>
                Estimated Delivery Date:  </h5>
              <span className='768px:text-[18px] text-[16px] font-semibold 768px:pr-3 pr-0
                text-[red]'>December 23, 2023</span>
            </div>
        </div>
        <div className="mt-50px py-4 768px:px-4 px-2">
          <h4 className='768px:text-[18px] text-[17px] 1024px:text-[17px] font-semibold text-[#077bc4] mt-[10px]'>
            ( *** If you want to confirm your order then you have to pay{" "} 
            <span className='italic text-[red]'>* Partial COD * </span> first )</h4>
           <div className="mt-[15px] 768px:px-[2] px-0 py-2 flex items-center">
           <input type="checkbox" className='w-[18px]  h-[18px]  cursor-pointer pt-[5px] mr-[10px] 
           outline-none border border-[rgba(0,0,0,0.2)]'
           onClick={()=>setPartialCod(!partialCod)}/>
           <label className='768px:text-[20px] text-[18px] text-[#242424] font-semibold'> CASH ON DELIVERY / PARTIAL COD {"  "}
           <span className='768px:text-[18px] text-[17px] font-semibold text-[red]'>(*** for prevent fake order)</span></label>
           </div>
        </div>
        <div className="mt-[50px] py-4 px-4">
          <h4 className='font-semibold text-[20px] text-[orangered] capitalize'>available payment gateway :</h4>
          <div className="flex items-center gap-[5px]">
          <input type="checkbox" className='w-[18px] h-[18px] cursor-pointer pt-[5px] mt-[20px] 
           outline-none border border-[rgba(0,0,0,0.2)]'
           onClick={()=>setPaymentButton(!paymentButton)}/>
          <img src={bkash} alt="" className='object-contain w-[120px] h-[40px] mt-[20px]'/> <span className='text-[18px] text-[red] font-semibold mt-[10px]'>(* Pay with bKash)</span>
          </div>
        </div>
          <div className={`${paymentButton?"openButton":"closeButton"} px-3 py-2 border-t border-[rgba(0,0,0,0.2)] 
          flex flex-col items-center overflow-hidden`}>
            <p className='font-semibold text-[18px] text-[#242424] ml-[20px] mt-[10px]'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
            <button className='w-[85%] h-[45px] bg-[orangered] my-[20px]
             text-white font-semibold rounded-[50px] shadow-md shadow-[red] uppercase text-center'>pay with bkash</button>
          </div>
      </div>
      </div>
  )
}

export default CheckOutPage
