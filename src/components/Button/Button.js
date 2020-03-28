import React from 'react'
import s from './Button.module.scss'
function Button({title, type}) {
    return (
        <button type={type} className={s.btn}>
            {title}
        </button>
    )
}

export default Button
