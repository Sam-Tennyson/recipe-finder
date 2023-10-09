// libs
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

// routes
import { ROUTE_CONSTANTS } from '../shared/Routes'
import { APP_BASE_KEY, APP_BASE_URL } from '../shared/Constants'

const RecipeDetails = () => {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams()
    const [recipeData, setRecipeData] = useState({})
    let action_id = searchParams.get('action_id')

    useEffect(() => {
        const getRecipedata = async () => {
            let end_point = `/recipes/${action_id}/information`
            let query_params = `?apiKey=${APP_BASE_KEY}`
            let URL = APP_BASE_URL + end_point + query_params
            const { data } = await axios.get(URL)
            console.log(data);
            setRecipeData(data)
        }

        getRecipedata()
    }, [])

    return (
        <>
            <div className='w-4/5 mx-auto md:mt-20 mt-10'>
                <div className='mb-8 flex justify-between md:text-3xl text-lg'>
                    <h2 className='underline'>Recipe Information</h2>
                    <button className=' text-gray-800 rounded-2xl text-base hover:underline hover:text-gray-900' onClick={() => navigate(ROUTE_CONSTANTS.HOME)}>Back</button>
                </div>
                <div className='grid grid-col-8 gap-4'>
                    <div className=" mb-2 md:col-start-1 md:col-end-3 ">
                        <div className=" mx-auto border-gray-400 rounded-md mb-2">
                            <em>
                                <img
                                    src={recipeData?.image} alt="recipe-detail-image"
                                    className='object-contain text-center w-full max-h-48 mx-auto'
                                /> </em>
                        </div>
                    </div>
                    <div className=" mb-2 md:col-start-4 md:col-end-8 ">
                        <div className="mb-2 recipe-detail-class">
                            <h2 className='recipe-h2'>Title</h2>
                            <div className=""> {recipeData?.title}</div>
                        </div>
                        <div className="mb-2 recipe-detail-class">
                            <h2 className='recipe-h2'>Summary</h2>
                            <div className=""> <div dangerouslySetInnerHTML={{ __html: recipeData?.summary }} /></div>
                        </div>
                        <div className="mb-2 recipe-detail-class">
                            <h2 className='recipe-h2'>Diets</h2>
                            {recipeData?.diets?.map((item) => (<span className='mb-2 mr-2' key={item}>{item} .</span>))}
                        </div>
                    </div>
                </div>

                {recipeData?.instructions ? (

                    <div className="  mb-2  ">
                        <div className='recipe-detail-class mb-2 '>
                            <div className=" ">
                                <h2 className='recipe-h2'>Instructions</h2>

                                <div dangerouslySetInnerHTML={{ __html: recipeData?.instructions }} />
                            </div>
                        </div>
                    </div>

                ) : null}
            </div>
        </>
    )
}

export default RecipeDetails