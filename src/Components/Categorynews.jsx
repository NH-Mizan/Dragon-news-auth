import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const Categorynews = () => {
    const {data: news} = useLoaderData()
    console.log(news.data)
    return (
        <div>
            <h2 className="text-xl btn font-bold">Dragon News Home </h2>
            <p className='text-gray-400 mt-2'>{news.length} News Found On This Category</p>
            <div>
                {
                    news.map((singleNews)=>(
                        <NewsCard key={singleNews._id} news ={singleNews}></NewsCard>
                    ))
                }
            </div>
            
        </div>
    );
};

export default Categorynews;