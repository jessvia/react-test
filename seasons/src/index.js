import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './spinner';


class App extends React.Component {
	//don't need constructor just for the state object, you can use the next code
	// replacing the constructor of the react component default
	//constructor(props) {
		// reference to the parents of the constructor
		//super(props);

		//to this.state object 
		// this is the only time we do direct assgiments
		//this.state = { lat: null, errorMessage: '' };
		
	//}
	// if only need the constructor just for name the state object
	state = { lat:null, errorMessage: ''};

	componentDidMount() {
		//content visible on screen
		// initial data loading one time
	// 	console.log('My component was rendered to the screen')

	// initial data loading
		window.navigator.geolocation.getCurrentPosition (
			position =>
				// we called setstate
				this.setState({ lat:position.coords.latitude }),

			err => this.setState({ errorMessage: err.message })
		);
	}

	// componentDidUpdate() {
		// sit and wait for updates
	// 	console.log('My component was just updated it rerendered')
		// multiple data loading every update

	// }


	//componentWillUnmount() {
		// good place to clean up 
		//google maps 
		//non react stuff
	// }

	renderContent() {
		if (this.state.errorMessage && !this.state.lat ) {
			return <div> Error: {this.state.errorMessage} </div>;
		}

		if (!this.state.errorMessage && this.state.lat ) {
			return <SeasonDisplay  lat={this.state.lat} />
		}

		return <Spinner message="Hola"/>;

	}
	
	//react says we have to define render
	render() {

		return (
		 	<div className="border red">
		  		{this.renderContent()}
		  	</div> 
		);
	
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
