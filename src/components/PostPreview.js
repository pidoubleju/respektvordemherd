import React from 'react';
import { RichText } from 'prismic-reactjs';
import Heading from '../components/atoms/Heading';
import Image from '../components/atoms/Image';
import { useHistory } from 'react-router-dom';

function PostPreview({ data }) {
	let history = useHistory();
	function viewPostDetail() {
		history.push(`/category/${data.tags[0]}/${data.uid}`);
	}

	return (
		<div className='post-preview' onClick={viewPostDetail}>
			<div className='post-img'>
				<Image fullWidth={true} data={data.data['post_hintergrund']} />
			</div>
			<Heading type='3' headingData={data.data['blog_header']} />
			{RichText.render(data.data['abschnitt_1_text'])}
		</div>
	);
}

export default PostPreview;
