import React from 'react';
import { Link, NavLink } from 'react-router-dom';



const Navbar = () => {
    return (
        <div className='flex justify-between items-center border-b-2 pb-4 mt-4'>
            <div className='logo'>
                <h1 className='text-xl font-bold '>Dragon News</h1>
            </div>
            <div className="nav space-x-5 text-center  mx-auto font-bold font-xl">
                <NavLink to='/'> Home </NavLink>
                <NavLink to='/career'> Career </NavLink>
                <NavLink to = '/about'> About </NavLink>
            </div>
            <div className="login"></div>
            <img src="https://i.ibb.co.com/JKwk1Fj/user.png" alt="" className='w-12'/>
            <Link to={'/auth/login'} className='font-bold text-xl ml-4 btn  bg-lime-400'>Login</Link>

        </div>
    );
};

export default Navbar;