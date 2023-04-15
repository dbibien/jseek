import { useEffect, useState } from 'react';
import JobList from '../component/JobList/JobList';
import useFetch from '../hooks/useFetch';
import { jobType } from '../types';
import JobCardDetail from '../component/JobCardDetail/JobCardDetail';
import Search from '../component/Search/Search';
import { JobListType } from '../types';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState<JobListType>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [jobDetail, setJobDetail] = useState<jobType>();

  const url = 'https://jsearch.p.rapidapi.com/search';
  const options = {
    method: 'GET',
    params: {
      query: 'React developer in San Francisco',
      page: '1',
      num_page: '1',
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST,
    },
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url, options)
      .then((data) => setData(data.data.data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  // if (isLoading) return <h1>Loading...</h1>;
  if (error) return console.log(error);

  return (
    <div>
      <Search
        setData={setData}
        setIsLoading={setIsLoading}
        setError={setError}
      />
      {isLoading ? (
        <>
          <h1>Loading...</h1>
        </>
      ) : (
        <div className="home-container">
          <JobList data={data} setJobDetail={setJobDetail} />
          <JobCardDetail key={jobDetail?.job_id} job={jobDetail} />
        </div>
      )}
    </div>
  );
};

export default Home;
