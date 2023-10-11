// libs
import React from 'react'

// routes
import RootRouter from './routes/RootRouter'

// context
import { RecipeProvider } from './contexts/RecipeContext'
import { SearchProvider } from './contexts/SearchContext'

// styles
import "./App.css"

function App() {
	return (
		<>
			<SearchProvider>
				<RecipeProvider>
					<RootRouter />
				</RecipeProvider>
			</SearchProvider>
		</>
	)
}

export default App
