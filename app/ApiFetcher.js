import React from 'react'
import axios from 'axios';
import getData from './helper/fetchData';

const ApiFetcher = () => {

    const [data, setData] = React.useState([]);

    React.useEffect(async () => {


        axios.get('https://jsonplaceholder.typicode.com/users').then(users => {
       
            setData(users.data)
        });
        await getData();
    }, []);

    // React.useEffect(() => {
    //     console.log(data);
    // }, [data]);

    if(data.length === 0) {
        return <div id='loading'>Loading...</div>
    }


  return (
    <div>
        <h1>ApiFetcher</h1>
        <h2>Name: <span id='name'>{data[0].name}</span></h2>
        <h2>username: <span id='username'>{data[0].username}</span></h2>
    </div>
  )
}

export default ApiFetcher