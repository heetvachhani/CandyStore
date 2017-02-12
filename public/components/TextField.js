import React from 'react';

const TextFieldGroup = ({ label, error, ...props }) => {

const styles = {
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
      top: 0,
      fontSize: '12px',
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
      display: 'block',
      width: '30%',
      padding: '16px 9px 3px',
      fontSize: '20px',
      lineHeight: '1.42857143',
      letterSpacing: '1px',
      color: '#555',
      border: '1px solid #ccc',
      backgroundColor: '#fff',
    }
};

  return (
    <div style={styles.fieldSet}>
      <input
        style={styles.formControl}
        type="input"
        {...props}
      />
      <label style={styles.label}>{label}</label> <br />
      
    {props.touched && props.error && <span className="error">{props.error}</span>}
    </div>  );
}



TextFieldGroup.propTypes = {
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.bool,
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;