import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { apiEndpoint } from './prismic-configuration';
import { Preview, NotFound, Landingpage, Category, SearchResults } from './pages';
import './styles/variables.css';
import './styles/base.css';
import Navigation from './components/Navigation';
import PostDetail from './pages/PostDetail';
import Search from './components/Search';

const App = () => {
	const repoNameArray = /([^/]+)\.cdn.prismic\.io\/api/.exec(apiEndpoint);
	const repoName = repoNameArray[1];

	return (
		<Fragment>
			<Helmet>
				<script
					async
					defer
					src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`}
				/>
			</Helmet>
			<HashRouter>
				<Navigation />
				<Switch>
					<Redirect exact from='/' to='/home' />
					<Route exact path='/preview' component={Preview} />
					<Route exact path='/home' component={Landingpage} />
					<Route exact path='/category/:name' component={Category} />
					<Route exact path='/category/:name/:uid' component={PostDetail} />
					<Route exact path='/search' component={SearchResults} />
					<Route component={NotFound} />
				</Switch>
			</HashRouter>
		</Fragment>
	);
};

export default App;
