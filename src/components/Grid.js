import React from 'react';
import '../styles/components/Grid.css'

function Grid({items}) {
    return (
        <div className={`grid flex ${items.length < 3 ? 'sparse-data-layout' : ''}`}>
            {items.map((item, index) => <div className="grid-item" key={index}>{item}</div>)}
        </div>
    )
}

export default Grid;
