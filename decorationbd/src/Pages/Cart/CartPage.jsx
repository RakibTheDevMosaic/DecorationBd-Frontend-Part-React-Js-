import React, { useState } from 'react'
import Styles from "../../Styles/Styles"
import "./CartPage.scss";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TiShoppingCart } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { MdLocalOffer } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [quantity,setQuntity] = useState(1)
  const decrementQuantity = ()=>{
    if(quantity>1){
        setQuntity(quantity-1);
    }
  }
  const incrementQuantity = ()=>{
    setQuntity(quantity+1);
  }
  const [shippingAddress,setShippingAddress] = useState("");
  const [shippingDropDown,setShippingDropDwon] = useState(false);
  const [shippingForm,setShippingform] = useState(false);
  const data = [
    {
      name:"Iphone 14 pro max 256 gb ssd and 8 gb ram silver",
      price:20000.00,
      sku:"N / A",
      img:{
        url:"https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg"
      }
    }
  ]
  return (
    <div className={`1500px:${Styles.section} 1280px:w-[95%] 1024px:w-[94%] w-[99%]`}>
      <div className="flex items-center flex-col 1280px:flex-row w-full 1280px:mt-[50px] mt-[100px] gap-[20px]">
      <div className="1500px:w-[56%] 1024px:w-[90%] 1280px:w-[60%] w-[100%] overflow-hidden">
        <div className="1500px:w-[80%] 1024px:w-[80%] 1280px:w-[98%] w-[100%] 768px:w-[90%] text-center relative ">
          <p className=' 768px:text-[20px] text-[14px] 768px:px-[5px] px-[2px] py-[8px] font-semibold
           text-[orangered] rounded-md shadow-md shadow-[black]'>
            <span className='1280px:ml-[50px] 768px:ml-[70px]'>
            On minimum spend of 
            {" "}<strong className='768px:text-[18px] text-[14px]'>৳ </strong>500 for 
            get free shipping <LiaShippingFastSolid  className='inline 768px:text-[25px] text-[16px]'/> !
            </span>
           </p>
            <p className='absolute top-[-1px] font-[600] shadow shadow-[red] hidden 768px:inline
             text-[orangered] bg-[aqua] 768px:text-[14px] text-[12px] rounded-full
            left-[-15px] 768px:px-[16px] px-[4px] py-[2px] bottom-[-1px]'><MdLocalOffer  className='inline 768px:text-[18px] text-[13px]
            rotate-[90deg]'/>
             Offer! <br /> <span className='ml-[2px]'>
              Free Shipping <LiaShippingFastSolid  className='inline 768px:text-[15px] text-[12px]'/></span></p>
        </div>
        <div className="mt-[80px]">
          <h1 className='capitalize font-semibold 768px:text-[30px] text-[25px] text-[#077bc4] mb-[40px]'>
            <TiShoppingCart  className='inline 768px:text-[40px] text-[30px]'/> shopping cart</h1>
            <table className='w-full mt-[20px] hidden 768px:block'>
              <thead className='w-full'>
                <tr className='w-full border-b border-[rgba(0,0,0,0.2)]'>
                  <th className='1500px:w-[50%] 1280px:w-[30%] 768px:w-[40%] w-[30%] 
                  text-center font-semibold 768px:text-[20px] text-[17px] 1500px:px-[150px] 1280px:px-[90px]
                  768px:px-[40px] px-[30px] pb-[10px]'>PRODUCT</th>
                  <th className='w-[10%] text-center font-semibold 1280px:text-[20px] 768px:text-[18px] px-[20px] pb-[10px]'>SKU</th>
                  <th className='w-[10%] text-center font-semibold 1280px:text-[20px] 768px:text-[18px] px-[20px] pb-[10px]'>PRICE</th>
                  <th className='w-[20%] text-center font-semibold 1280px:text-[20px] 768px:text-[18px] px-[20px] pb-[10px]'>QUANTITY</th>
                  <th className='w-[10%] text-center font-semibold 1280px:text-[20px] 768px:text-[18px] px-[10px] pb-[10px]'>SUBTOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr className='w-full border-b border-[rgba(0,0,0,0.2)]'>
                  <td className='flex items-center 768px:py-3 py-1'>
                    <RxCross2  className='text-[red] 768px:px-[10px] px-[1px] font-bold mr-[5px] 
                    768px:text-[50px] text-[20px]'/>
                    <img src={data[0].img.url} alt="" className='768px:w-[70px] w-[40px] 768px:h-[70px]
                    h-[40px] 768px:px-[10px] px-[2px] object-cover'/>
                    <h4 className='font-semibold 1500px:text-[18px]
                    768px:text-[16px] 1280px:text-[16px] 
                    text-[14px] text-[#242424] 768px:px-[6px] px-[1px]'>{data[0].name}</h4>
                  </td>
                  <td className='text-center 1500px:px-[10px] 1280px:px-[5px] px-[5px] 
                  font-semibold 1500px:text-[18px] 1280px:text-[16px] text-[16px] text-[#242424] py-3'>{data[0].sku}</td>
                  <td className='text-center mx-[15px] 
                  font-semibold 1500px:text-[18px] 1280px:text-[16px] 768px:text-[16px] text-[#242424] py-3'>{data[0].price.toFixed(2)} <strong className='text-[16px]'>৳ </strong></td>
                  <td className='text-center px-[45px] 1280px:px-[35px] 1500px:px-[45px] 
                  font-semibold 1500px:text-[18px] 1280px:text-[16px] 768px:text-[16px] text-[#242424] py-3'>
                   <div className='flex items-center 1280px:gap-[15px] gap-[10px]'>
                   <button className='h-[25px] w-[25px] bg-[#077bc4] text-white text-center border-none outline-none'
                   onClick={decrementQuantity}>-</button>
                    <span>{quantity}</span>
                    <button className='h-[25px] w-[25px] bg-[#077bc4] text-white text-center border-none outline-none'
                    onClick={incrementQuantity}>+</button>
                   </div>
                  </td>
                  <td className='text-center px-[10px] 1280px:px-[5px] 1500px:px-[10px] 
                  font-semibold 1500px:text-[18px] 1280px:text-[16px] 768px:text-[16px] text-[#077bc4] py-3'>{(data[0].price*quantity).toFixed(2)} <strong className='text-[16px]'>৳ </strong></td>
                </tr>
              </tbody>
            </table>
            <div className='flex items-center gap-[5px] 768px:hidden w-full shadow shadow-[#077bc4] py-[2px] rounded-md'>
              <div className="w-[30%] overflow-hidden">
                <img src={data[0].img.url} alt="" className='h-[100px] w-[100px] object-cover'/> 
              </div>
              <div className="w-[68%]">
                <div className="flex flex-col gap-[5px] justify-center pr-[3px]">
                  <div className="flex  justify-between border-b border-[rgba(0,0,0,0.2)] py-[2px]">
                    <h5 className='text-[16px] text-[#242424] font-[600] capitalize px-[2px]'>{data[0].name}</h5>
                    <RxCross2 className='inline-block text-[35px] text-[orangered]'/>
                  </div>
                  <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.2)] py-[2px]">
                    <h5 className='text-[15px] text-[#242424] uppercase font-[600]'>sku</h5>
                    <p className='uppercase font-[600] text-[16px] text-[#242424]'>n / a</p>
                  </div>
                  <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.2)] py-[2px]">
                    <h5 className='uppercase font-[600] text-[15px] text-[#242424] '>price</h5>
                    <p className='font-[600] text-[16px] text-[#242424] pr-[3px]'>{data[0].price.toFixed(2)} <strong>৳ </strong></p>
                  </div>
                  <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.2)] py-[2px]">
                    <h5 className='font-[600] text-[15px] text-[#242424] uppercase'>quantity</h5>
                    <div className='flex items-center gap-[10px]'>
                   <button className='h-[25px] w-[25px] bg-[#077bc4] text-white text-center border-none outline-none'
                   onClick={decrementQuantity}>-</button>
                    <span>{quantity}</span>
                    <button className='h-[25px] w-[25px] bg-[#077bc4] text-white text-center border-none outline-none'
                    onClick={incrementQuantity}>+</button>
                   </div>
                  </div>
                  <div className="flex items-center justify-between ">
                    <h5 className='font-[600] text-[15px] text-[#242424] uppercase'>subtotal</h5>
                    <p className='text-[16px]  font-[600] pr-[3px] text-[#077bc4]'>
                      {(data[0].price*quantity).toFixed(2)} <strong>৳ </strong></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full overflow-hidden 1280px:mt-[80px] mt-[50px] 768px:ml-[25px] 1280px:ml-0">
              <input type="text" className='1280px:w-[40%] w-[60%] py-2 768px:py-[10px] 1280px:py-2 px-2 1280px:mr-[30px] 768px:mr-[15px] mr-[10px]
             ml-[3px] 768px:ml-0 border border-[gray] rounded-[50px] outline-none' placeholder='Coupon code'/>
              <button className='768px:w-[30%] w-[35%] py-[10px] uppercase 1280px:text-[18px] 768px:text-[16px] text-[14px]
              font-semibold bg-[#077bc4] text-white overflow-hidden
              outline-none border-none 768px:rounded-[50px] rounded-[40px] 1280px:ml-[20px]
              768px:ml-[10px] ml-0'>apply coupon</button>
            </div> 
        </div>
      </div>
      <div className="1280px:w-[35%] 768px:w-[80%] w-[100%] border-[2px] mt-[30px] shadow 768px:shadow-[#077bc4] 
      768px:py-[10px] py-[6px] shadow-[orangered]
      border-[rgba(0,0,0,0.2)] outline-none 1280px:ml-[50px] mb-[50px] 768px:mb-0">
        <div className="w-full 768px:p-3 p-1">
          <h1 className='768px:text-[28px] text-[26px] text-[#077bc4] 
          font-semibold capitalize px-3 768px:py-3 py-2 768px:my-[8px] my-[5px]'>cart total</h1>
         <div className="border-b border-[rgba(0,0,0,0.2)] my-[10px] py-[10px]">
         <div className="flex items-center justify-between 768px:px-3 px-1">
            <h5 className='capitalize 768px:text-[18px] text-[16px] font-semibold text-[#242424]'>subtotal :</h5>
            <span className='768px:text-[18px] text-[16px] font-semibold text-[#077bc4]
            '>{(data[0].price*quantity).toFixed(2)}<strong>৳</strong></span>
          </div>
          <div className="flex items-center justify-between 768px:px-3 px-1 py-[4px]">
            <h5 className='capitalize 768px:text-[18px] text-[16px] font-semibold text-[#242424]'>delivery charges :</h5>
            <span className='768px:text-[18px] text-[16px] font-semibold text-[#077bc4]
            '>150.00<strong>৳</strong></span>
          </div>
          <div className="flex items-center justify-between 768px:px-3 px-1 py-[4px]">
            <h5 className='capitalize 768px:text-[18px] text-[16px] font-semibold text-[#242424]'>apply coupon :</h5>
            <span className='768px:text-[18px] text-[16px] font-semibold text-[#077bc4]
            '>0.00<strong>৳</strong></span>
          </div>
          <div className="flex items-center justify-between 768px:px-3 px-1 py-[2px]">
            <h5 className='capitalize 768px:text-[18px] text-[16px] font-semibold text-[#242424]'>Estimated Delivery Date :</h5>
            <span className='768px:text-[18px] text-[16px] font-semibold text-[orangered]
            '>December 21, 2023</span>
          </div>
          <div className="flex items-center justify-between 768px:px-3 px-1 py-[2px]">
            <h5 className='capitalize 768px:text-[18px] text-[16px] font-semibold text-[#242424]'>shipping address :</h5>
            <span className='768px:text-[18px] text-[16px] font-semibold text-[#242424]
            ' onClick={()=>{setShippingDropDwon(!shippingDropDown);
            setShippingform(false)}}><span className='cursor-pointer'>{shippingAddress?(<span>{shippingAddress}</span>):(<span>No Address</span>)}</span>
            <IoIosArrowDown size={16} className={`inline-block ml-[5px] cursor-pointer mb-[5px]
            ${shippingDropDown?"rotate":"notRotate"}`}
            /></span>
          </div>
           <div className={`text-right 768px:px-3 px-1 py-[2px] ${shippingDropDown?"opened":"notOpend"} overflow-hidden`}>
            <span className='768px:text-[18px] text-[16px] font-semibold py-[4px] px-[16px] cursor-pointer rounded-md
            capitalize text-[#242424]'defaultValue="shipping address 2"
            onClick={()=>setShippingAddress("shipping address 1")}>shipping address 1</span><br />
            <span className='768px:text-[18px] text-[16px] font-semibold py-[4px] px-[16px] cursor-pointer rounded-md
            capitalize text-[#242424]'defaultValue="shipping address 3"
            onClick={()=>setShippingAddress("shipping address 2")}>shipping address 2</span>
           </div>

           <div className="text-right px-4 text-[orangered] cursor-pointer" onClick={()=>{
            setShippingform(!shippingForm);
            setShippingDropDwon(false);
           }}>
            <IoIosAddCircleOutline size={16} className='inline-block mr-[6px]'/>
            <span className='capitalize font-semibold'>add new</span>
           </div>
            <div className={`w-[100%] 768px:px-4 px-1 py-[5px] text-right ${shippingForm?"openForm":"notOpenForm"} overflow-hidden`}>
              <input type="text" placeholder='***Enter your name' className='outline-none
              border border-[gray] px-[10px] p-[8px] w-[70%] mb-[10px] rounded-[50px] text-center'/>
              <input type="email" placeholder='***Enter your email' className='outline-none
              border border-[gray] px-[10px] p-[8px] w-[70%] mb-[10px] rounded-[50px] text-center'/>
              <input type="text" placeholder='***Enter your address' className='outline-none
              border border-[gray] px-[10px] p-[8px] w-[70%] mb-[10px] rounded-[50px] text-center'/>
              <input type="text" placeholder='***Enter your city' className='outline-none
              border border-[gray] px-[10px] p-[8px] w-[70%] mb-[10px] rounded-[50px] text-center'/>
              <input type="number" placeholder='***Enter zipcode' className='outline-none
              border border-[gray] px-[10px] p-[8px] w-[70%] mb-[10px] rounded-[50px] text-center'/>
              <button className='outline-none border-none px-[10px] 
              py-[6px] bg-[#077bc4] rounded-[50px] mt-[10px] w-[40%] text-white font-semibold'>
                Update
              </button>
            </div>
         </div>
         <div className="flex items-center justify-between 768px:px-3 px-1">
            <h3 className='capitalize 768px:text-[25px] text-[22px] font-semibold text-[#242424]'>Total :</h3>
            <span className='768px:text-[20px] text-[18px] font-semibold text-[#077bc4]
            '>{(data[0].price*quantity+150.00).toFixed(2)}<strong>৳</strong></span>
          </div>
          <div className="w-full 768px:px-4 px-1 text-center mb-[10px] mt-[50px]">
            <Link to="/checkout">
              <button className='768px:w-[60%] w-[70%] px-[10px] py-[8px] 768px:text-[16px] text-[15px]
              uppercase outline-none border-none rounded-[50px] bg-[orangered] text-white font-semibold'>
                procced to checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default CartPage
