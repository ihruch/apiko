import React from 'react';
import PropTypes from 'prop-types';
import  { Field, ErrorMessage } from 'formik';
import classNames from 'classnames';

import s from './FormTextarea.module.scss';

const FormTextarea = ({
        value, 
        handleChange,
        touched, 
        errors, 
        ...rest
        }) => {

    const classes = classNames(
        'form-control',
        { isInvalid: errors[rest.name] && touched[rest.name] }
    ); 
    
    return (
        <div className={s.formGroup} >
            <label htmlFor={rest.name}>{rest.label}</label>
            <Field 
                rows="4"
                maxLength={rest.maxLength}
                name={rest.name} 
                as={rest.tag} 
                placeholder={rest.placeholder}
                value={value}
                onChange={handleChange}
                className={ classes }
                
            />
            <ErrorMessage
                name={rest.name}
                component="span"
                className="invalid-feedback"
            />
    </div>
    );
}

FormTextarea.propTypes = {}

export default FormTextarea;

