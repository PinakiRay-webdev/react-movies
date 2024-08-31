import React , {useState} from "react";
import twitterX from "./Assets/twitterX-logo.svg";
import google from "./Assets/google-logo.svg";
import apple from "./Assets/apple-logo.svg";
import loginBg from './Assets/login-bg.jpg'
import { FaRegEye , FaRegEyeSlash } from "react-icons/fa";
const Login = () => {

  const [login, setLogin] = useState(false);

  const [signup, setSignup] = useState(true);

  const [togglePassword, setTogglePassword] = useState(true)

  const [toggleInput, setToggleInput] = useState(true);

  const showPass = () =>{
    setTogglePassword(!togglePassword);
    setToggleInput(!toggleInput);
  }

  const toggleSignUp = () =>{
    setSignup(!signup);
    setLogin(!login);
  }

  const toggleLogin = () =>{
    setLogin(!login);
    setSignup(!signup);
  }

  return (
    <div className="w-[100vw] h-screen pl-[10vw] flex">
      {/* left side container  */}
      <div className="h-screen w-[30vw] text-center flex items-center justify-center relative">
        <div className="w-[90%]">
          <header className="absolute top-5 right-5 font-semibold text-sm text-gray-600 cursor-pointer">
            Go back
          </header>

          {/* login and sign up section  */}
          <div className="login-and-Signup flex items-center justify-between gap-7" >


            {/* sign up section  */}
          <div className={`min-w-[100%] px-2 ${signup ? "block" : "hidden"}`} >
            <h1 className="font-bold text-2xl">Create Account</h1>
            {/* icons section  */}
            <div className="flex justify-between my-8 w-[70%] mx-auto">
              <img
                className="w-10 shadow-xl cursor-pointer p-1 rounded-lg"
                src={google}
                alt=""
              />
              <img
                className="w-10 shadow-xl cursor-pointer p-1 rounded-lg"
                src={apple}
                alt=""
              />
              <img
                className="w-10 shadow-xl cursor-pointer p-1 rounded-lg "
                src={twitterX}
                alt=""
              />
            </div>

            <div className="flex justify-between items-center gap-4">
              <div className="border-b-2 w-full h-0"></div>
              <p className="text-xs font-semibold">Or</p>
              <div className="border-b-2 w-full h-0"></div>
            </div>

            <form action="" className="my-8">
              {/* first name and last name section */}
              <div className="grid grid-cols-2 text-left gap-4">
                <div >
                  <label>First Name*</label>
                  <br />
                  <input className="outline-none border-b border-gray-300 px-1 py-2" type="text" placeholder="Eg: John" />
                </div>
                <div>
                  <label>Last Name*</label>
                  <br />
                  <input className="outline-none border-b border-gray-300 px-1 py-2" type="text" placeholder="Eg: Grinffinder" />
                </div>
                <div className="col-span-2">
                  <label>Email*</label><br />
                  <input className="outline-none border-b border-gray-300 px-1 py-2 w-full" type="email" placeholder="Let us know your email id"/>
                </div>
                <div className="col-span-2">
                  <label>Password*</label><br />
                  <div className="relative" >
                  <input className="outline-none border-b border-gray-300 px-1 py-2 w-full" type={toggleInput ? "password" : "text"} placeholder="submit your password"/>
                  <i className="absolute bottom-2 right-4 cursor-pointer" onClick={showPass} >{togglePassword ? <FaRegEye/> : <FaRegEyeSlash/>}</i>
                  </div>
                  <p className="text-xs font-semibold my-2" >Must be at least 8 characters.</p>
                </div>
              </div>

              <button className="bg-black w-full py-2 text-white my-2" >Create Account</button>
            </form>
            <p className="text-sm font-semibold" >Already have an account?<span className="font-bold cursor-pointer" onClick={toggleLogin}> Login</span></p>
          </div>

          {/* login section  */}

          <div className={`min-w-[100%] px-2 ${login ? "block" : "hidden"}`}>
            <h1 className="font-bold text-2xl">Welcome back</h1>
            {/* icons section  */}
            <div className="my-8 w-[90%] mx-auto">
              <div className="flex items-center justify-center gap-3 border px-2 py-1 my-2 cursor-pointer" >
              <img
                className="w-10 p-1 rounded-lg"
                src={google}
                alt=""
              />
              <p className="font-semibold" >Continue with google</p>
              </div>

              <div className="flex items-center justify-center gap-3 border px-2 py-1 my-2 cursor-pointer" >
              <img
                className="w-10 p-1 rounded-lg"
                src={apple}
                alt=""
              />
              <p className="font-semibold" >Continue with Apple ID</p>
              </div>


              <div className="flex items-center justify-center gap-3 border px-2 py-1 cursor-pointer" >
              <img
                className="w-10 p-1 rounded-lg"
                src={twitterX}
                alt=""
              />
              <p className="font-semibold" >Continue with Twitter X</p>
              </div>
            </div>

            <div className="flex justify-between items-center gap-4">
              <div className="border-b-2 w-full h-0"></div>
              <p className="text-xs font-semibold">Or</p>
              <div className="border-b-2 w-full h-0"></div>
            </div>

            <form action="" className="my-8">
              {/* first name and last name section */}
              <div className="grid grid-cols-2 text-left gap-4">
                <div className="col-span-2">
                  <label>Email*</label><br />
                  <input className="outline-none border-b border-gray-300 px-1 py-2 w-full" type="email" placeholder="Let us know your email id"/>
                </div>
                <div className="col-span-2">
                  <label>Password*</label><br />
                  <div className="relative" >
                  <input className="outline-none border-b border-gray-300 px-1 py-2 w-full" type={toggleInput ? "password" : "text"} placeholder="submit your password"/>
                  <i className="absolute bottom-2 right-4 cursor-pointer" onClick={showPass} >{togglePassword ? <FaRegEye/> : <FaRegEyeSlash/>}</i>
                  </div>
                  <p className="text-xs font-semibold my-2" >Must be at least 8 characters.</p>
                </div>
              </div>

              <button className="bg-black w-full py-2 text-white my-2" >Login</button>
            </form>
            <p className="text-sm font-semibold" >Don't have account with us?<span className="font-bold cursor-pointer" onClick={toggleSignUp} > Sign up</span></p>
          </div>
          </div>


        </div>
      </div>

      {/* right side container */}
      <div className="w-[70vw] h-screen bg-blue-800 object-cover">
        <img className="w-full h-full object-cover" src={loginBg} alt="" />
      </div>
    </div>
  );
};

export default Login;
