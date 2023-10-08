// libs
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// constants
import { APP_BASE_URL, APP_BASE_KEY, APP_BASE_ID } from '../shared/Constants'

// routes
import { ROUTE_CONSTANTS } from '../shared/Routes'

// components
import RecipeSearch from '../components/RecipeSearch'
import RecipeList from '../components/RecipeList'

// action
import { setRecipeData, setSelectedRecipe } from '../store/slice/RecipeSlice'

const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [error, setError] = useState("");
    const recipeDataRed = useSelector(state => state.recipe.recipeData) || []

    const onChange = (e) => {
        let { value } = e.target
        setError("")
        setSearch(value)
    }

    const handleSearch = () => {
        console.log(search);
        if (!search) {
            setError("Field is required")
            return;
        }
        search && getRecipedata()
    }

    const getRecipedata = async () => {
        let end_point = `/search`
        let query_params = `?app_id=${APP_BASE_ID}&app_key=${APP_BASE_KEY}&q=${search}`
        let URL = APP_BASE_URL + end_point + query_params
        const { data } = await axios.get(URL)
        console.log(URL);
        dispatch(setRecipeData(data?.hits))
    }

    const handleClick = (data) => {
        dispatch(setSelectedRecipe(data?.recipe))
        navigate(ROUTE_CONSTANTS.RECIPE_DETAILS)
    }
    
    return (
        <>
            <div className='pt-12'>
                <div className='mb-2'>
                    <h1 className='md:text-6xl text-4xl text-center mb-4'>Recipe Finder</h1>
                    <RecipeSearch
                        search={search}
                        error={error}
                        setError={setError}
                        onChange={onChange}
                        handleSearch={handleSearch}
                    />
                </div>
                <div className='mb-2 p-2 w-4/5 mx-auto'>
                    {recipeDataRed?.length ? <RecipeList displayData={recipeDataRed} handleClick={handleClick} /> : (
                        <div className='mt-20 text-center text-2xl text-yellow-900 p-4 rounded-xl'>
                            Search Ingredient to get your desired dish 🎉
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Home