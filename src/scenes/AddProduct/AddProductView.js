import React from 'react'
import PropTypes from 'prop-types'
import s from './AddProduct.module.scss'

import { FormContainer } from './../../components/Form';
import * as yup from 'yup'; 

const initialValues = {
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'TITLE',
      placeholder: 'For example: Iron man suit'
    },
    {
      name: 'location',
      type: 'text',
      label: 'LOCATION',
      placeholder: 'For example: Mexico'
    },
    {
      name: 'description',
      tag: 'textarea',
      maxLength: 100,
      label: 'DESCRIPTION',
      placeholder: 'For example: Description iron man suit'
    },
    { 
      name: 'addImage',
      type: 'text',
      label: 'PHOTOS',
      placeholder: "https://www.ion.co/wp-content/uploads/2016/10/fall-beauty.jpg"
    },
    {
      name: 'price',
      type: 'text',
      label: 'PRICE',
      placeholder: 'How much is it?'
    }
  ]
};

const validationSchema = yup.object().shape({
  title: yup.string()
        .required("Name product is required"),
  location: yup.string()
        .required("Location is required"),
  description: yup.string()
        .max(100),
  price: yup.number()
        .required("Price is required")
        .positive('Price can"t be negative number')
})

const AddProductView = ({ handleAddProduct }) => {
    return (
        <div className="">
          <FormContainer 
            validationSchema = {validationSchema}
            initValues={initialValues} 
            handleSubmit={handleAddProduct}
          />
        </div>
    )
}

AddProductView.propTypes = {}

export default AddProductView

