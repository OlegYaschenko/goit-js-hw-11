const axios = require('axios');
const API_KEY = '25371259-9d972d577815028f5429dc99a';
const BASE_URL = 'https://pixabay.com/api';

export default class PictureApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    
  }

  async fetchPictures() {
    const url = `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`;
    const response = await axios.get(url);
    return response.data;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  
  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

}
