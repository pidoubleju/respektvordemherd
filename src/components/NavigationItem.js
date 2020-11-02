import React from 'react';
import { useHistory, Link } from 'react-router-dom';
function NavigationItem({item}) {
    let history = useHistory();
    return (
        <div className="nav-item">
            <Link to={item.destination[0].text}>{item.label[0].text}</Link>
        </div>
    )
}


export default NavigationItem;