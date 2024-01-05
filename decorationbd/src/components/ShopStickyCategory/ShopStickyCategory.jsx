import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { FaArrowRight } from "react-icons/fa6";
// import { Link } from 'react-router-dom'
import Styles from "../../Styles/Styles"
import { categoriesData } from '../../Static/Data';
import "./ShopStickyCat.scss"


const ShopStickyCategory = () => {
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const navigate = useNavigate();
    const handleSubmit = (i)=>{
        navigate(`/shop?category=${i.title}`);
        // window.location.reload();
    }
    const handleSubCategorySubmit = (category, subcategory) => {
      navigate(`/shop?category=${category.title}&subCategory=${subcategory.title}`);
    };
  return (
    <>
    <div className='pb-4 1300px:w-[340px] w-[270px] bg-[#fff] h-[450px] 'style={{
      border:" 1px solid rgba(0,0,0,0.1)",
      borderTop:"none",
    }}>
      {
        categoriesData && categoriesData.map((item)=>(
            <div key={item.id} className={`${Styles.normal_flex} relative hover:bg-gray-300 catData1`}
            onClick={()=>handleSubmit(item)} style={{
              fontSize:"18px",
              padding:"2px",
            }} onMouseEnter={() => setHoveredCategory(item)}
            onMouseLeave={() => setHoveredCategory(null)}>
                <img src={item.image_Url} alt="img" 
                style={{
                    width:"22px",
                    height:"22px",
                    objectFit:"contain",
                    marginLeft:"10px",
                    userSelect:"none",
                }}/>
                <h3 className='m-3 cursor-pointer select-none h-full'>{item.title}</h3>
                <div className='absolute right-[5px] arrow'>
                  <IoIosArrowForward/>
                </div>
                <div>
                {hoveredCategory && hoveredCategory.id === item.id && (
                   <div className={`subCategory1`}>
                   <div className='subCategoryItems1'>
                     {item.subCategory.map((subcat)=>(
                      <div key={subcat.id}><FaArrowRight/>
                     <span  className='subCategory-item1'
                         onClick={(e) => {
                          e.stopPropagation(); // Prevent parent onClick from triggering
                          handleSubCategorySubmit(item, subcat);
                        }}>{subcat.title}</span></div>
                     ))}
                   </div>
                </div>
                )}
                </div>
            </div>
      ))
    }
    </div>
    </>
  )
}

export default ShopStickyCategory
