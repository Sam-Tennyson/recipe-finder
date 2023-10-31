// libs
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// constants
import { useSelector } from 'react-redux'
import { ROUTE_CONSTANTS } from '../shared/Routes'

const RecipeDetails = () => {

    const navigate = useNavigate();
    const recipeDetailRed = useSelector(state => state.recipe.selectedRecipe) || null

    useEffect(() => {
        if (!recipeDetailRed) navigate(ROUTE_CONSTANTS.HOME)
    }, [recipeDetailRed])

    return (
        <>
            <div className='w-4/5 mx-auto mt-20'>
                <div className='mb-2 flex justify-between'>
                    <h2 className='text-3xl  underline'>Recipe Information</h2>
                    <button className='p-2 bg-gray-500 rounded-2xl' onClick={() => navigate(ROUTE_CONSTANTS.HOME)}>Back</button>
                </div>
                   <div className=" gap-4 mb-2">
                    <div className="w-1/3 mx-auto border-gray-400 rounded-md mb-2">
                        <em>
                            <img src={recipeDetailRed?.image} alt="recipe-detail-image"
                                className='object-cover text-center'
                            /> </em>
                    </div>
                    <div className='recipe-detail-class mb-2 '>
                        <div className="text-xl underline">Title- {recipeDetailRed?.label}</div>
                        <div className=" ">
                            <h2 className='underline'>Instructions</h2>
                            {recipeDetailRed?.ingredientLines?.map((item) => (
                                <span className='mb-2 mr-2 block' key={item}>{item} .</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mb-2 recipe-detail-class">
                    <h2 className='underline'>Ingredients</h2>
                    {recipeDetailRed?.ingredients?.map((item) => (
                        <span className='mb-2 mr-2' key={item}>{item?.food} .</span>
                    ))}
                </div>
                <div className="mb-2 recipe-detail-class">
                    <h2 className='underline'>Health Labels</h2>
                    {recipeDetailRed?.healthLabels?.map((item) => (
                        <span className='mb-2 mr-2' key={item}>{item} .</span>
                    ))}
                </div>
            </div>
        </>
    )
}

export default RecipeDetails