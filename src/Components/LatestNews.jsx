import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='bg-base-200 mt-4 py-2'>
            <div  className='flex items-center gap-2  w-11/12 mx-auto'>
            <p className='bg-[#D72050] text-base-100 px-3 py-2'>Latest:</p>
            <Marquee pauseOnHover={true} speed={100} className=''>

            <Link to= '/news'className='text-xl mx-4 text-green-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ex culpa animi excepturi pariatur neque? Id maxime aliquam atque cupiditate.</Link>

            <Link to= '/news'className='text-xl mx-4 text-red-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ex culpa animi excepturi pariatur neque? Id maxime aliquam atque cupiditate.</Link>

            <Link to= '/news'className='text-xl mx-4 text-lime-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ex culpa animi excepturi pariatur neque? Id maxime aliquam atque cupiditate.</Link>

            <Link to= '/news'className='text-xl mx-4 text-black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ex culpa animi excepturi pariatur neque? Id maxime aliquam atque cupiditate.</Link>
            </Marquee>
            
        </div>
        </div>
    );
};

export default LatestNews;