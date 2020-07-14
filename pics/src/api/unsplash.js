import axios from 'axios';


export default axios.create({

	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 78cbd721cffcc5aff66af7fe614f35a0697d21e37759bac62434c71291e7db5b' 
	}
});