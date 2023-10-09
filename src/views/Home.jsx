// libs
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// constants
import { APP_BASE_URL, APP_BASE_KEY } from '../shared/Constants'

// components
import RecipeSearch from '../components/RecipeSearch'
import RecipeList from '../components/RecipeList'

// action
import RecipeContext from '../contexts/RecipeContext'

const Home = () => {

    const { state: { selectedRecipe: recipeDataRed }, dispatch } = useContext(RecipeContext);
    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [error, setError] = useState("");
    const [isApiHit, setIsApiHit] = useState(false);

    const onChange = (e) => {
        let { value } = e.target
        setError("")
        setSearch(value)
    }

    const handleSearch = () => {
        console.log(search);
        if (!search.trim()) {
            setError("Field is required")
            return;
        }
        search && getRecipedata()
    }

    const storeInContext = (recipe) => {
        dispatch({ type: "SET_SELECTED_RECIPE", payload: recipe });
    };

    const getRecipedata = async () => {
        let end_point = `/recipes/findByIngredients`
        let query_params = `?apiKey=${APP_BASE_KEY}&ingredients=${search}&number=20`
        let URL = APP_BASE_URL + end_point + query_params
        const { data } = await axios.get(URL)
        if (data?.length) {
            setIsApiHit(false)
            storeInContext(data)
        } else {
            storeInContext([])
            setIsApiHit(true)
        }
    }

    const handleClick = (data) => navigate(`/recipe-details?action_id=${data?.id}`)

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