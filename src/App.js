import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import {
	BrowserRouter,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import { apiEndpoint } from './prismic-configuration';
import { Preview, NotFound, Landingpage, Category } from './pages';
import './styles/variables.css';
import './styles/base.css';
import Navigation from './components/Navigation';

const App = () => {
	const repoNameArray = /([^/]+)\.cdn.prismic\.io\/api/.exec(apiEndpoint);
	const repoName = repoNameArray[1];

	return (
		<Fragment>
			<Helmet>
				<script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`} />
			</Helmet>
			<BrowserRouter>
				<Navigation />
				<Switch>
					<Redirect exact from='/' to='/home' />
					<Route exact path='/preview' component={Preview} />
					<Route exact path='/home' component={Landingpage} />
					<Route exact path='/category/:name' component={Category} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		</Fragment>
	);
};

export default App;
