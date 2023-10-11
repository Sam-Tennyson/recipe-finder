// libs
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// constants
import { APP_BASE_URL, APP_BASE_KEY } from '../shared/Constants'

// components
import RecipeSearch from '../components/RecipeSearch'
import RecipeList from '../components/RecipeList'

// context
import RecipeContext from '../contexts/RecipeContext'
import SearchContext from '../contexts/SearchContext'

// action
import { setRecipesData, setSearchData, setSearchErrorMessageData } from '../actions'

const Home = () => {

    const { state: { recipeData: recipeDataRed }, dispatch: dispatchRecipe } = useContext(RecipeContext);
    const { state: {search}, dispatch: dispatchSearch } = useContext(SearchContext);

    const navigate = useNavigate();
    const [isApiHit, setIsApiHit] = useState(false);

    const onChange = (e) => {
        let { value } = e.target
        dispatchSearch(setSearchErrorMessageData(""))
        dispatchSearch(setSearchData(value))
    }
    
    const handleSearch = () => {
        if (!search.trim()) {
            dispatchSearch(setSearchErrorMessageData("Field is required"))
            return;
        }
        search && getRecipedata()
    }
 
    const getURL = () => {
        let end_point = `/recipes/findByIngredients`
        let query_params = `?apiKey=${APP_BASE_KEY}&ingredients=${search}&number=20`
        let URL = APP_BASE_URL + end_point + query_params
        return  URL
    }

    const getRecipedata = async () => {
        try {
            let URL = getURL()
            const { data } = await axios.get(URL)
            if (data?.length) {
                setIsApiHit(false)
                dispatchRecipe(setRecipesData(data))
            } else {
                dispatchRecipe(setRecipesData(data))
                setIsApiHit(true)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleClick = (data) => navigate(`/recipe/${data?.id}`)

    useEffect(() => {
        search && getRecipedata()
    }, [])

    return (
        <>
            <div className='pt-12'>
                <div className='mb-2'>
                    <h1 className='md:text-6xl text-4xl text-center mb-4'>Recipe Finder</h1>
                    <RecipeSearch
                        onChange={onChange}
                        handleSearch={handleSearch}
                    />
                </div>
                <div className='mb-2 p-2 w-4/5 mx-auto'>
                    {recipeDataRed?.length ? <RecipeList displayData={recipeDataRed} handleClick={handleClick} /> : (
                        <div className='mt-20 text-center text-2xl text-yellow-900 p-4 rounded-xl'>
                            {isApiHit ? (
                                <div className='text-red-800 font-medium text-center'>
                                    No data is avaliable  <br />You can add another ingredient !
                                </div>
                            ) : (
                                <div className=''>
                                    Search Ingredient to get your desired dish 🎉
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Home