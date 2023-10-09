// libs
import React from 'react'

// routes
import RootRouter from './routes/RootRouter'

// context

// styles
import "./App.css"
import { RecipeProvider } from './contexts/RecipeContext'
import { SearchProvider } from './contexts/SearchContext'

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
