import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const FindUs = () => {
    return (
        <div>
            <h2 className="text-xl btn font-bold">Find Us On </h2>
                <div className="join flex join-vertical mt-4 ">
                    <button className="btn join-item justify-start text-xl"><FaFacebook className='text-blue-500'/>FaceBook</button>
                    <button className="btn join-item justify-start text-xl">< FaInstagram  className='text-red-500' />Instagram</button>
                    <button className="btn join-item justify-start text-xl">< FaTwitter  className='text-blue-500' />Twitter</button>
                </div>

        </div>
    );
};

export default FindUs;