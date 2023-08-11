import React , { useState } from 'react';
import logo from "../images/X_gray.png"
import googlrpng from "../images/google.png"
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import SignUp from "../SignUp/SignUp"

const SignIn = () => {

    const [isLogInPopUp,setIsLogInPopUp] = useState(false);
    const [isSignUpPopUp,setIsSignUPPopUp] = useState(false);

    const handleLoginPopupToggle = () => {
        setIsLogInPopUp(!isLogInPopUp);
      }
    const handleSignupPopupToggle = () => {
        setIsSignUPPopUp(!isSignUpPopUp);
      }

      const login = () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
    
        console.log('Username: ' + username);
        console.log('Password: ' + password);
      };
    
  return (
    <>
          {/* {isLogInPopUp && <div className="fixed inset-0 bg-black opacity-50 z-10"></div>} */}

          {isLogInPopUp && 
    <div className='fixed top-0 left-0 bg-[#000000c3] w-full h-screen z-50 flex items-center justify-center'>
    <div className='popup absolute w-[40vw] h-[78vh] bg-white top-20 rounded-lg'>
      <div className='text-shadeofgray font-bold w-full flex p-2 pr-4 justify-end cursor-pointer text-lg' onClick={handleLoginPopupToggle}>X</div>
      <Login logoo={logo} googlelogo={googlrpng} handlePopUp={handleLoginPopupToggle}  />
    </div>
  </div>
    }

    {
        isSignUpPopUp && 
        <div className='fixed top-0 left-0 bg-[#000000c3] w-full h-screen z-50 flex items-center justify-center'>
    <div className='popup absolute w-[36vw] h-[70vh] bg-gray-100 top-20 rounded-lg'>
      <div className='text-shadeofgray font-bold w-full flex p-2 pr-4 justify-end cursor-pointer text-lg' onClick={handleSignupPopupToggle}>X</div>
      <SignUp logoo={logo} googlelogo={googlrpng} handlePopUp={handleLoginPopupToggle} />
    </div>
    </div>
    }

    <div className="flex h-screen">
      {/* Left Side */}
      <div className="w-1/2 bg-black flex items-center justify-center">
        <img src={logo} alt="Twitter Logo" className="w-40" />
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-white p-12">
        <div>
        <img src={logo} alt="Twitter Logo" color='black' className="brightness-0 w-8 h-8 mb-8" />
        </div>
        <h1 className="text-4xl font-bold mb-8">Happening Now</h1>
        <p className="text-3xl font-bold mb-8">Join today</p>

        {/* Sign in with Google */}
        <button className="flex items-center bg-white rounded-full w-72 h-12 justify-center shadow-md p-2 mb-4">
          <img src={googlrpng} alt="Google Logo" className="w-6 mr-2" />
          <p className='font-semibold'> Sign in with Google</p>
        </button>
        

        <div className="flex items-center w-72 text-gray-500 mb-4">
          <div className="border-t border-gray-300 flex-grow"></div>
          <div className="px-3">or</div>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        {/* Create an account */}
        <button className="bg-blue-500 text-white rounded-full w-72 h-12 font-semibold shadow-md p-2 mb-4" onClick={
            handleSignupPopupToggle
        }>
          Create an account
        </button>

        <p className="text-gray-600 text-xs mb-8 w-72">
          By signing up, you agree to the <span className='text-[#1E97E1]'>Terms of Service</span> and <span className='text-[#1E97E1]'>Privacy Policy,</span>, including <span className='text-[#1E97E1]'>Cookie Use</span>.
        </p>


        <h2 className="text-2xl font-bold mb-4">Already have an account?</h2>
        <div className='w-72 flex justify-center items-center text-center'>
        <div to="/login" className="bg-white text-blue-500 rounded-full w-full cursor-pointer shadow-md p-2 " onClick={handleLoginPopupToggle}>
          Sign in
        </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignIn;
