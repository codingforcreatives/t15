import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Navbar from './components/navbar/navbar.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<div className="router-container">
				<Router>
					<Navbar />
					<Switch>
						<Route path="./"></Route>
					</Switch>
				</Router>
			</div>
			<HomePage />
		</div>
	);
}

export default App;
