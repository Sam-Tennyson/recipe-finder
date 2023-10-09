// libs
import React from 'react'

// routes
import RootRouter from './routes/RootRouter'

// context

// styles
import "./App.css"
import { RecipeProvider } from './contexts/RecipeContext'

function App() {
	return (
		<>
			<RecipeProvider>
				<RootRouter />
			</RecipeProvider>
		</>
	)
}

export default App
