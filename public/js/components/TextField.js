import React from 'react';
import classNames from 'classnames';


const TextFieldGroup = ({ input, label, error, ...props }) => {

const styles = {
    red: {
      color: 'red'
    },
    green: {
      color: 'green'
    },
    formGroup: {
      marginBottom: '15px'
    },
    inlineLabel: {
      position: 'relative'
    },
    fieldSet: {
      position: 'relative',
      marginBottom: '15px',
      boxSizing: 'border-box',
      minWidth: 0,
      padding: 0,
      margin: 0,
      border: 0
    },
    label: {
      position: 'absolute',
      top: '0px',
      left: '0px',
      fontSize: '12.5px',
      color: '#00A1DF',
      fontWeight: '100',
      padding:'2px 9px',
      letterSpacing: '1px',
      display: 'inline-block',
      maxWidth: '100%',
      marginBottom: '5px'
    },
    formControl: {
      paddingTop: '24px',
      height: 'auto',
      width: '30%',
      padding: '16px 9px 3px',
      fontSize: '18px',
      fontWeight: '100',
      lineHeight: '1.42857143',
      letterSpacing: '1px',
      color: '#555',
      border: '1px solid #ccc',
      backgroundColor: '#fff',
    }
};

let noErrorMessage = classNames({
      'fa': true,
      'fa-check': true
});

let errorMessage = classNames({
      'fa': true,
      'fa-times': true
});
  return (
    <div>
    <div style={styles.fieldSet}>
      <input
        style={styles.formControl}
        type="input"
        {...props}
      />
      <label style={styles.label}>{label}</label> 
      {error ? <span style={styles.red}> <i className={errorMessage}  aria-hidden="true"></i> {error}</span> : (error === undefined) ? <span style={styles.green}> <i className={noErrorMessage} aria-hidden="true"></i>   Valid Entry </span>: "" }
    </div>  

    <br/></div>);
}



TextFieldGroup.propTypes = {
  label: React.PropTypes.string.isRequired,
  
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;