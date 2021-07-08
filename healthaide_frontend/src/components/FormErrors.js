import React from 'react'
import PropTypes from 'prop-types'

const FormErrors = (props) =>
  <div>
    {Object.keys(props.formErrors).map((formErrorField) => {
      
      console.log(props.formErrors)
      return (
        props.formErrors[formErrorField].map((error) => {
          return (
            <p>{formErrorField} {error}</p>
          )
        })
      )
    })}
  </div>

  FormErrors.propTypes = {
    formErrors: PropTypes.object 
  }

export default FormErrors
