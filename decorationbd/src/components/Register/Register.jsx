import React,{useState} from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import {FcGoogle} from "react-icons/fc";
import {FaFacebookSquare} from "react-icons/fa";
import styles from "../../Styles/Styles"
import { Link } from "react-router-dom";
const Register = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [password2,setPassword2] = useState("");
    const[visible,setVisible] = useState("");
    const[ConfirmPassvisible,setConfirmPassVisible]=useState(false);
    const[username,setUsername] = useState("");
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="768px:mt-6 mt-14 1024px:mt-[70px] 1280px:mt-14 text-center text-2xl 300px:text-3xl font-extrabold text-gray-700">
          Register as a new user
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="username"
                  autoComplete="username"
                  required
                  placeholder="Enter a valid username***"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md 
                  shadow-sm placeholder-gray-400 
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="Enter your email***"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md 
                  shadow-sm placeholder-gray-400 
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible?"text":"password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  placeholder="Enter your password***"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md 
                  shadow-sm placeholder-gray-400 
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible? <AiOutlineEye 
                size={22}
                className="absolute right-2 top-2 cursor-pointer text-gray-500"
                onClick={()=>setVisible(false)} 
                />  : <AiOutlineEyeInvisible 
                size={22}
                className="absolute right-2 top-2 cursor-pointer text-gray-500"
                onClick={()=>setVisible(true)} 
                />}
              </div>
            </div>
            <div>
              <label
                htmlFor="password2"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={ConfirmPassvisible?"text":"password"}
                  name="password2"
                  autoComplete="current-password"
                  required
                  placeholder="Confirm your password***"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md 
                  shadow-sm placeholder-gray-400 
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {ConfirmPassvisible? <AiOutlineEye 
                size={22}
                className="absolute right-2 top-2 cursor-pointer text-gray-500"
                onClick={()=>setConfirmPassVisible(false)} 
                />  : <AiOutlineEyeInvisible 
                size={22}
                className="absolute right-2 top-2 cursor-pointer text-gray-500"
                onClick={()=>setConfirmPassVisible(true)} 
                />}
              </div>
            </div>
            <div className={`${styles.normal_flex} justify-between`}>
                <div className={`${styles.normal_flex}`}>
                     <button type="submit" className=" relative 768px:w-[180px] w-[122px] 300px:w-[155px] h-[40px] flex
                     py-2 300px:px-4 px-2 border border-transparent text-sm font-medium rounded-md text-white
                     bg-red-600 hover:bg-red-700 ">Continue with <span className="absolute 300px:right-3 right-1
                     300px:top-2 top-[10px] items-center"><FcGoogle className="300px:text-[18px] text-[15px]"/></span></button>
                </div>
                <div>
                <button type="submit" className=" relative 768px:w-[180px] w-[122px] 300px:w-[155px] h-[40px] flex
                     py-2 300px:px-4 px-2 border border-transparent text-sm font-medium rounded-md text-white
                     bg-blue-600 hover:bg-blue-700 ">Continue with <span className="absolute 300px:right-3 right-1
                     300px:top-2 top-[10px] items-center "><FaFacebookSquare className="300px:text-[18px] text-[15px]"/></span></button>
                </div>
            </div>
            <div>
                    <button type="submit" className="group relative w-full h-[40px] flex justify-center 
                    py-2 px-4 border border-transparent text-md font-medium rounded-md text-white
                    bg-blue-600 hover:bg-blue-700 ">Sing In</button>
                </div>
                <div className={`${styles.normal_flex} w-full`}>
                    <h4>Already have an acccount?</h4>
                    <Link to="/login" className="text-blue-600 pl-2">
                        Login
                    </Link>
                </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
