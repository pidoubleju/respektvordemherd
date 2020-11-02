import React, { useEffect, useState } from 'react';
import { client } from '../prismic-configuration';
import '../styles/pages/Landingpage.css';
import HighlightPosts from '../components/HighlightPosts';
import CategoryShowcase from '../components/CategoryShowcase';

const Landingpage = () => {
	const [doc, setDocData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const result = await client.getSingle('landingpage', {
				fetchLinks: [
					'post.galerie',
					'post.blog_header',
					'post.abschnitt_1_text',
				],
			});
			if (result) {
				return setDocData(result);
			}
		};
		fetchData();
	}, []);

	return (
		<div className='landingpage background-dark flex fill-height'>
			{doc && 
				<React.Fragment>
				<HighlightPosts posts={doc.data['highlight-posts']} />
				<div className='container'>
					<h2>{doc.data['intro_text'][0].text}</h2>
					<p className='basic-columns'>{doc.data['intro_text1'][0].text}</p>
				</div>
				<CategoryShowcase
					data={{
						header: doc.data['kategorie_header'],
						kategorien: doc.data['post_kategorien'],
					}}
				/>
				</React.Fragment>
			}
		</div>
	);
};

export default Landingpage;
