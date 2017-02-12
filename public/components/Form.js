import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from './TextField';
import SelectField from './SelectField';

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    label={label} 
    error={touched && error}
    {...input}
    {...custom}
  />
);

const renderSelectField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <SelectField
    label={label} 
    error={touched && error}
    {...input}
    {...custom}
  />
);

const Form = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
        
          <Field name="fname" component={renderTextField} type="text" label="First Name"/>
   
          <Field name="lname" component={renderTextField} type="text" label="Last Name"/>
        
          <Field name="cname" component={renderTextField} type="text" label="company"/>
        
          <Field name="web" component={renderTextField} type="text" label="web"/>
       
          <Field name="phone" component={renderTextField} type="text" label="Phone"/>
        
          <Field name="speciality" component={renderSelectField} label="Candy Speciality">
            <option value="chocolate">Chocolate</option>
            <option value="lollipop">Lollipops</option>
            <option value="gum">Gum</option>
            <option value="sour">Sour Hard Cndies</option>
          </Field>
       
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(Form)
