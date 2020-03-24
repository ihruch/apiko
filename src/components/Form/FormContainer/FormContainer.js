import React, { Component } from 'react'
import FormInput from './../FormInput/FormInput';
import FormTextarea from './../FormTextarea/FormTextarea';
import  { Formik, Form, FieldArray } from 'formik';

class FormContainer extends Component {
  constructor(props){
    super(props);

    this.initFields = {}
    props.initValues.fields.forEach( item => this.initFields[item.name] = '' ) 
    this.state = { initValueFields: this.initFields }
  }   
    
  render() {
    console.log('FormContainer PROPS', this.props)
    const { initValues , validationSchema, handleSubmit } = this.props;
    const { initValueFields } = this.state;

    return(
      <Formik
        initialValues = {initValueFields}
        validationSchema = { validationSchema }
        onSubmit={ values => {
          console.log('Formik values ', values);
          handleSubmit(values);
        }}     
      >

      {({ errors, touched, dirty, values, handleChange }) => {
        //console.log( "errors, touched" , values);
        return (
          <Form>
            <FieldArray 
              name="fields"
              render={ (helpers) => (
                <div>
                  {initValues.fields && initValues.fields.length > 0 ? (
                      initValues.fields.map( (field, index) => (
                        (field.tag === 'textarea')? 
                          <FormTextarea
                            key={index} 
                            value={values.name} 
                            handleChange={handleChange}
                            touched={touched}
                            errors={errors} 
                            {...field}                                                
                          />
                          :
                          <FormInput 
                            key={index} 
                            field={field} 
                            value={values.name} 
                            handleChange={handleChange}
                            errors={errors}
                            touched={touched}
                            dirty={dirty}
                            {...field}     
                          />
                      ))
                    ) 
                    : null
                  }
                </div>
              )}
            />
              <div className="form-group">
                <button type="submit" className="btn btn-primary mr-2">Login </button>                
                <button type="reset" className="btn btn-secondary"> Reset </button>
              </div>
          </Form>
        )
      }}
      </Formik>
      );
  }
}

export default FormContainer;


