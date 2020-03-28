import React from 'react'
import classNames from 'classnames';
import  { Field, ErrorMessage } from 'formik';

import s from './FormInput.module.scss';

const FormInput = ({
        value, 
        handleChange, 
        errors, 
        touched, 
        dirty,
        isIcon,
        handleClickIcon,
        ...rest }) => {

    const classes = classNames(
        'form-control',
        { isInvalid: errors[rest.name] && touched[rest.name] }
    );
    
    
    return (
        <div className={s.formGroup} >
            <label htmlFor={rest.name}>{rest.label}</label>
            <Field
                name={rest.name}
                type={!isIcon? rest.type : "text"}
                value={value}
                onChange={handleChange}
                className={ classes }
                placeholder={rest.placeholder}
                
            />
            
            { rest.icon && 
                <i  
                    className={!isIcon? "far fa-eye" : "far fa-eye-slash"}
                    name={rest.name}
                    onClick={(e) => handleClickIcon(e)}                    
                ></i>
            }

            <ErrorMessage
                name={rest.name}
                component="span"
                className="invalid-feedback"
            />
        </div>
    );
}

FormInput.propTypes = {}

export default FormInput


{/* <i class="far fa-eye-slash"></i> */}