import React, { useState } from 'react'
import {RxCross1} from "react-icons/rx";
import styles from "../../Styles/Styles"
import {AiOutlineShoppingCart} from "react-icons/ai"
import { GiBuyCard } from "react-icons/gi";
import "./QuickView.scss";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

// import {productData} from "../../Static/Data"
const QuickView = ({data,setOpen}) => {
    // const [click ,setClick]= useState(false);
    // const [select,setSelect] = useState(false);
    const [selectedImg,setSelectedImg] = useState(data.image_Url[0]);
    const [count, setCount] = useState(1);

    const decrementQuantity = () => {
      if (count > 1) {
        setCount(count - 1);
      }
    };
    const incrementQuantity = () => {
      setCount(count + 1);
    };

  return (
    <div className='bg-[#fff]'>
      {data?(
        <div className="fixed w-full h-screen top-0 left-0 
        bg-[#00000013] z-40 flex items-center
        justify-center">
            <div className="relative w-[90%] 800px:w-[60%] 
            h-[90vh] overflow-y-scroll 800px:h-[75vh] 
            bg-white rounded-md shadow-md p-4">
                <RxCross1 size={30} className="absolute right-3 top-3 z-50" 
                onClick={()=>setOpen(false)}/>

                <div className="block w-full 800px:flex">
                    <div className='w-full 800px:w-[55%] '>
                        <div className='w-full h-[75%] mb-2 overflow-hidden relative'>
                        <img src={selectedImg.url} className='w-[500px] h-[500px] 
                              object-contain ' alt=""/>
                              {/* <IoIosArrowBack size={25} className='absolute top-[45%] left-[50px]
                              bg-white rounded-full text-center p-1'/>
                              <IoIosArrowForward size={25} className='absolute top-[45%] right-[50px]
                               bg-white rounded-full text-center p-1' onClick={()=>setSelectedImg(selectedImg+1)}/> */}
                            </div>
                        <div className="flex items-center">
                            <div className='overflow-hidden'>
                            <img src={data.shop.shop_avatar.url} alt="" className='w-[40px] h-[40px] 
                            rounded-full mr-2'/>
                            </div>
                            <div>
                                <h3 className={`${styles.shop_name} italic font-bold 
                                text-[17px]`}>{data.shop.name}</h3>
                            </div>
                        </div>
                        <div className="images">
                            {data.image_Url.map((image,i)=>(
                                <img src={image.url} alt="" key={i} 
                                onClick={()=>setSelectedImg(image)} className='img1'/>
                            ))}
                        </div>
                    </div>
                    <div className='w-full 800px:w-[45%] pt-5 pl-[5px] pr-[5px] mt-[60px]'>
                        <h2 className={`${styles.productTitle} capitalize mb-2`}>{data.name}</h2>
                        <p className='font-semibold text-[gray] mt-[5px]'>{data.description}</p>
                        <div className='flex pt-3 mb-2'>
                            <h4 className={`${styles.productDiscountPrice} `}>৳ {data.discount_price.toFixed(2)}</h4>
                            <h4 className={`line-through font-[400] text-[16px] ml-3`}>
                            <strong className='text-[16px] font-[400] font-Roboto'>৳</strong> {data.price? data.price.toFixed(2):null}</h4>
                        </div>
                        <div className="flex items-center pt-4">
                            <button className='py-1
                             px-4 text-center text-white bg-[#077bc4] text-[19px]'
                             onClick={decrementQuantity}>-</button>
                            <span className='py-1 px-5 text-center '>{count}</span>
                            <button className='py-1
                             px-4 text-center text-white bg-[#077bc4] text-[19px]'
                             onClick={incrementQuantity}>+</button>
                        </div>
                        <div className="flex items-center mt-4 gap-[30px]">
                           <div className={`${styles.button} bg-[#077bc4] addCart rounded-md`}>
                            <span className='text-white font-bold flex items-center'>
                                Add to cart <AiOutlineShoppingCart className='ml-2'/></span>
                           </div>
                           <div className={`${styles.button} bg-[orangered] buy rounded-md`}>
                            <span className='text-[#fff] font-bold flex items-center'>
                                Buy now <GiBuyCard className='ml-2'/></span>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      ):null}
    </div>
  )
}

export default QuickView
