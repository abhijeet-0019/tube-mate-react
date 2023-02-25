const axios = require("axios");

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'db49782ef2mshf714b254781fa17p10d851jsnb9511e48197e',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  try {
    // const response = await axios.request(options);
    // console.log("response.data --> ", response.data);
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    console.log("data --->", data.items);
    return data;

  } catch (error) {
    console.error("response --> error --> ", error);
  }
}; 
