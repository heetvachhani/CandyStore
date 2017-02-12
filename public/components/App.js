import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
const styles = {
  floatingLabelStyle: {
    color: '#00A1DF'
  }
};


export default class App extends Component {

  render() {
  	return (
		<div>
			<form>
			<TextField
		      floatingLabelText="First Name"
		      floatingLabelFixed={true}
		      floatingLabelStyle={styles.floatingLabelStyle}
		    /><br />
		    <TextField
		      floatingLabelText="Last Name"
		      floatingLabelFixed={true}
		      floatingLabelStyle={styles.floatingLabelStyle}
		    /><br />
		    <TextField
		      floatingLabelText="Company"
		      floatingLabelFixed={true}
		      floatingLabelStyle={styles.floatingLabelStyle}
			/><br />
		    <TextField
		      floatingLabelText="Web Address"
		      floatingLabelFixed={true}
		      floatingLabelStyle={styles.floatingLabelStyle}
		    /><br />
		    <TextField
		      floatingLabelText="Phone Number"
		      floatingLabelFixed={true}
		      floatingLabelStyle={styles.floatingLabelStyle}
		    /><br />
		    <SelectField
		          floatingLabelText="Candy Specialty"
		          floatingLabelStyle={styles.floatingLabelStyle}
		          value={1}
		          onChange={this.handleChange}
		        >
		          <MenuItem value={1} primaryText="Chocolate" />
		          <MenuItem value={2} primaryText="Lollipops" />
		          <MenuItem value={3} primaryText="Gum" />
		          <MenuItem value={4} primaryText="Sour hard candies" />
		    </SelectField><br />
		  	<RaisedButton label="Submit" primary={true} />
		  	</form>
		</div>
  	);
  }
}

