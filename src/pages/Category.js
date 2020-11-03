import React, { useState, useEffect } from 'react';
import { client } from '../prismic-configuration';
import Prismic from 'prismic-javascript';
import PostList from '../components/PostList';
import Heading from '../components/atoms/Heading';
import useCapitalization from '../hooks/useCapitalization';

function Category({
	match: {
		params: { name },
	},
}) {
	const [doc, setDocData] = useState([]);
	const categoryHeader = useCapitalization(name);

	useEffect(() => {
		const fetchData = async () => {
			const result = await client.query(
				Prismic.Predicates.at('document.tags', [name])
			);
			if (result.results.length > 0) {
				setDocData(result.results);
			}
		};
		fetchData();
	}, [name]);

	return (
		<div className='category background-dark fill-height'>
			<div className='container'>
				<Heading type="1" headingData={{ text: categoryHeader }} />
				<PostList posts={doc} />
			</div>
		</div>
	);
}

export default Category;
