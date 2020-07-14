import axios from 'axios';

const KEY = 'AIzaSyDFiy8oNfqIXLqygOqXQ4FzqAVC_B88uRU';


export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults:5,
		key: KEY
	}
});
