import axios from 'axios';
import { useEffect, useState } from 'react';

type paramsType = {
  url: string;
  method: string;
  params: {
    query: string;
    page: string;
    num_page: string;
  };
};

const useFetch = ({ url, method = 'GET', params }: paramsType) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const options = {
    method: method,
    url: url,
    params: {
      query: params.query,
      page: params.page,
      num_pages: params.num_page,
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST,
    },
  };

  useEffect(() => {
    setIsLoading(true);

    // async function getData() {
    //   let d, e, i;
    //   try {
    //     d = await axios.get(url, options);
    //   } catch (error) {
    //     e = true;
    //     console.log('error: ', error);
    //   } finally {
    //     i = false;
    //   }
    //   return { d, e, i };
    // }
    // const { d, e, i } = await getData();
    // console.log('nd: ', d);
    // setData(d.data.data);
    // setError(true);
    // setIsLoading(false);

    axios
      .get(url, options)
      .then((data) => setData(data.data.data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
