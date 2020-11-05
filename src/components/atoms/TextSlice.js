import React from 'react';
import { RichText } from 'prismic-reactjs';
import Heading from './Heading';

function TextSlice({item, index}) {
    return (
        <React.Fragment key={index}>
            <Heading headingData={item.primary['text_heading']} />
            {RichText.render(item.primary.text)}
            {item.items.map((text, i) => {
                return <div className="rich-text" key={i}>
                    {RichText.render(text['body_text'])}
                </div> 
            })}
        </React.Fragment>
    )
}

export default TextSlice;