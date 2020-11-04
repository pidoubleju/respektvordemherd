import React from 'react';
import { Link } from 'react-router-dom';
function NavigationItem({item}) {
    return (
        <div className="nav-item">
            <Link to={item.destination[0].text}>{item.label[0].text}</Link>
        </div>
    )
}


export default NavigationItem;