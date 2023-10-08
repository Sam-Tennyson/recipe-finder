// libs
import React from 'react'
import { useNavigate } from 'react-router-dom'

// constants
import { useSelector } from 'react-redux'
import { ROUTE_CONSTANTS } from '../shared/Routes'

const RecipeDetails = () => {

    const navigate = useNavigate();
    const recipeDetailRed = useSelector(state => state.recipe.selectedRecipe) || null

    return (
        <>
            <div className='w-4/5 mx-auto mt-20'>
                <div className='mb-2 flex justify-between'>
                    <h2 className='text-3xl  underline'>Recipe Information</h2>
                    <button className='p-2 bg-gray-500 rounded-2xl' onClick={() => navigate(ROUTE_CONSTANTS.HOME)}>Back</button>
                </div>
                <div className="grid grid-rows-3 grid-flow-col gap-4 mb-2">
                    <div className="row-span-3 mx-auto p-2 text-center border-gray-400 rounded-md">
                        <em>
                            <img src={recipeDetailRed?.image} alt="recipe-detail-image"
                                className='object-cover text-center'
                            /> </em>
                    </div>
                    <div className="md:col-span-2 text-xl">{recipeDetailRed?.label}</div>
                    <div className="md:row-span-2 md:col-span-2 ">
                        <h2>Instructions</h2>
                        {recipeDetailRed?.ingredientLines?.map((item) => (
                            <span className='mb-2 mr-2 block' key={item}>{item} .</span>
                        ))}
                    </div>
                </div>
                <div className="mb-2">
                        <h2>Ingredients</h2>
                        {recipeDetailRed?.ingredients?.map((item) => (
                            <span className='mb-2 mr-2' key={item}>{item?.food} .</span>
                        ))}
                    </div>
                <div className="mb-2">
                    <h2>Health Labels</h2>
                    {recipeDetailRed?.healthLabels?.map((item) => (
                        <span className='mb-2 mr-2' key={item}>{item} .</span>
                    ))}
                </div>
            </div>
        </>
    )
}

export default RecipeDetails