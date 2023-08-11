import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
  const login = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Username: ' + username);
    console.log('Password: ' + password);
  };

  return (
    <>
    <div className="w-1/2 m-auto">
        
        <div className="mb-4 flex justify-center items-start">
          <img
            id="logo"
            src={props.logoo}
            alt="logo"
            className="w-8 h-8 filter brightness-0 contrast-100 saturate-0 grayscale-100"
          />
        </div>

        <div className="form-contents">
          <h1 className="font-bold text-2xl mb-4">Sign in to Twitter</h1>
          <button className="flex items-center bg-white rounded-full w-72 h-12 justify-center border border-[grey] p-2 mb-4">
          <img src={props.googlelogo} alt="Google Logo" className="w-6 mr-2" />
          <p className='font-semibold'> Sign in with Google</p>
        </button>
        <div className="flex items-center w-76 text-gray-500 mb-4">
          <div className="border-t border-gray-300 flex-grow"></div>
          <div className="px-3">or</div>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>
          <input
            type="text"
            id="username"
            className="block w-full border border-gray-300 rounded px-3 py-2 mb-3"
            placeholder="Phone number, email address"
          />

          <input
            type="password"
            id="password"
            className="block w-full border border-gray-300 rounded px-3 py-2 mb-3"
            placeholder="Password"
          />

          <button
            onClick={login}
            className="bg-blue-500 text-white rounded-full w-full py-2 font-semibold cursor-pointer hover:bg-blue-600"
          >
            Sign In
          </button>

          <div className="forget mt-4 flex justify-between">
            <a href="#" className="text-blue-500 text-xs">
              
            </a>
            <Link to="/" className="text-blue-500 text-xs" onClick={props.handlePopUp}>
              Sign up to Twitter
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
