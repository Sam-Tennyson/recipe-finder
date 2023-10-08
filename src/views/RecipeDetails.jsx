// libs
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// routes
import { ROUTE_CONSTANTS } from '../shared/Routes'

const RecipeDetails = () => {

    const navigate = useNavigate();
    const recipeDetailRed = useSelector(state => state.recipe.selectedRecipe) || null

    useEffect(() => {
        if (!recipeDetailRed) navigate(ROUTE_CONSTANTS.HOME)
    }, [recipeDetailRed])

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
                                    src={recipeDetailRed?.image} alt="recipe-detail-image"
                                    className='object-contain text-center w-full max-h-48 mx-auto'
                                /> </em>
                        </div>
                    </div>
                    <div className=" mb-2 md:col-start-4 md:col-end-8 ">
                        <div className="mb-2 recipe-detail-class">
                            <h2 className='recipe-h2'>Title</h2>
                            <div className=""> {recipeDetailRed?.label}</div>
                        </div>
                        <div className="mb-2 recipe-detail-class">
                            <h2 className='recipe-h2'>Ingredients</h2>
                            {recipeDetailRed?.ingredients?.map((item) => (<span className='mb-2 mr-2' key={item}>{item?.food} .</span>))}
                        </div>
                        <div className="mb-2 recipe-detail-class">
                            <h2 className='recipe-h2'>Health Labels</h2>
                            {recipeDetailRed?.healthLabels?.map((item) => (<span className='mb-2 mr-2' key={item}>{item} .</span>))}
                        </div>
                    </div>
                </div>

                <div className="  mb-2  ">
                    <div className='recipe-detail-class mb-2 '>
                        <div className=" ">
                            <h2 className='recipe-h2'>Instructions</h2>
                            {recipeDetailRed?.ingredientLines?.map((item) => (<span className='mb-2 mr-2 block' key={item}>{item} .</span>))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecipeDetails