import React from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FaRegEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const {
        title,
        rating,
        author,
        total_view,
        thumbnail_url,
        others_info: { is_todays_pick, is_trending },
        details,
    } = news;

    return (
        <div className="card bg-base-100 shadow-xl my-12 p-4">
            <div className="relative">
                <img
                    src={thumbnail_url}
                    alt="Thumbnail"
                    className="w-full h-64  rounded-lg"
                />
                {is_todays_pick && (
                    <div className="badge badge-primary absolute top-4 left-4">
                        Today's Pick
                    </div>
                )}
                {is_trending && (
                    <div className="badge badge-secondary absolute top-4 right-4">
                        Trending
                    </div>
                )}
            </div>
            <div className="card-body">
                <h2 className="card-title text-xl font-bold">
                    {title}
                </h2>
                <div className="flex items-center gap-2 text-sm">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <p className="font-medium">{author.name}</p>
                        <p className="text-gray-500 text-xs">
                            {new Date(author.published_date).toLocaleString()}
                        </p>
                    </div>
                </div>
                <p className="text-gray-700 text-sm mt-2">
                    {details.substring(0, 100)}...
                </p>
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                        <Rating
                            style={{ maxWidth: 80 }}
                            value={rating.badge}
                            readOnly
                        />
                        <span>{rating.number}</span>
                        <span className="text-gray-500">({rating.badge})</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaRegEye />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;