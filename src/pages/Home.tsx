import { useEffect, useState } from 'react';
import JobList from '../component/JobList/JobList';
import useFetch from '../hooks/useFetch';

const Home = () => {
  // const [data, setData] = useState();

  const useFetchParams = {
    url: 'https://jsearch.p.rapidapi.com/search',
    method: 'GET',
    params: {
      query: 'React developer in San Francisco',
      page: '1',
      num_page: '1',
    },
  };

  const { data, isLoading, error } = useFetch(useFetchParams);

  // console.log('data: ', data);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div className="home-container">
      <JobList data={data} />
    </div>
  );
};

export default Home;
