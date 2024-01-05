import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import {IoBagHandleOutline} from "react-icons/io5"
import {HiOutlineMinus, HiPlus} from "react-icons/hi"
import { Link } from 'react-router-dom';
import "./CartPopup.scss";

const CartPopup = ({setOpencart}) => {
    const cartData = [
        {
            name:"Iphone 14 pro max 256 gb ssd and 8 gb ram silver color",
            description:"test",
            price:999
        },
        {
            name:"Iphone 14 pro max 256 gb ssd and 8 gb ram silver color",
            description:"test",
            price:999
        },
        {
            name:"Iphone 14 pro max 256 gb ssd and 8 gb ram silver color",
            description:"test",
            price:999
        },
    ]
  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-[#0000004b] z-10 '>
      <div className="fixed top-0 right-0 min-h-screen  z-[999]
       bg-white flex flex-col justify-between 1280px:w-[25%] 768px:w-[60%] 1024px:w-[45%] w-[80%]
        shadow-md rounded-sm cartPopup">
        <div>
            <div className="flex w-full justify-end pt-5 pr-5">
                <RxCross1  className='cursor-pointer 1024px:text-[25px] text-[30px] text-[#242424]'
                onClick={()=>setOpencart(false)}/>
            </div>
            {/* items length */}
            <div className="768px:p-4 1024px:p-[2px] 1280px:p-4 p-[5px] flex items-center">
                <IoBagHandleOutline size={25} className='text-[#242424]'/>
                <h5 className='pl-2 text-[20px] font-semibold text-[#242424]'>3 items</h5>
            </div>
            {/* cart single items */}
            <br />
            <div className="w-full border-t">
                {
                    cartData && cartData.map((i,index)=>(
                        <CartSingle key={index} data={i} />
                    ))
                }
            </div>
        </div>
       <div>
         {/* View Cart button */}
         <div className="px-5 mb-[10px]">
            <Link to='/cart' onClick={()=>setOpencart(false)}>
                <div className={`h-[45px]
                w-full flex items-center justify-center bg-[#077bc4] rounded-[10px]`}>
                    <h1 className='text-[#fff]
                    text-[18px] font-semibold'>View Cart</h1>
                </div>
            </Link>
        </div>
        {/* checkout button */}
        <div className="px-5 mb-3">
            <Link to='/checkout'onClick={()=>setOpencart(false)}>
                <div className={`h-[45px] 
                w-full flex items-center justify-center bg-[#e44343] rounded-[10px]`}>
                    <h1 className='text-[#fff]
                    text-[18px] font-semibold'>Checkout Now (Tk. 2000 <strong className='text-[16px]'>৳</strong>)</h1>
                </div>
            </Link>
        </div>
       </div>
       </div>
    </div>
  )
}

const CartSingle = ({data}) => {
    const [value,setValue] = useState(1);
    const totalPrice = data.price * value
    return(
        <div className="border-b 1024px:p-1 1280px:p-4 768px:p-2 p-[2px]">
            <div className="w-full flex items-center">
                <div>
                    <div className='bg-[#077bc4] border border-[#244242] rounded-full
                    w-[25px] h-[25px] flex items-center justify-center cursor-pointer'
                    onClick={()=>setValue(value+1)}>
                        <HiPlus size={16} color='#fff'/>
                    </div>
                    <span className='pl-[10px] text-[#242424]'>{value}</span>
                    <div className='bg-[#a7abb14f] rounded-full w-[25px] h-[25px] 
                    flex items-center justify-center cursor-pointer'
                    onClick={()=>{if(value>1){setValue(value-1)}}}>
                        <HiOutlineMinus size={18} color='#7d879c'/>
                    </div>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzHalBuq-DcgDHDXE4IL1esh5NoAuLX4wNRfWdwePbGA&s" alt="" 
                className='768px:w-[80px] 768px:h-[80px] w-[60px] h-[60px] ml-2'/>
                <div className='768px:pl-[8px] pl-[5px]'>
                    <h1 className='text-[#242424] font-[500] 768px:font-semibold'>{data.name}</h1>
                    <h4 className='text-[#077bc4] 
                    font-bold'>
                        <strong className='text-[16px]'>৳</strong> {data.price} * {value}</h4>
                    <h4 className='font-bold text-[17px] 
                    pt-[3px] text-[#d02222]'>Tk. {totalPrice} <strong className='text-[16px]'>৳</strong></h4>    
                </div>
                <RxCross1 className='cursor-pointer'/>
            </div>
        </div>
    )
}

export default CartPopup
