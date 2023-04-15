import { useEffect, useState } from 'react';
import JobList from '../component/JobList/JobList';
import useFetch from '../hooks/useFetch';
import { jobType } from '../types';
import JobCardDetail from '../component/JobCardDetail/JobCardDetail';
import Search from '../component/Search/Search';
import { JobListType } from '../types';
import axios from 'axios';
import { BallTriangle } from 'react-loader-spinner';

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

  if (error) return console.log(error);

  return (
    <div>
      <Search
        setData={setData}
        setIsLoading={setIsLoading}
        setError={setError}
      />
      {isLoading ? (
        <div className="spinner-container">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#14b8a6"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </div>
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
