import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import SignIn from './components/SignIn/SignIn';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className=''>
      <Router>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/profile' element={<Profile />} />
        {/* Add more routes for other pages */}
    </Routes>
    </Router>
    </div>
  );
};

export default App;
