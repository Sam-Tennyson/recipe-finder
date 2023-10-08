// libs
import { Provider } from 'react-redux'
import React from 'react'

// routes
import RootRouter from './routes/RootRouter'

// store
import store from './store/store'

// styles
import "./App.css"

function App() {
	return (
		<>
			<Provider store={store}>
				<RootRouter />
			</Provider>
		</>
	)
}

export default App
