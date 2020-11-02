import React from 'react';

function Image({ data, fullWidth }) {
	const imageAlt = data.alt ? data.alt : 'missing alt text';
	const { width, height } = data.dimensions;
	return <img src={data.url} alt={imageAlt} width={width} height={height} className={fullWidth ? 'w-100' : ''}/>;
}

export default Image;
