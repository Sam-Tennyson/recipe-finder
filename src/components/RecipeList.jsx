import React, { useState } from 'react'
import Loader from './Loader';

const CommonCard = ({ key, data, handleClick }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const handleImageError = () => {
        setIsLoading(false);
    };
    return (
        <div key={key} className='border border-gray-200 rounded-lg shadow cursor-pointer hover:border-gray-200 hover:border-2'
            onClick={() => handleClick(data)}
        >
            <div className='flex items-center justify-center '>
                {isLoading && <Loader />}
                <img
                    className={`rounded-t-lg h-40 w-full object-cover ${isLoading ?'hidden': 'visited:'} `}
                    src={data?.recipe?.image}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    alt=""
                />
            </div>
            <div className='text-base sm:text-xs p-2'>
                {/* <p>{data?.recipe?.label}</p> */}
                {/* <div className='flex flex-wrap text'>
                {data?.recipe?.healthLabels?.map((item) => <span className='text-sm p-1'>{item}</span>)}
            </div> */}
            </div>
            <div className='recipe-title'>{data?.recipe?.label}</div>
        </div>
    )
}

const RecipeList = (props) => {
    const { displayData, handleClick } = props
    return (
        <>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-3 sm:grid-cols-2' >
                {displayData?.map((item, index) => <CommonCard key={index} data={item} handleClick={handleClick} />)}
            </div>
        </>
    )
}

export default RecipeList