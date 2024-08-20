    import React from 'react'
    import { useContext ,useEffect } from 'react';
    import { AuthContext ,  } from '../context/useContext';
    import { useNavigate } from 'react-router-dom';
    import Navbar from '../models/Navbar';
    import './home.css'
    
    export const Home = () => {
        const nav = useNavigate();
        const {isAuthenticated} = useContext(AuthContext);
        console.log(isAuthenticated)
        
        return (
        <div >
            <Navbar/>
        <div className='entire'>
            <div className="content">
                <h1 className="heading">
                    You Can Navigate to pages with the help of navbar that has link in it created by router-dom

                </h1>
            </div>
        </div>    
        </div>    
        )
    }

