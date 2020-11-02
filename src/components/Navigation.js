import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { client } from '../prismic-configuration';
import NotFound from '../pages/NotFound';
import NavigationItem from '../components/NavigationItem';
import '../styles/components/Navigation.css'

function Navigation() {
	const [navItems, setNavItems] = useState([]);
	const [notFound, toggleNotFound] = useState(false);
	useEffect(() => {
		const fetchData = async () => {
            const result = await client.getSingle('navigation');
			if (result && result.data && result.data['nav-link']) {
				return setNavItems(result.data['nav-link']);
			} else {
				toggleNotFound(true);
			}
		};
		fetchData();
	}, []);

	if (navItems) {
		return (
			<div className='navigation flex'>
				{navItems.map((item, index) => (
					<NavigationItem item={item} key={index}/>
				))}
			</div>
		);
	} else if (notFound) {
		return <NotFound />;
	}
	return null;
}

export default Navigation;
