import React from 'react';

function Heading({ headingData, type }) {
    const headingType = type ? type : headingData.type.split('heading')[1];
    return React.createElement(`h${headingType}`, null, headingData.text);
}

export default Heading;
