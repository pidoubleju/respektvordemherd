import React from 'react';
import { RichText } from 'prismic-reactjs';
import Heading from '../components/atoms/Heading';
import TextSlice from '../components/atoms/TextSlice';
import BannerSlice from '../components/atoms/BannerSlice';

function Slice({ items }) {
	function renderSliceType(item, index) {
		switch (item['slice_type']) {
			case 'text':
                return <TextSlice item={item} index={index} key={index} />;
            case 'banner_with_caption':
                return <BannerSlice item={item} key={index}/>
            default:
                return null;
		}
	}
	return (
		<div className='slice'>
			{items.map((item, index) => renderSliceType(item, index))}
		</div>
	);
}

export default Slice;
