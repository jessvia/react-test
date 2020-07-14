import React from 'react';

const Spinner = (props) => {
	return (
		<div className="ui active dimmer">
		    <div className="ui big text loader">{props.message}
		    </div>
		</div>
	);
};


//default message if doesn't have a message on index.js
Spinner.defaultProps = {
	message: 'Loading...'
};

export default Spinner;