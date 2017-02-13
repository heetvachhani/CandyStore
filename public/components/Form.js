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

const styles = {
    btn: {
      color: '#fff',
      backgroundColor: '#00A1DF',
      borderRadius: '4px',
      width: '20%',
      display: 'inline-block',
      padding: '6px 12px',
      marginBottom: 0,
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '1.42857143',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      MsTouchAction: 'manipulation',
      touchAction: 'manipulation',
      cursor: 'pointer',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      MsUserSelect: 'none',
      userSelect: 'none',
      backgroundImage: 'none',
      border: '1px solid transparent',
      marginLeft:'6%'
    },
    container: {
      position: 'fixed',
      top: '20%',
      left: '50%',
      marginTop: '-100px',
      marginLeft: '-200px',
      width: '65%',
      padding: '20px'
    }
 };

const Form = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <div style={styles.container}>
      <h3> Welcome to Candy Store! </h3>
      <form onSubmit={handleSubmit}>
          <Field name="fname" component={renderTextField} type="text" label="First Name"/>
   
          <Field name="lname" component={renderTextField} type="text" label="Last Name"/>
        
          <Field name="cname" component={renderTextField} type="text" label="Company Name"/>
        
          <Field name="web" component={renderTextField} type="text" label="Web Address"/>
       
          <Field name="phone" component={renderTextField} type="text" label="Phone Number"/>
        
          <Field name="speciality" component={renderSelectField} label="Candy Speciality">
            <option value="chocolate">Chocolate</option>
            <option value="lollipop">Lollipops</option>
            <option value="gum">Gum</option>
            <option value="sour">Sour Hard Cndies</option>
          </Field>

          <Field name="date" component={renderTextField} type="text" label="Date Added"/>
        

        <button type="submit" style={styles.btn} disabled={pristine || submitting}>Submit</button>
      </form>
    </div>
  )
}

const validate = values => {
  const errors = {}
  if (!values.fname) 
    errors.fname = 'Please enter a first name';
  
  if (!values.lname) 
    errors.lname = 'Please enter a last name';
  
  if (!values.cname) 
    errors.cname = 'Please enter a company name';
  
  if (!values.web) 
    errors.web = 'Please enter a web address';
  
  if (!values.phone) 
    errors.phone = 'Please enter a phone number';
  
  if (!values.date) 
    errors.date = 'Please enter a Date';
  
  if (!/^(?:(ftp|http|https):\/\/)?(?:[\w-]+\.)+[a-z]{3,6}$/.test(values.web)) 
    errors.web = 'Invalid web address'
  
  if(!/^\d{10}$/.test(values.phone))
    errors.phone = 'Invalid phone number';
  
  return errors;
}

export default reduxForm({
  form: 'simple',  // a unique identifier for this form
  validate
})(Form)
