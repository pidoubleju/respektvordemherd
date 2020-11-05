import React from 'react';
import '../../styles/components/Button.css'

function Button({onClick, children, label}) {
    return (
        <button className="btn btn-default" onClick={onClick ? onClick : () => {}}>
            { children ? children : label }
        </button>
    )
};

export default Button;