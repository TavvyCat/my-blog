import axios from 'axios';

const instance = axios.create( {
  baseURL: 'https://adventure-blog-286e8.firebaseio.com'
} );

export default instance;