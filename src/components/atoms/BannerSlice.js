import React from 'react';
import { RichText } from 'prismic-reactjs';
import Heading from './Heading';
import Image from './Image';
import Button from './Button';

function BannerSlice({item, index}) {
    const {
        'button_label': buttonLabel,
        'button_link': buttonLink,
        description,
        'image_banner': imageBanner,
        'title_of_banner': bannerTitle
    } = item.primary
    return (
        <React.Fragment>
            <Image data={imageBanner} fullWidth='true'/>
            <Heading headingData={bannerTitle}/>
            {RichText.render(description)}
            <Button>
                <a href={buttonLink.url}>{buttonLabel[0].text}</a>
            </Button>   
        </React.Fragment>
    )
}

export default BannerSlice;