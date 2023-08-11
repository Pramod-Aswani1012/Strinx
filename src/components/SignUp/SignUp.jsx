import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white border border-gray-300 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-4">Create your account</h1>
        
        <input
          type="text"
          className="block w-full border border-gray-300 rounded-md px-3 py-2 mb-3"
          placeholder="Name"
        />
        
        <input
          type="text"
          className="block w-full border border-gray-300 rounded-md px-3 py-2 mb-3"
          placeholder="Phone number or email"
        />
        
        <input
          type="password"
          className="block w-full border border-gray-300 rounded-md px-3 py-2 mb-3"
          placeholder="Password"
        />
        
        <button className="bg-blue-500 text-white rounded-full w-full py-2 font-semibold hover:bg-blue-600">
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          By signing up, you agree to the <Link to="#" className="text-blue-500">Terms of Service</Link> and <Link to="#" className="text-blue-500">Privacy Policy</Link>, including <Link to="#" className="text-blue-500">Cookie Use</Link>.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
