import React from 'react'
import PropTypes from 'prop-types'
import s from './AddProduct.module.scss'

import { FormContainer } from './../../components/Form';

const initialValue = {
  fields: [
    {
      name: 'email',
      type: 'email',
      label: 'EMAIL'
    },{ 
      name: 'password',
      type: 'password',
      label: 'PASSWORD'
    }
  ]
}
const AddProductView = () => {


    
    return (
        <div >
          AddProductView
        </div>
    )
}

AddProductView.propTypes = {}

export default AddProductView

