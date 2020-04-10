import React from 'react'
import s from './Button.module.scss';

function Button({children, title, type, onClick, height, width}) {
    return (
        <button type={type} className={s.btn} onClick={onClick} style={ {width: width, height: height}}   >
            {title? title : children }
        </button>
    )
}

export default Button
