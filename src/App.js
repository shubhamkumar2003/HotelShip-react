import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LoginPage from './pages/UserPages/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/UserPages/HomePage';
import SignupPage from './pages/UserPages/SignupPage';
import Dashboard from './pages/UserPages/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgotPassword from './pages/UserPages/ForgotPassword';
import UpdatePassword from './pages/UserPages/UpdatePassword';
import HotelForm from './pages/AdminPages/HotelForm';
import HotelList from './pages/UserPages/HotelList';



function App() {
  console.log("appa page")

  return (
    <Router>
      <div className="App">
        <ToastContainer position="top-center" />
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/forgot/password' element={<ForgotPassword />} />
          <Route path='/update/password' element={<UpdatePassword />} />
          <Route path='/admin hotelform' element={<HotelForm />} />
          <Route path='nameOf/:state/:city/district' element={<HotelList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
