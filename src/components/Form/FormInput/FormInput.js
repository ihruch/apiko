import React from 'react'
import PropTypes from 'prop-types'
import  { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import classNames from 'classnames';

import s from './FormInput.module.scss';

const FormInput = ({
        field: {name, label, type}, 
        value, 
        handleChange, 
        errors, 
        touched, 
        dirty}) => {

    const classes = classNames(
        'form-control',
        { isInvalid: errors[name] && touched[name] }
    );

    return (
        <div className={s.formGroup} >
            <label htmlFor={name}>{label}</label>
            <Field
                name={name}
                type={type}
                value={value}
                onChange={handleChange}
                className={ classes }
            />
            <ErrorMessage
                name={name}
                component="span"
                className="invalid-feedback"
            />
    </div>
    );
}

FormInput.propTypes = {}

export default FormInput


