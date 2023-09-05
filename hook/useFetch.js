import {useState , useEffect} from 'react';
import axios from 'axios';
// import {RAPID_API_KEY} from '@env';

// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint,query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    
    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {
          query: 'Python developer in Texas, USA',
          page: '1',
          num_pages: '1'
        },
        headers: {
          'X-RapidAPI-Key': '94c376bb06msh0ebe9da93af7056p199cc1jsn357ff5e8a4fc',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

     

    // const options = {
    //     method: 'GET',
    //     url: 'https://jsearch.p.rapidapi.com/search',
    //     params: { ...query },
    //     headers: {
    //       'X-RapidAPI-Key': '94c376bb06msh0ebe9da93af7056p199cc1jsn357ff5e8a4fc',
    //       'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    //     }
    //   };

    const fetchData = async () => {
       
        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
       
        // setIsLoading(true);
        // try {
        //     const response = await axios.request(options);
        //     setData(response.data.data);
        //     setIsLoading(false);   
        // } catch (error) {
        //     setError(error);
        //     alert('There is an error'+options.json)
        //     console.log(options);
        // }
        // finally{
        //     setIsLoading(false);
        // }
    }
    // useEffect(() => {
    //     fetchData();
    // }, []);  

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return {data, isLoading,error,refetch};
}

export default useFetch;