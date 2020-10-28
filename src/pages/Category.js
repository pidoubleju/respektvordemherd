import React, { useState, useEffect } from 'react';
import { client } from '../prismic-configuration';
import NotFound from './NotFound';
import Prismic from 'prismic-javascript';

function Category({
	match: {
		params: { name },
	},
}) {
	const [doc, setDocData] = useState([]);
	const [notFound, toggleNotFound] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const result = await client.query(
				Prismic.Predicates.at('document.tags', [name]) 
			);
			if (result.results.length > 0) {
				setDocData(result.results);
			} else {
				toggleNotFound(true);
			}
		};
		fetchData();
	}, [name]);
	if (doc.length > 0) {
		return <div className="landingpage flex"></div>;
	} else if (notFound) {
		return <NotFound />;
	}
	return null;
}

export default Category;
