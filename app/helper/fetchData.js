import axios from 'axios';
import 'regenerator-runtime/runtime';

async function getData(){
    let data = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log('data fetch was success', data)
    return data;
}

export default getData;