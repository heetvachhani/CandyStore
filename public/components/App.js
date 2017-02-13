import React, {Component} from 'react';
import Form from './Form';
import * as AppActions from '../action/actions';
import { connect } from 'react-redux';
import $ from 'jquery';

const mapStateToProps = state => ({
	appDialogIsOpen: state.isDialogOpen
});

const mapDispatchToProps = dispatch => ({
  	actions: AppActions
});



class App extends Component {
  	
  	_handleSubmit = () => {
		console.log("before" + this.props.appDialogIsOpen);
		this.props.actions.toggleDialog();
		console.log("aftre" + this.props.appDialogIsOpen);
	}

	 _showResults = values =>
	  new Promise(resolve => {
	    setTimeout(() => {  // simulate server latency
	     		$.ajax({
	          		url: "/candy",
	         		type: 'POST',
			        data: values,
			        beforeSend: function() {
			        	
			        },
			        success: function(data) {
				        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
			        },
			        error: function(xhr, status, error) {
					    window.alert(xhr.responseText + "  eerr: " + error);
					}
	          	});
	      resolve()
	    }, 500)
  });


  render() {
  	 const styles = {
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
  	return (
		<div style={styles.container}>
     		<h3> Welcome to Candy Store! </h3>
     		<Form onSubmit={this._showResults} />
    	</div>
  	);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

