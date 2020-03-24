import React from 'react'
import PropTypes from 'prop-types'
import  { Field, ErrorMessage } from 'formik';
import classNames from 'classnames';

import s from './FormInput.module.scss';

const FormInput = ({
        value, 
        handleChange, 
        errors, 
        touched, 
        dirty,
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
                type={rest.type}
                value={value}
                onChange={handleChange}
                className={ classes }
                placeholder={rest.placeholder}
            />
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


