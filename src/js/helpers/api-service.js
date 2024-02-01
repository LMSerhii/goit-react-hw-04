import axios from 'axios';

export const getDataGallery = async (query, page) => {
  axios.defaults.baseURL = 'https://api.unsplash.com/';
  const response = await axios({
    url: `/search/photos`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept-Version': 'v1',
      Authorization: 'Client-ID krnQT9Im9-8LXAJdpG3qnAeokevo161f3utAbWdENUA',
    },
    params: {
      page,
      query,
      per_page: 20,
    },
  });

  return response.data;
};
