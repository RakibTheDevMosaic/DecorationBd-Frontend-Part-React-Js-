import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Styles from "../../../Styles/Styles";
import { categoriesData} from "../../../Static/Data";
import { IoIosArrowForward } from 'react-icons/io';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import "./DsubCat.scss";

const StickyCategory = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (category) => {
    navigate(`/shop?category=${category.title}`);
  };

  const handleSubCategorySubmit = (category, subcategory) => {
    navigate(`/shop?category=${category.title}&subCategory=${subcategory.title}`);
  };

  return (
    <div className='pb-4 w-[380px] bg-[#fff] h-[490px]' style={{
      border: "1px solid rgba(0,0,0,0.1)",
      borderTop: "none",
    }}>
      {categoriesData && categoriesData.map((item) => (
        <div key={item.id} className={`${Styles.normal_flex} relative hover:bg-gray-300 catData`}
          onClick={() => handleSubmit(item)}
          onMouseEnter={() => setHoveredCategory(item)}
          onMouseLeave={() => setHoveredCategory(null)}
          style={{
            fontSize: "21px",
            padding: "2.2px",
          }}>
          <img src={item.image_Url} alt="img"
            style={{
              width: "25px",
              height: "25px",
              objectFit: "contain",
              marginLeft: "10px",
              userSelect: "none",
            }} />
          <h3 className='m-3 cursor-pointer select-none h-full'>{item.title}</h3>
          <div className='absolute right-[5px] arrow'>
            <IoIosArrowForward />
          </div>
          <div>
            {hoveredCategory && hoveredCategory.id === item.id && (
              <div className={`subCategory`}>
                <div className='subCategoryItems'>
                  {item.subCategory.map((subcat) => (
                    <div key={subcat.id}>
                      <FaArrowRight />
                      <span  className='subCategory-item'
                         onClick={(e) => {
                          e.stopPropagation(); // Prevent parent onClick from triggering
                          handleSubCategorySubmit(item, subcat);
                        }}>{subcat.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StickyCategory;
