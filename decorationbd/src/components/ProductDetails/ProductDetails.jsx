import React, { useState } from "react";
import Styles from "../../Styles/Styles";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiBuyCard } from "react-icons/gi";
import d1 from "../../Assets/img/DeliveryImg/delivery1.jpg";
// import d2 from "../../Assets/img/DeliveryImg/delivery2.jpeg";

const ProductDetails = ({
  data,
  count,
  decrementQuantity,
  incrementQuantity,
}) => {
  // console.log(data)
  const [select, setSelect] = useState( data?.image_Url[0]);
  console.log(select);
  return (
    <div className="bg-white">
      {data ? (
        <div className={`${Styles.section} w-[95%] 768px:w-[90%]  1024px:w-[80%] mt-[70px] 768px:mt-[100px] lg:mt-0`}>
          <div className="w-full py-5">
            <div className="block w-full 1024px:flex">
              <div className="w-full 1024px:w-[650px] 1024px:mr-[30px]">
             
                  <img
                    src={select?.url}
                    alt=""
                    className="768px:w-[500px] 768px:h-[500px] 
                    300px:w-[400px] 300px:h-[400px] w-[300px] h-[300px] object-contain"
                  />
                
                <div className="w-[100%] flex overflow-hidden">
                  <div
                    className={`
                    cursor-pointer flex items-center gap-[5px] mt-[20px] mb-[20px]`}
                  >
                    {data?.image_Url?.map((image, i) => (
                      <img
                        src={image?.url}
                        alt=""
                        key={i}
                        onClick={() => setSelect(image)}
                        className="768px:w-[80px] 768px:h-[80px] 300px:w-[52px] 300px:h-[52px] w-[41px] h-[42px] 
                        object-cover border border-[rgba(0,0,0,0.2)] "
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full 1024px:w-[50%] 768px:pt-[90px] pt-[30px]">
                <h1 className={`md:${Styles.productTitle} text-[25px]`}>{data?.name}</h1>
                <p className={`font-semibold text-[#7b7b7b] pt-4`}>
                  {data?.description}
                </p>
                <div className="flex pt-4 items-center">
                  <h4 className={`${Styles.price} mr-[10px]`}>
                    {data?.price?.toFixed(2)}
                    <strong className="text-[20px]">৳</strong>
                  </h4>
                  <h4 className={`${Styles.productDiscountPrice}`}>
                    {data?.discount_price?.toFixed(2)}
                    <strong className="text-[20px]">৳</strong>
                  </h4>
                </div>
                <div className={`${Styles.normal_flex} mt-12  pr-3`}>
                  <button
                    className="py-1
                             px-4 text-center text-white bg-[#077bc4] text-[19px]"
                    onClick={decrementQuantity}
                  >
                    -
                  </button>
                  <span className="py-1 px-5 text-center ">{count}</span>
                  <button
                    className="py-1
                             px-4 text-center text-white bg-[#077bc4] text-[19px]"
                    onClick={incrementQuantity}
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center mt-8 gap-[30px]">
                  <div
                    className={`${Styles.button} bg-[#077bc4] addCart rounded-md`}
                  >
                    <span className="text-white font-bold flex items-center">
                      Add to cart <AiOutlineShoppingCart className="ml-2" />
                    </span>
                  </div>
                  <div
                    className={`${Styles.button} bg-[orangered] buy rounded-md`}
                  >
                    <span className="text-[#fff] font-bold flex items-center">
                      Buy now <GiBuyCard className="ml-2" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductDetailsInfo data={data} />
          <br />
          <br />
        </div>
      ) : null}
    </div>
  );
};

const ProductDetailsInfo = ({ data }) => {
  const [active, setActive] = useState(1);
  return (
    <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded ">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        <div className="relative">
          <h5
            className="text-[#242424] text-[18px] px-1 leading-5 font-semibold 
                    cursor-pointer 800px:text-[20px]"
            onClick={() => setActive(1)}
          >
            Product Details
          </h5>
          {active === 1 ? (
            <div className={`${Styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative hidden 768px:inline">
          <h5
            className="text-[#242424] text-[18px] px-1 leading-5 font-semibold 
                    cursor-pointer 768px:text-[20px]"
            onClick={() => setActive(2)}
          >
            Additional Information
          </h5>
          {active === 2 ? (
            <div className={`${Styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className="text-[#242424] text-[18px] px-1 leading-5 font-semibold 
                    cursor-pointer 800px:text-[20px]"
            onClick={() => setActive(3)}
          >
            Shipping & Delivery
          </h5>
          {active === 3 ? (
            <div className={`${Styles.active_indicator}`} />
          ) : null}
        </div>
      </div>
      {active === 1 ? (
        <>
          <p
            className="py-2
                    text-[18px] leading-8 pb-10 whitespace-pre-line font-[600] text-[#242424]"
          >
            {data?.description}
          </p>
          <p
            className="py-2
                    text-[18px] leading-8 pb-10 whitespace-pre-line font-[600] text-[#242424]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            fugiat eveniet, esse nisi soluta commodi vel! Quasi aut laudantium
            optio eum, cumque autem repellendus, aliquam incidunt explicabo
            accusantium ratione animi?
          </p>
          <p
            className="py-2
                    text-[18px] leading-8 pb-10 whitespace-pre-line font-[600] text-[#242424]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima in
            eaque autem ab aliquam. Architecto molestias, assumenda consequuntur
            qui porro fuga laborum ad ipsam cumque officia ab tempore asperiores
            maxime minus, impedit accusantium. Quidem modi officiis distinctio
            dolorum at totam.
          </p>
        </>
      ) : null}
      {active === 2 ? (
        <div className="w-full min-h-[30vh] flex items-center justify-around">
          <h4 className="font-bold text-[20px] text-[#242424]">Weigth</h4>
          <p className="font-semibold text-[#077bc4] text-[18px]">2.5kg</p>
        </div>
      ) : null}
      {active === 3 ? (
        <div className="w-full flex flex-col 768px:flex-row items-center justify-between 768px:px-5 px-1">
          <div className="768px:w-[40%] w-[98%] overflow-hidden my-5 bg-[#f5f6fb]">
            <img src={d1} alt="" className="w-full object-cover" />
          </div>
          <div className="768px:w-[50%] w-[90%]">
            <h1
              className="font-bold
                    text-[#242424] 768px:text-[26px] text-[22px] 768px:mt-[10px] mt-0 lg:mt-0"
            >
              Service Provider :
            </h1>
            <p className="768px:pt-3 lg:pt-5 pt-2 font-semibold 768px:text-[18px] text-[17px] text-[#242424] capitalize">
              We usually use <span className="text-[#077bc4]">Pathao</span> ,{" "}
              <span>
                Red<span className="italic text-[red] text-[20px]">X</span>
              </span>{" "}
              or Steadfast{" "}
              <span className="text-[orangered]">Courier Service</span> Provider
              to shipping our products.
            </p>
            <h3 className="pt-3 768px:text-[23px] text-[22px] capitalize font-[700] text-[#242424]">
              shipping time :
            </h3>
            <p className="capitalize font-semibold 768px:text-[18px] text-[17px] pt-3">
              <span className="italic text-[red]">7</span>{" "}
              <span className="text-[red]">days</span> minimum
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetails;
