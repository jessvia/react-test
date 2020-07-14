
import React from 'react';
import ReactDOM from  'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {

	return (

		<div className="ui container comments">

			<ApprovalCard>
				<div>
				<h3> Warning </h3>
				Are you sure you want to do this?
				</div>
			</ApprovalCard>
			
			<ApprovalCard>
				<CommentDetail
					author= "Valeria" 
					date="Today at 8:00pm" 
					text="Hola" 
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					author= "Sam" 
					date="Today at 6:00pm" 
					text="Holass" 
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					author= "John" 
					date="Today at 10:00pm" 
					text="blabla" 
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	)
};


ReactDOM.render(<App />, document.querySelector('#root'));