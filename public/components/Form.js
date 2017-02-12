import React from 'react'
import { Field, reduxForm } from 'redux-form'

const Form = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field name="fname" component="input" type="text" placeholder="First Name"/>
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field name="lname" component="input" type="text" placeholder="Last Name"/>
        </div>
      </div>
      <div>
        <label>Company</label>
        <div>
          <Field name="cname" component="input" type="text" placeholder="company"/>
        </div>
      </div>
      <div>
        <label>Web Address</label>
        <div>
          <Field name="web" component="input" type="text" placeholder="web"/>
        </div>
      </div>
      <div>
        <label>Phone</label>
        <div>
          <Field name="phone" component="input" type="text" placeholder="Phone"/>
        </div>
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
