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
import BroadcastTVPage from './pages/broadcast-tv-page/broadcast-tv-page.component';
import VideoContentPage from './pages/video-content-page/video-content-page.component';
import ContactPage from './pages/contact-page/contact-page.component';
import SplashPage from './pages/splash-page/splash-page.component';
import Navbar from './components/navbar/navbar.component';

//Portfolio

//Video Content

import AppsSoftwarePage from './pages/video-content-items/apps-software/apps-software.component';
import SportsFitnessPage from './pages/video-content-items/sports-fitness/sports-fitness.component';
import EducationPage from './pages/video-content-items/education/education-page.component';
import EventsFestivalsPage from './pages/video-content-items/events-festivals/events-festivals.component';
import NarrativePage from './pages/video-content-items/narrative/narrative.component';
import LifestyleFashionPage from './pages/video-content-items/lifestyle-fashion/lifestyle-fashion.component';
import ProductPage from './pages/video-content-items/product/product.component';
import RealEstatePage from './pages/video-content-items/real-estate/real-estate.component';
import TravelTourismPage from './pages/video-content-items/travel-tourism/travel-tourism-page.component';

//Broadcast TV
import DestinationLAPage from './pages/broadcast-tv-items/destination-la/destination-la.component';
import StaycationPage from './pages/broadcast-tv-items/staycation/staycation.component';
import WonderfulPlacesPage from './pages/broadcast-tv-items/wonderful-places/wonderful-places.component';

//Branding
import BrandingPage from './pages/branding-items/branding/branding-page.component';

//Websites & Apps
import WebsiteAppPage from './pages/website-items/websites-app/website-app-page.component';

// 404 Page
import PageNotFound from './pages/page-not-found/page-not-found.component';

// import Navbar from './components/navbar/navbar.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			{/* <HomePage /> */}
			<div className="router-container">
				<Navbar />
				<Switch>
					<Route exact path="/services" component={HomePage}></Route>
					<Route exact path="/about" component={AboutUsPage}></Route>

					<Route exact path="/broadcast-tv" component={BroadcastTVPage}></Route>
					<Route
						exact
						path="/video-content"
						component={VideoContentPage}></Route>

					<Route exact path="/contact" component={ContactPage}></Route>
					<Route exact path="/" component={SplashPage}></Route>
					<Route
						exact
						path="/apps-software"
						component={AppsSoftwarePage}></Route>
					<Route
						exact
						path="/sports-fitness"
						component={SportsFitnessPage}></Route>
					<Route exact path="/education" component={EducationPage}></Route>
					<Route
						exact
						path="/events-festivals"
						component={EventsFestivalsPage}></Route>
					<Route exact path="/narrative" component={NarrativePage}></Route>
					<Route
						exact
						path="/lifestyle-fashion"
						component={LifestyleFashionPage}></Route>
					<Route exact path="/product" component={ProductPage}></Route>
					<Route exact path="/real-estate" component={RealEstatePage}></Route>
					<Route
						exact
						path="/travel-tourism"
						component={TravelTourismPage}></Route>

					<Route
						exact
						path="/destination-la"
						component={DestinationLAPage}></Route>
					<Route exact path="/staycation" component={StaycationPage}></Route>
					<Route
						exact
						path="/wonderful-places"
						component={WonderfulPlacesPage}></Route>
					<Route exact path="/branding" component={BrandingPage}></Route>
					<Route
						exact
						path="/websites-and-apps"
						component={WebsiteAppPage}></Route>
					<Route path="*" component={PageNotFound} />
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
