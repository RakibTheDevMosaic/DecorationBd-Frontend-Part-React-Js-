import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import Styles from "../../../Styles/Styles";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { AiOutlineArrowRight } from "react-icons/ai";
import o1 from "../../../Assets/img/NoOrder/nnd.png";
import o2 from "../../../Assets/img/NoOrder/noOrder2.png";
import a1 from "../../../Assets/img/NoAddress/a1.png";
import a2 from "../../../Assets/img/NoAddress/a2.png";
// import a3 from "../../../Assets/img/NoAddress/a3.webp";
import { RiErrorWarningLine } from "react-icons/ri";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { MdEditLocationAlt } from "react-icons/md";
import { RiMapPinAddFill } from "react-icons/ri";
import { RiAccountBoxLine } from "react-icons/ri";
import { MdOutlineKey } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";

const ProfileContent = ({ active }) => {
  const address = {
    name: "The Dev Mosaic",
    email: "DevMosaic1234@gmail.com",
    address: "Atlantic, Brooklyn",
    city: "New York, US",
    zcode: 2201,
    Pnum: "*** 3423 ***",
  };
  // const navigate = useNavigate();
  const [userName, setUserName] = useState("The Dev Mosaic");
  const [email, setEmail] = useState("TheDevMosaic1234@gmail.com");
  const [isForm,setIsForm] = useState(false);
  const [billingAddressForm, setBillingAddressForm] = useState(false);
  const [shippingForm, setShippingForm] = useState(false);
  const [billingAddress, setBillingAddress] = useState([]);
  const [shippingAddress, setShippingAddress] = useState([]);
  const [password,setPassword] = useState("");
  const [password1,setPassword1] = useState("");
  const [password2,setPassword2] = useState("");
  const[visible,setVisible] = useState(false);
  const[visible1,setVisible1] = useState(false);
  const[visible2,setVisible2] = useState(false);
  return (
    <div className="w-full">
      {active === 1 && (
        <>
          <div className="w-full flex flex-col justify-center 1500px:ml-[100px] 300px:pl-[30px] 1024px:pl-[60px]
          1500px:pl-0 ml-0">
            <div className="flex items-center gap-[15px]">
              <CgProfile size={28} color="#242424" />
              <span className="text-[#077bc4] font-bold text-[18px]">
                Welcome!
              </span>
            </div>
            <div>
              <h2
                className="text-[#242424] capitalize 
                   font-bold ml-[25px] mt-[2px] text-[20px]"
              >
                the dev mosaic
              </h2>
            </div>
            <br />
            <br />
          </div>
          <div className="w-full px-4 1500px:ml-[50px] 300px:pl-[20px] 1024px:pl-[80px] 1500px:pl-0 ml-0">
            <form>
              <div className="w-full flex flex-col pb-3 768px:gap-[15px] 300px:gap-[10px]">
                <div className="1024px:w-[50%] 768px:w-[70%] 300px:w-[100%]">
                  <label className="block pb-2">First Name :</label>
                  <input
                    type="text"
                    className={`${Styles.input} !w-[95%]`}
                    required
                  />
                </div>
                <div className="1024px:w-[50%] 768px:w-[70%] 300px:w-[100%]">
                  <label className="block pb-2">Last Name :</label>
                  <input
                    type="text"
                    className={`${Styles.input} !w-[95%]`}
                    required
                  />
                </div>
                <div className="1024px:w-[50%] 768px:w-[70%] 300px:w-[100%]">
                  <label className="block pb-2">UserName :</label>
                  <input
                    type="text"
                    className={`${Styles.input} !w-[95%]`}
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="1024px:w-[50%] 768px:w-[70%] 300px:w-[100%]">
                  <label className="block pb-2">Email :</label>
                  <input
                    type="email"
                    className={`${Styles.input} !w-[95%]`}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="mt-[10px]
                    768px:p-2 p-1 border bg-[#077bc4] text-white 
                    1280px:text-[18px] 1024px:text-[16px] text-[16px] font-bold 1024px:w-[15%] 768px:w-[20%] 300px:w-[50%] rounded-md"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </>
      )}

      {/* order Page */}

      {active === 2 && (
        <div className="w-full 300px:w-[370px] 768px:w-[680px] 1024px:w-full">
          <AllOrders />
        </div>
      )}
      {/* download page */}
      {active === 3 && (
        <div className="1024px:pl-8 768px:pl-2 pl-1 pt-2">
          <div
            className="flex items-center 768px:gap-[10px] gap-[3px] rounded-md 
                     shadow-md shadow-[#077bc4] 768px:px-2 px-1 py-1 1500px:w-[60%] 1024px:w-[90%] w-[100%]"
          >
            <RiErrorWarningLine size={30} className="text-[red]" />
            <h4 className="text-[#242424] 768px:font-semibold font-[500] 1024px:text-[18px] 768px:text-[15px] text-[14px]">
              <span className="text-[orangered]">
                No downloads available yet.
              </span>
              <span className="hidden 768px:inline"> Visit our shop and choice your best products.</span>
            </h4>
            <Link
              to={`/shop`}
              className="1024px:text-[18px] 768px:text-[15px] text-[14px] ml-[3px] 768px:ml-0
                        768px:font-bold font-[600] 768px:px-2 px-1 py-1 underline text-white bg-[#077bc4] border-none outline-none
                        rounded-md"
            >
              Visit shop
            </Link>
          </div>{" "}
          <br />
          <div className="768px:w-[95%] w-[100%] overflow-hidden">
            <img src={o1} alt="" className="w-full 768px:h-[380px] h-[300px] object-contain" />
          </div>
        </div>
      )}
      {/* Address Page */}

      {active === 4 &&
           (
            <div className="1024px:pl-8 768px:pl-2 pl-1 pt-3">
              {
                isForm ? (
                  <div className="">
                    {
                      billingAddressForm ? (
                        <div className="">
                           <div className="pl-1 pt-3 1024px:w-[70%] w-[100%]">
                    <h1
                      className="768px:text-[28px] text-[25px] text-[#242424] 
                          font-semibold capitalize px-2 768px:ml-[30px] ml-[8px]"
                    >
                      billing address
                    </h1>
                    <form className="mt-[20px] 768px:ml-[30px] ml-[10px]">
                      <div className="w-full flex flex-col pb-3 768px:gap-[15px] gap-[10px]">
                        <div className="1280px:w-[50%] 768px:w-[70%] w-[100%]">
                          <label className="block pb-2"> Name :</label>
                          <input
                            type="text"
                            className={`${Styles.input} !w-[95%]`}
                            required
                          />
                        </div>
                        <div className="1280px:w-[50%] 768px:w-[70%] w-[100%]">
                          <label className="block pb-2"> Email :</label>
                          <input
                            type="email"
                            className={`${Styles.input} !w-[95%]`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="1280px:w-[50%] 768px:w-[70%] w-[100%]">
                          <label className="block pb-2">Phone :</label>
                          <input
                            type="number"
                            className={`${Styles.input} !w-[95%]`}
                            required
                          />
                        </div>
                        <div className="1280px:w-[50%] 768px:w-[70%] w-[100%]">
                          <label className="block pb-2">Address :</label>
                          <input
                            type="text"
                            className={`${Styles.input} !w-[95%]`}
                            required
                          />
                        </div>
                        <div className="1280px:w-[50%] 768px:w-[70%] w-[100%]">
                          <label className="block pb-2">Town / City :</label>
                          <input
                            type="text"
                            className={`${Styles.input} !w-[95%]`}
                            required
                          />
                        </div>
                        <div className="1280px:w-[50%] 768px:w-[70%] w-[100%]">
                          <label className="block pb-2">
                            Postcode / ZIP (optional) :
                          </label>
                          <input
                            type="text"
                            className={`${Styles.input} !w-[95%]`}
                            required
                          />
                        </div>
                        <div className="1280px:w-[50%] 768px:w-[70%] w-[100%]">
                          <label className="block pb-2">Country :</label>
                          <input
                            type="text"
                            className={`${Styles.input} !w-[95%]`}
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          className="mt-[10px]
                      p-2 border bg-[#077bc4] text-white 
                      1024px:text-[18px] 768px:text-[17px] text-[16px] font-bold 1024px:w-[15%] 768px:w-[25%] w-[50%] rounded-md"
                          onClick={() => {
                            setIsForm(false);
                            setBillingAddressForm(false);
                            setBillingAddress(false);
                          }}
                        >
                          Save Address
                        </button>
                      </div>
                    </form>
                  </div>
                        </div>
                      ):null
                    }
                    {
                      shippingForm ? (
                        <div className="">
                              <div className="pl-1 pt-3 1024px:w-[70%] w-[100%]">
                  <h1
                className="768px:text-[28px] text-[25px] text-[#242424] 
                    font-semibold capitalize px-2 768px:ml-[30px] ml-[8px]"
              >
                Shipping address
              </h1>
              <form className="mt-[20px] 768px:ml-[30px] ml-[10px]">
                <div className="w-full flex flex-col pb-3 768px:gap-[15px] gap-[10px]">
                  <div className="1280px:w-[50%] 768px:w-[70%] w-[100%]">
                    <label className="block pb-2"> Name :</label>
                    <input
                      type="text"
                      className={`${Styles.input} !w-[95%]`}
                      required
                    />
                  </div>
                  <div className="1280px:w-[50%] 768px:w-[70%] w-[100%]">
                    <label className="block pb-2"> Email :</label>
                    <input
                      type="email"
                      className={`${Styles.input} !w-[95%]`}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="1280px:w-[50%] 768px:w-[70%] w-[100%]">
                    <label className="block pb-2">Phone :</label>
                    <input
                      type="number"
                      className={`${Styles.input} !w-[95%]`}
                      required
                    />
                  </div>
                  <div className="1280px:w-[50%] 768px:w-[70%] w-[100%]">
                    <label className="block pb-2">Address :</label>
                    <input
                      type="text"
                      className={`${Styles.input} !w-[95%]`}
                      required
                    />
                  </div>
                  <div className="1280px:w-[50%] 768px:w-[70%] w-[100%]">
                    <label className="block pb-2">Town / City :</label>
                    <input
                      type="text"
                      className={`${Styles.input} !w-[95%]`}
                      required
                    />
                  </div>
                  <div className="1280px:w-[50%] 768px:w-[70%] w-[100%]">
                    <label className="block pb-2">
                      Postcode / ZIP (optional) :
                    </label>
                    <input
                      type="text"
                      className={`${Styles.input} !w-[95%]`}
                      required
                    />
                  </div>
                  <div className="1280px:w-[50%] 768px:w-[70%] w-[100%]">
                    <label className="block pb-2">Country :</label>
                    <input
                      type="text"
                      className={`${Styles.input} !w-[95%]`}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-[10px]
                p-2 border bg-[#077bc4] text-white 
                1024px:text-[18px] 768px:text-[17px] text-[16px] font-bold 1024px:w-[15%] 768px:w-[25%] w-[50%] rounded-md"
                    onClick={() => {
                      setIsForm(false);
                      setShippingForm(false);
                      setShippingAddress(false);
                    }}
                  >
                    Save Address
                  </button>
                </div>
              </form>
            </div>
                        </div>
                      ):null
                    }
                  </div>
                ):(
                  <div className="w-full 1024px:w-[98%] flex flex-col 1024px:flex-row items-center justify-center 
                  1280px:gap-[50px] 1024px:gap-[20px] 768px:gap-[30px] gap-[20px]">
                     <div className="1500px:w-[30%] 768px:w-[60%] 1024px:w-[50%] w-[98%] rounded-md shadow-md shadow-[gray] bg-white">
                    <div
                      className="flex items-center
                               gap-[20px] 768px:py-2 py-1"
                    >
                      <MdOutlineMapsHomeWork
                        
                        className="text-[#077bc4] 768px:ml-[30px] ml-[10px] 768px:text-[40px] text-[30px]"
                      />
                      <h1 className="font-[600] 768px:text-[28px] text-[20px] text-[#077bc4] capitalize">
                        billing address
                      </h1>
                      <div
                        className="768px:ml-[15px] ml-[8px] cursor-pointer flex items-center "
                        onClick={() => {
                          setIsForm(true);
                          setBillingAddressForm(true);
                          setShippingForm(false);
                        }}
                      >
                        <MdEditLocationAlt
                          size={20}
                          title="Edit Address"
                          className="text-[red] mr-[3px]"
                        />{" "}
                        <span
                          className="768px:text-[18px] text-[16px]
                                 font-semibold capitalize text-[orangered]"
                        >
                          edit
                        </span>
                      </div>
                    </div>
                    {billingAddress ? (
                      <div
                        className="w-full overflow-hidden pt-[10px]
                                      "
                      >
                        <h3
                          className="text-center 768px:text-[18px] text-[17px]
                                      text-[700] text-[orangered] py-1"
                        >
                          You have not set up this type of address yet.
                        </h3>
                        <img
                          src={a1}
                          alt=""
                          className="w-full 768px:h-[250px] h-[200px] object-contain pt-[10px]"
                        />
                      </div>
                    ) : (
                      <div
                        className="w-full overflow-hidden pt-[10px] 
                                      768px:px-[25px] px-[10px] pb-[15px] flex flex-col justify-center gap-[10px]"
                      >
                        <h3
                          className="768px:text-[19px] text-[18px] font-semibold
                                           text-[#242424]"
                        >
                          Name :{" "}
                          <span className="text-[17px] italic ml-[5px]">
                            {address.name}
                          </span>
                        </h3>
                        <h3
                          className="768px:text-[19px] text-[18px] font-semibold
                                           text-[#242424]"
                        >
                          Email :{" "}
                          <span className="768px:text-[17px] text-[16px] italic 768px:ml-[5px] ml-[1px]">
                            {address.email}
                          </span>
                        </h3>
                        <h3
                          className="768px:text-[19px] text-[18px] font-semibold
                                           text-[#242424]"
                        >
                          Address :{" "}
                          <span className="text-[17px] italic ml-[5px]">
                            {address.address}
                          </span>
                        </h3>
                        <h3
                          className="768px:text-[19px] text-[18px] font-semibold
                                           text-[#242424]"
                        >
                          City :{" "}
                          <span className="text-[17px] italic ml-[5px]">
                            {address.city}
                          </span>
                        </h3>
                        <h3
                          className="768px:text-[19px] text-[18px] font-semibold
                                           text-[#242424]"
                        >
                          Zip Code :{" "}
                          <span className="text-[17px] italic ml-[5px]">
                            {address.zcode}
                          </span>
                        </h3>
                        <h3
                          className="768px:text-[19px] text-[18px] font-semibold
                                           text-[#242424]"
                        >
                          Phone Number :{" "}
                          <span className="text-[17px] italic ml-[5px]">
                            {address.Pnum}
                          </span>
                        </h3>
                      </div>
                    )}
                  </div>
                  <div className="1500px:w-[30%] 768px:w-[60%] 1024px:w-[50%] w-[98%] rounded-md shadow-md shadow-[gray] bg-white">
              <div className="flex items-center gap-[20px] 768px:py-2 py-1">
                <LiaShippingFastSolid
                  
                  className="text-[#077bc4] 768px:ml-[30px] ml-[6px] 768px:text-[40px] text-[30px]"
                />
                <h1 className="font-[600] 768px:text-[26px] text-[19px] text-[#077bc4] capitalize">
                  shipping address
                </h1>
                <div
                  className="768px:ml-[15px] ml-[3px] cursor-pointer flex items-center "
                  onClick={() => {
                    setIsForm(true);
                    setShippingForm(true);
                    setBillingAddressForm(false);
                  }}
                >
                  <RiMapPinAddFill
                    size={20}
                    title="Add Shipping Address"
                    className="text-[red] mr-[3px]"
                  />{" "}
                  <span
                    className="768px:text-[18px] text-[16px]
                           font-semibold capitalize text-[orangered]"
                  >
                    add
                  </span>
                </div>
              </div>
              {shippingAddress ? (
                <div
                  className="w-full overflow-hidden pt-[10px]
                                "
                >
                  <h3
                    className="text-center 768px:text-[18px] text-[17px]
                                text-[700] text-[orangered] py-1"
                  >
                    You have not set up this type of address yet.
                  </h3>
                  <img
                    src={a2}
                    alt=""
                    className="w-full 768px:h-[250px] h-[200px] object-contain pt-[10px]"
                  />
                </div>
              ) : (
                <div
                        className="w-full overflow-hidden pt-[10px] 
                                      768px:px-[25px] px-[10px] pb-[15px] flex flex-col justify-center gap-[10px]"
                      >
                        <h3
                          className="768px:text-[19px] text-[18px] font-semibold
                                           text-[#242424]"
                        >
                          Name :{" "}
                          <span className="text-[17px] italic ml-[5px]">
                            {address.name}
                          </span>
                        </h3>
                        <h3
                          className="768px:text-[19px] text-[18px] font-semibold
                                           text-[#242424]"
                        >
                          Email :{" "}
                          <span className="768px:text-[17px] text-[16px] italic 768px:ml-[5px] ml-[1px]">
                            {address.email}
                          </span>
                        </h3>
                        <h3
                          className="768px:text-[19px] text-[18px] font-semibold
                                           text-[#242424]"
                        >
                          Address :{" "}
                          <span className="text-[17px] italic ml-[5px]">
                            {address.address}
                          </span>
                        </h3>
                        <h3
                          className="768px:text-[19px] text-[18px] font-semibold
                                           text-[#242424]"
                        >
                          City :{" "}
                          <span className="text-[17px] italic ml-[5px]">
                            {address.city}
                          </span>
                        </h3>
                        <h3
                          className="768px:text-[19px] text-[18px] font-semibold
                                           text-[#242424]"
                        >
                          Zip Code :{" "}
                          <span className="text-[17px] italic ml-[5px]">
                            {address.zcode}
                          </span>
                        </h3>
                        <h3
                          className="768px:text-[19px] text-[18px] font-semibold
                                           text-[#242424]"
                        >
                          Phone Number :{" "}
                          <span className="text-[17px] italic ml-[5px]">
                            {address.Pnum}
                          </span>
                        </h3>
                      </div>
              )}
                 </div> 
                  </div>
                )
              }
            </div>
           )
       }
      {active === 5 && (
        <div className="1280px:pl-14 768px:pl-6 pl-[5px] pt-3 w-full">
          <div className="bg-white 1280px:w-[63%] 768px:w-[90%] w-[99.5%]
           py-2 px-3 rounded-sm shadow-md  shadow-[#077bc4]">
            <div className="flex items-center text-[#077bc4]">
              <RiAccountBoxLine size={35} className="pr-[5px]" />
              <h1
                className="text-[22px] 
                    font-semibold capitalize px-[5px] pt-[5px]"
              >
                account details
              </h1>
            </div>
            <div
              className="w-full overflow-hidden pt-[10px] 
                                1280px:px-[25px] 768px:px-[15px] px-[5px] pb-[15px] flex flex-col justify-center gap-[10px]"
            >
              <h3
                className="768px:text-[19px] text-[18px] font-semibold
                                     text-[#242424]"
              >
                Name :{" "}
                <span className="768px:text-[17px] text-[16px] italic ml-[5px]">
                  {address.name}
                </span>
              </h3>
              <h3
                className="768px:text-[19px] text-[18px] font-semibold
                                     text-[#242424]"
              >
                Email :{" "}
                <span className="768px:text-[17px] text-[16px] italic 768px:ml-[5px] ml-[1px]">
                  {address.email}
                </span>
              </h3>
              <h3
                className="768px:text-[19px] text-[18px] font-semibold
                                     text-[#242424]"
              >
                User Name :{" "}
                <span className="768px:text-[17px] text-[16px] italic ml-[5px]">{userName}</span>
              </h3>
              <h3
                className="768px:text-[19px] text-[18px] font-semibold
                                     text-[#242424]"
              >
                Address :{" "}
                <span className="768px:text-[17px] text-[16px] italic ml-[5px]">
                  {address.address}
                </span>
              </h3>
              <h3
                className="768px:text-[19px] text-[18px] font-semibold
                                     text-[#242424]"
              >
                City :{" "}
                <span className="768px:text-[17px] text-[16px] italic ml-[5px]">
                  {address.city}
                </span>
              </h3>
              <h3
                className="768px:text-[19px] text-[18px] font-semibold
                                     text-[#242424]"
              >
                Phone Number :{" "}
                <span className="768px:text-[17px] text-[16px] italic ml-[5px]">
                  {address.Pnum}
                </span>
              </h3>
            </div>
            <h4 className="pt-[20px] 768px:text-[18px] text-[15px] font-semibold 
            768px:pl-[10px] pl-[5px] capitalize pb-[20px]">
              <span className="text-[orangered] ">
                if you wish to change your <span className="text-[red]">password <MdOutlineKey  className="inline 768px:text-[20px] text-[17px]"/> 
                </span>
              </span>
              , <span className="text-[orange]"> please follow the instructions below</span>
            </h4>
            <div className="pt-[20px]">
                <div className="flex items-center gap-[10px] 768px:pl-[10px] pl-[5px]">
                    <RiLockPasswordLine size={25} className="text-[#077bc4]"/>
                    <h1 className="text-[#077bc4] text-[22px] capitalize
                    pt-[5px] font-semibold">change password</h1>
                </div>
                <div className="768px:pt-[30px] pt-[10px] 768px:pl-[20px] pl-[5px] 1024px:w-[60%] 768px:w-[80%] w-[100%] pb-[3px]">
              <label
                htmlFor="password"
                className="block font-medium text-[#242424]"
              >
                Current Password :
              </label>
              <div className="mt-1 relative w-full">
                <input
                  type={visible?"text":"password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  placeholder="Enter current password***"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block !w-[100%] px-3 py-2 border border-gray-300 rounded-md 
                  shadow-sm placeholder-gray-500 
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible? <AiOutlineEye 
                size={22}
                className="absolute right-3 top-2 cursor-pointer text-gray-500"
                onClick={()=>setVisible(false)} 
                />  : <AiOutlineEyeInvisible 
                size={22}
                className="absolute right-3 top-2 cursor-pointer text-gray-500"
                onClick={()=>setVisible(true)} 
                />}
              </div>
            </div>
                <div className="768px:pt-[30px] pt-[10px] 768px:pl-[20px] pl-[5px] 1024px:w-[60%] 768px:w-[80%] w-[100%] pb-[3px]">
              <label
                htmlFor="password1"
                className="block font-medium text-[#242424]"
              >
                New Password :
              </label>
              <div className="mt-1 relative w-full">
                <input
                  type={visible1?"text":"password"}
                  name="password1"
                  autoComplete="current-password"
                  required
                  placeholder="Enter new password***"
                  value={password1}
                  onChange={(e) => setPassword1(e.target.value)}
                  className="appearance-none block !w-[100%] px-3 py-2 border border-gray-300 rounded-md 
                  shadow-sm placeholder-gray-500 
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible1? <AiOutlineEye 
                size={22}
                className="absolute right-3 top-2 cursor-pointer text-gray-500"
                onClick={()=>setVisible1(false)} 
                />  : <AiOutlineEyeInvisible 
                size={22}
                className="absolute right-3 top-2 cursor-pointer text-gray-500"
                onClick={()=>setVisible1(true)} 
                />}
              </div>
            </div>
                <div className="768px:pt-[30px] pt-[10px] 768px:pl-[20px] pl-[5px] 1024px:w-[60%] 768px:w-[80%] w-[100%] pb-[20px]">
              <label
                htmlFor="password2"
                className="block font-medium text-[#242424]"
              >
                Confirm Password :
              </label>
              <div className="mt-1 relative w-full">
                <input
                  type={visible2?"text":"password"}
                  name="password2"
                  autoComplete="current-password"
                  required
                  placeholder="Confirm new password***"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  className="appearance-none block !w-[100%] px-3 py-2 border border-gray-300 rounded-md 
                  shadow-sm placeholder-gray-500 
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible2? <AiOutlineEye 
                size={22}
                className="absolute right-3 top-2 cursor-pointer text-gray-500"
                onClick={()=>setVisible2(false)} 
                />  : <AiOutlineEyeInvisible 
                size={22}
                className="absolute right-3 top-2 cursor-pointer text-gray-500"
                onClick={()=>setVisible2(true)} 
                />}
              </div>
            </div>
            <button
                    type="submit"
                    className="mt-[10px] mb-[20px] 768px:ml-[20px] ml-[10px] capitalize
                py-2 768px:px-[12px] px-[6px] border bg-[orangered] text-white 
                768px:text-[17px] text-[16px] font-bold 1500px:w-[25%] 1024px:w-[30%] 768px:w-[35%] w-[55%] rounded-md">
                    change password
                  </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const AllOrders = () => {
  const [placeOrder, setPlaceOrder] = useState([]);
  const orders = [
    {
      _id: "242353445wgdfghrret34535",
      orderItems: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      totalPrice: 1200,
      orderStatus: "Processing",
    },
  ];
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    { field: "name", headerName: "Order Name", minWidth: 150, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        if (params.data && params.data.status) {
          const status = params.data.status;
          console.log(status);
          return status === "Delivered" ? "greenColor" : "redColor";
        } else {
          return "defaultColor";
        }
      },
    },
    {
      field: "itemQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
    {
      feild: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];
  const row = [];
  orders &&
    orders.forEach((i) => {
      row.push({
        id: i._id,
        name: i.orderItems[0].name,
        itemQty: i.orderItems.length,
        total: "Tk." + i.totalPrice,
        status: i.orderStatus,
      });
    });
  return (
    <div className="1024px:pl-8 pl-0 pt-1 768px:max-w-[98%] 768px:pl-2 1024px:w-full">
      {!placeOrder ? (
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={10}
          disableRowSelectionOnClick
          autoHeight
          responsiveLayout
        
        />
      ) : (
        <div className="1024px:pl-8 768px:pl-3 pl-1 pt-2">
          <div
            className="flex items-center 768px:gap-[10px] gap-[3px] rounded-md 
                     shadow-md shadow-[#f7d6ab] 1024px:px-2 px-1 py-1 1500px:w-[60%] 1024px:w-[90%]  w-[100%]"
          >
            <RiErrorWarningLine  className="text-[red] 768px:text-[30px] text-[18px]" />
            <h4 className="text-[#242424] 768px:font-semibold font-[500] 1500px:text-[18px]
            1024px:text-[16px] 768px:text-[15px] text-[14px]">
              <span className="text-[orangered]">
                No order has been made yet.
              </span>
               <span className="hidden 768px:inline"> Visit our shop and choice your best products.</span>
            </h4>
            <Link
              to={`/shop`}
              className="1500px:text-[18px] 1024px:text-[16px]  768px:text-[15px] text-[14px] 
                      font-[600]  768px:font-bold 768px:px-2 px-[5px] py-1 underline text-white bg-[orange]  border-none outline-none
                        rounded-md ml-[3px] 768px:ml-0"
            >
              Visit shop
            </Link>
          </div>
          <div className="768px:w-[95%] w-[100%]  overflow-hidden">
            <img src={o2} alt="" className="w-full 768px:h-[500px] h-[280px] 768px:object-contain object-cover" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileContent;


