import React, { useState, useEffect } from 'react';
import { client } from '../prismic-configuration';
import Heading from '../components/atoms/Heading';
import { useParams } from 'react-router-dom';
import Image from '../components/atoms/Image';
import '../styles/components/PostDetail.css'
import { RichText } from 'prismic-reactjs';
import Slice from '../components/Slice'

function PostDetail() {
	const [doc, setDocData] = useState(null);
	const [notFound, setNotFound] = useState(null);
	let { uid } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const result = await client.getByUID('post', uid);
			if (result && result.data) {
				setDocData(result.data);
			} else {
				setNotFound(true);
			}
		};
		fetchData();
	}, [uid]);

	return (
		<div className='post-detail fill-height background-dark'>
			{doc && (
			<React.Fragment>
				<div className="relative">
					<Image data={doc['post_hintergrund']} fullWidth='true' />
					<div className='head-section'>
						<Heading headingData={doc['blog_header']} />
					</div>
				</div>
				<div className='container'>
					<Heading headingData={doc['abschnitt_1_header']}/>
					{RichText.render(doc['abschnitt_1_text'])}
					<Slice items={doc.body} />
				</div>
			</React.Fragment>
			)}
			{notFound && (
				<Heading
					type='1'
					headingData={{ text: 'Dieser Artikel existiert nicht' }}
				/>
			)}
		</div>
	);
}

export default PostDetail;
