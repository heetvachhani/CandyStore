import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from './TextField';

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
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
      <div>
        
          <Field name="fname" component={renderTextField} type="text" label="First Name"/>
        
      </div>
      <div>
          <Field name="lname" component={renderTextField} type="text" label="Last Name"/>
        
      </div>
      <div>
          <Field name="cname" component={renderTextField} type="text" label="company"/>
        
      </div>
      <div>
          <Field name="web" component={renderTextField} type="text" label="web"/>
       
      </div>
      <div>
          <Field name="phone" component={renderTextField} type="text" label="Phone"/>
        
      </div>
      <div>
        <label>Candy Speciality </label>
        <div>
          <Field name="speciality" component="select">
            <option value="chocolate">chocolate</option>
            <option value="lollipop">Lollipops</option>
            <option value="gum">Gum</option>
            <option value="sour">Sour hard candies</option>
          </Field>
        </div>
      </div>
     
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(Form)
