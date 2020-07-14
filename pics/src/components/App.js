import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component  {
	state = { images:[] };

	onSearchSubmit = async (term) => {
		console.log(term);
		const response = await unsplash.get('https://api.unsplash.com/search/photos', {
				params: {
					query: term
				},

				headers: {
					Authorization: 'Client-ID 78cbd721cffcc5aff66af7fe614f35a0697d21e37759bac62434c71291e7db5b' 
				}
			}
		);

		console.log(response.data.results);

		this.setState({ images: response.data.results});
	}

	render () {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}> 
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
				Found: { this.state.images.length} images 
			</div> 
		);
	}
}

export default App; 