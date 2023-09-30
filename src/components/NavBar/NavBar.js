import React, { useState,useEffect } from 'react'
import './NavBar.css'
import { Link, useNavigate } from 'react-router-dom';
import { doLogOut, getCurrentUser, isLoggedIn } from '../auth/Index';

const NavBar = () => {
    const [login,setLogin] =useState(false)
  const [user,SetUser] = useState(undefined)
    const navigate=useNavigate();

    // useEffect(()=>{
    //     setLogin(isLoggedIn())
    //     SetUser(getCurrentUser())
    // },[login])
   
    const logout=()=>{
        doLogOut(()=>{
          setLogin(false)
          navigate("/")
        })
    }

    return (
        <header>
        {/* LOGO*/}
            <div className='navbar'>
                <div className='Logo'>
                    <h3>HotelShip</h3>
                </div>
              {/* Buttons */}
                <div className='buttons'>
                <Link to='/'><button className="button">Home</button></Link>
                    <button className="button">Contact Us</button>
                    <button className="button">Deals</button>
                    <button className="button">About us</button>
                </div>
                <Link to='/admin hotelform'><button className="button">AdminPage</button></Link>
                {/* auth Buttons */}
                <div className='auth-buttons'>

            {/*{
                !login &&
                (<div><Link to='/login'><button className="auth-button">LogIn </button></Link>
                <Link to='/signup'><button className="auth-button">SignUp</button></Link></div>)
                
            }
            {
                login && (<div>
                    <button className="auth-button">Dashboard</button>
                <button onClick={logout}className="auth-button">LogOut</button>
                    </div>)
            }
        */}
        {
            !isLoggedIn() ? (
                <div>
                    <Link to='/login'><button className="auth-button">LogIn </button></Link>
                    <Link to='/signup'><button className="auth-button">SignUp</button></Link>
                </div>
            ) : (
                <div>
                    <button className="auth-button">Dashboard</button>
                    <button onClick={logout} className="auth-button">LogOut</button>
                </div>
            )
        }
        </div>        
            </div>
        </header>
    )
}

export default NavBar
