import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const RightNavbar = () => {
    return (
        <div>
            <h2 className="text-xl btn font-bold">Login With </h2>
            <div className="flex flex-col my-4 gap-4">
                <button className='btn btn-outline '><FaGoogle />Login With Google</button>
                <button className='btn btn-outline'><FaGithub />Login With GitHub</button>
            </div>

            
        </div>
    );
};

export default RightNavbar;