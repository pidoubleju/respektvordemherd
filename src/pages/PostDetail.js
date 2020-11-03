import React, { useState, useEffect } from 'react';
import { client } from '../prismic-configuration';
import Prismic from 'prismic-javascript';
import Heading from '../components/atoms/Heading';
import useCapitalization from '../hooks/useCapitalization';

function PostDetail({}) {
    const [doc, setDocData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
            const result = await client.getByUID('post', 'messer-und-so');
			if (result) {
				setDocData(result);
			}
		};
		fetchData();
	}, []);

	return (
		<div className='post-detail background-dark fill-height'>
			<div className='container'>
				{doc && (
					<React.Fragment>
						<Heading headingData={doc.data['blog_header']} />
					</React.Fragment>
				)}
			</div>
		</div>
	);
}

export default PostDetail;
