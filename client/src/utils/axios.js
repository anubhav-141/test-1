import axios from 'axios';
//Added commit
const customFetch = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export default customFetch;
