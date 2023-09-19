import axios from 'axios';
const KEY = '38665853-fe99969bd23bb921fc896ab74';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: KEY,
  q: '',
  page: 1,
  image_type: 'photo',
  orientation: 'horisontal',
  per_page: 12,
};

const fetchPhotos = async params => {
  const { data } = await axios({ params: params });

  return data;
};

export default fetchPhotos;
