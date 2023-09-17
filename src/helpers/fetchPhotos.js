import axios from 'axios';
const KEY = '38665853-fe99969bd23bb921fc896ab74';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: KEY,
  q: 'cat',
  page: 1,
  image_type: 'photo',
  orientation: 'horisontal',
  per_page: 20,
};

async function fetchPhotos(params) {
  try {
    const response = await axios({ params: params });
    return response;
  } catch (error) {
    throw new Error('Error fetching images:', error);
  }
}

export default fetchPhotos;
