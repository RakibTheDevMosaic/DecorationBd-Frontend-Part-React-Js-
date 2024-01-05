import React from 'react'
import { RxPerson } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'
import { FaCloudDownloadAlt } from "react-icons/fa";
import { BsListCheck } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";


const ProfileSidebar = ({active,setActive}) => {
    const navigate = useNavigate()
  return (
    <div className='w-full  bg-white shadow-sm rounded-[10px] 768px:p-4 300px:p-3 1280px:pt-8 '>
        <div className="flex items-center cursor-pointer w-full mb-8"
        onClick={()=>setActive(1)}>
            <RxPerson size={22} color={active===1?"red":""}/>
            <span className={`pl-3 ${active===1?"text-[red]":""} hidden 1280px:inline`}>Profile</span>
        </div>
        <div className="flex items-center cursor-pointer w-full mb-8"
        onClick={()=>setActive(2)}>
            <BsListCheck size={22} color={active===2?"red":""}/>
            <span className={`pl-3 ${active===2?"text-[red]":""} hidden 1280px:inline`}>Orders</span>
        </div>
        <div className="flex items-center cursor-pointer w-full mb-8"
        onClick={()=>setActive(3)}>
            <FaCloudDownloadAlt size={22} color={active===3?"red":""}/>
            <span className={`pl-3 ${active===3?"text-[red]":""} hidden 1280px:inline`}>Downloads</span>
        </div>
        <div className="flex items-center cursor-pointer w-full mb-8"
        onClick={()=>setActive(4)}>
            <FaMapLocationDot size={22} color={active===4?"red":""}/>
            <span className={`pl-3 ${active===4?"text-[red]":""} hidden 1280px:inline`}>Address</span>
        </div>
        <div className="flex items-center cursor-pointer w-full mb-8"
        onClick={()=>setActive(5)}>
            <RiAccountPinCircleFill size={22} color={active===5?"red":""}/>
            <span className={`pl-3 ${active===5?"text-[red]":""} hidden 1280px:inline`}>Account Details</span>
        </div>
        <div className="flex items-center cursor-pointer w-full 1280px:mb-8 mb-2"
        onClick={()=>{
            setActive(6);
            navigate('/');
        }}>
            <IoMdLogOut size={22} color={active===6?"red":""}/>
            <span className={`pl-3 ${active===6?"text-[red]":""} hidden 1280px:inline`}>Logout</span>
        </div>
    </div>
  )
}

export default ProfileSidebar
