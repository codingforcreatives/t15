import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import {
	setIndexClicked,
	setPanelClicked,
} from './redux/extendable-video/extendable-video.actions';

//Pages
import HomePage from './pages/homepage/homepage.component';
import AboutUsPage from './pages/about-us/about-us.component';
import BrandingPage from './pages/branding-page/branding-page.component';
import BroadcastTVPage from './pages/broadcast-tv-page/broadcast-tv-page.component';
import VideoContentPage from './pages/video-content-page/video-content-page.component';
import WebsitePage from './pages/website-page/website-page.component';
import ContactPage from './pages/contact-page/contact-page.component';
import SplashPage from './pages/splash-page/splash-page.component';
import NipoonPortfolioPage from './pages/nipoon-portfolio-page/nipoon-portfolio-page.component';

//Portfolio

//Video Content
import TravelTourismPage from './pages/video-content-items/travel-tourism/travel-tourism-page.component';

import Navbar from './components/navbar/navbar.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			{/* <HomePage /> */}
			<div className="router-container">
				<Navbar />
				<Switch>
					<Route exact path="/nipoon-portfolio" component={NipoonPortfolioPage}></Route>
					<Route exact path="/services" component={HomePage}></Route>
					<Route exact path="/about" component={AboutUsPage}></Route>
					<Route exact path="/branding" component={BrandingPage}></Route>
					<Route exact path="/broadcast-tv" component={BroadcastTVPage}></Route>
					<Route
						exact
						path="/video-content"
						component={VideoContentPage}></Route>
					<Route exact path="/website-page" component={WebsitePage}></Route>
					<Route exact path="/contact-page" component={ContactPage}></Route>
					<Route exact path="/" component={SplashPage}></Route>
					<Route
						exact
						path="/travel-tourism"
						component={TravelTourismPage}></Route>
				</Switch>
			</div>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => ({
	setIndexClicked: (index) => dispatch(setIndexClicked(index)),
	setPanelClicked: (clicked) => dispatch(setPanelClicked(clicked)),
});

export default connect(null, mapDispatchToProps)(App);
