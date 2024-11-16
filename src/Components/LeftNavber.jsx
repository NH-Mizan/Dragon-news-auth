import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavber = () => {
    const [categoris, setCategoris] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then((res) => res.json())
            .then((data) => setCategoris(data.data.news_category))
    }, [])
    return (
        <div>
            <h2 className='text-xl font-bold btn mb-4'>All Category : ({categoris.length}) </h2>
            <div className="flex justify-center  flex-col  ">
                {
                    categoris.map((newsCategory) => (
                        <NavLink to={`/newsCategory/${newsCategory.category_id}`} className='btn btn-outline btn-primary my-2  ' key={newsCategory.category_id}>{newsCategory.category_name}</NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default LeftNavber;