import axios from 'axios';


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'x-rapidapi-key': '20268abbb4msh561b7a19181bfc4p1da2a7jsn75c3b6531074',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
};

const fetchFromAPI  = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)

    return data;
}


export default  fetchFromAPI