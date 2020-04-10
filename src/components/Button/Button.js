import React from 'react';
import classNames from 'classnames';

import './Button.css';

function Button({children, title, type, onClick, height, width, invers, className}) {

    const classes = classNames(
        'btn',
        className,
        {invers}
    )
    return (
        <button type={type} className={classes} onClick={onClick} style={{width: width, height: height}}   >
            {title? title : children }
        </button>
    )
}

export default Button
