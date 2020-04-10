import React, { Component } from 'react'
import FormInput from './../FormInput/FormInput';
import FormTextarea from './../FormTextarea/FormTextarea';
import Button from './../../Button/Button';
import  { Formik, Form, FieldArray } from 'formik';
import Api from './../../../Api';

class FormContainer extends Component {
  constructor(props){
    super(props);

    this.initFields = {};
    this.isIconFilds = {};

    props.initValues.fields.forEach( item => {
        this.initFields[item.name] = '';  
        
        if(item.icon) {
          this.isIconFilds[item.name] = false;
        }
      }
    ) 

    this.state = { 
      initValueFields: this.initFields,
      iconFilds: this.isIconFilds,
      formData: null
    }
  }   

  getImageData = (event) => {
    let formData = new FormData();
    formData.append('image', event.target.files[0]);
    this.setState({formData: formData}) 
  }
  uploadImg = () => {
    return Api.Upload.uploadImage(this.state.formData) ;     
  }


  handleClickIcon = (event) => {
    let name = event.target.getAttribute('name');

    this.setState( state => {
      return {       
        iconFilds: {
          ...state.iconFilds,
         [name]: !state.iconFilds[name]
        }        
      }
    })
  }
    
  render() {
    const { initValues , validationSchema, handleSubmit, btnTitle, btnType } = this.props;
    const { initValueFields, iconFilds, formData} = this.state;

    return(
      <Formik
        initialValues = {initValueFields}
        validationSchema = { validationSchema }
        onSubmit={ async values => {
         //console.log('Formik values 1', values);
         
         if(formData) {
           let imgUrl = await this.uploadImg();
           let photos = imgUrl.data.split().splice(0,1);
           values = {...values, photos} 
         } 
          handleSubmit(values);
        }}     
      >

      {({ errors, touched, dirty, values, handleChange}) => {
        
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
                            getImageData={this.getImageData}
                            errors={errors}
                            touched={touched}
                            dirty={dirty}
                            isIcon={iconFilds[field.name]}
                            handleClickIcon={this.handleClickIcon}
                            {...field}     
                          />
                      ))
                    ) 
                    : null
                  }
                </div>
              )}
            />
              <Button title={btnTitle} type={btnType} height='58px' width='100%'/>
          </Form>
        )
      }}
      </Formik>
      );
  }
}

export default FormContainer;


