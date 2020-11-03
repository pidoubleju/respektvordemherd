import React from 'react';
import {RichText} from 'prismic-reactjs';
import Heading from '../components/atoms/Heading'
import Image from '../components/atoms/Image'

function PostPreview({ data }) {
	return (
		<div className='post-preview'>
			<div className="post-img">
				<Image fullWidth={true} data={data.data['post_hintergrund']}/>
			</div>
			<Heading type="3" headingData={data.data['blog_header']} />
			{RichText.render(data.data['abschnitt_1_text'])}
		</div>
	);
}

export default PostPreview;
