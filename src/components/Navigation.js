import React, { useState, useEffect } from 'react';
import { client } from '../prismic-configuration';
import NotFound from '../pages/NotFound';
import NavigationItem from '../components/NavigationItem';
import '../styles/components/Navigation.css'
import { motion, AnimatePresence } from 'framer-motion';

function Navigation() {
	const [navItems, setNavItems] = useState([]);
	const [notFound, toggleNotFound] = useState(false);
	const [mobileNavActive, toggleMobileNav] = useState(false);
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

	const wideScreenNav = (
		<div className='navigation flex container widescreen'>
			<div className="nav-items flex">
				{navItems.map((item, index) => (
					<NavigationItem item={item} key={index}/>
				))}
			</div>
			<svg onClick={() => toggleMobileNav(true)} width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
				<path fill="#fff" fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
			</svg>
		</div>
	)

	const mobileNav = (
		<motion.div key="mobile-nav" initial={{x: '100%'}} exit={{x: '100%'}}  animate={{ x: '0%' }} transition={{ duration: 0.2 }} className='navigation flex container mobile'>
			<svg onClick={() => toggleMobileNav(false)} width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
				<path fill="#fff" fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
			</svg>
			<div className="nav-items">
				{navItems.map((item, index) => (
					<NavigationItem item={item} key={index}/>
				))}
			</div>
		</motion.div>
	)

	if (navItems) {
		return (
			<AnimatePresence>
				{mobileNavActive ? mobileNav : wideScreenNav}
			</AnimatePresence>
		);
	} else if (notFound) {
		return <NotFound />;
	}
	return null;
}

export default Navigation;
