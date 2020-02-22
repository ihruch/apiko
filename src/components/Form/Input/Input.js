import React from 'react';
import s from './Input.module.scss';

const Input = ({textLabel, name, onChange, ...props}) => {
    return (
        <div className={s.formGroup}>
            <label  htmlFor={name}> {textLabel}     </label >
            <input
                id={name}              
                name={name}  
                onChange={(e) => onChange(name, e.target.value)}
                {...props} 
            />   
        </div>  
    )
}

export default Input;
