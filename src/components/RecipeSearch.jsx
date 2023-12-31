import React from 'react'

const SearchComponents = (props) => {
    const {search, onChange, handleSearch} = props
    return (
        <>
            <div>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                <div className="relative md:w-1/2 w-4/5 mx-auto">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input 
                        type="search" id="default-search" 
                        className="block w-full p-4 pl-10 text-sm  border  rounded-lg  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" 
                        placeholder="Search ..."
                        value={search}
                        onChange={onChange} 
                        required 
                    />
                    <button 
                        type="submit" 
                        className="text-white absolute right-2.5 bottom-2.5  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 "
                        onClick={handleSearch}
                    >Search</button>
                </div>
            </div>

        </>
    )
}

export default SearchComponents