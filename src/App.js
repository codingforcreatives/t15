import React from 'react';
import './App.css';

//Pages
import HomePage from './pages/homepage/homepage.component';
import AboutUsPage from './pages/about-us/about-us.component';
import BrandingPage from './pages/branding-page/branding-page.component';
import BroadcastTVPage from './pages/broadcast-tv-page/broadcast-tv-page.component';
import VideoContentPage from './pages/video-content-page/video-content-page.component';
import WebsitePage from './pages/website-page/website-page.component';
import ContactPage from './pages/contact-page/contact-page.component';
import SplashPage from './pages/splash-page/splash-page.component';

import Navbar from './components/navbar/navbar.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<HomePage />
			<div className="router-container">
				{/* <Navbar /> */}
				<Switch>
					<Route exact path="/" component={HomePage}></Route>
					<Route path="/about-us-page" component={AboutUsPage}></Route>
					<Route path="/branding" component={BrandingPage}></Route>
					<Route path="/broadcast-tv" component={BroadcastTVPage}></Route>
					<Route path="/video-content" component={VideoContentPage}></Route>
					<Route path="/website-page" component={WebsitePage}></Route>
					<Route path="/contact-page" component={ContactPage}></Route>
					<Route path="/splash-page" component={SplashPage}></Route>
				</Switch>
			</div>
		</div>
	);
}

export default App;
