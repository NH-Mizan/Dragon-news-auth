import React from 'react';
import logo from"../assets/logo.png"
import moment from 'moment/moment';

const Header = () => {
    return (
        <div> 
            <div className='flex flex-col justify-center items-center gap-2'>
                <img src={logo} alt="" className='w-[350px] py-2' />
                <h2 className="text-xl  text-gray-400">Journalism Without Fear or Favour</h2>
                <p className='text-xl  text-green-400'>{moment().format('dddd, MMMM Do YYYY, h:mm:ss a')}</p>
            </div>
      
        </div>
    );
};

export default Header;