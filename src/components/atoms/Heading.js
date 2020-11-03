import React from 'react';

function Heading({ headingData, type }) {
	const headingType = type ? type : headingData[0].type.split('heading')[1];
	const headingContent = Array.isArray(headingData)
		? headingData[0].text
		: headingData.text;
	return React.createElement(`h${headingType}`, null, headingContent);
}

export default Heading;
