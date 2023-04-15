import { useEffect, useState } from 'react';
import JobList from '../component/JobList/JobList';
import useFetch from '../hooks/useFetch';
import { jobType } from '../types';
import JobCardDetail from '../component/JobCardDetail/JobCardDetail';
import Search from '../component/Search/Search';

const Home = () => {
  const [jobDetail, setJobDetail] = useState<jobType>();

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
    <div>
      <Search />
      <div className="home-container">
        <JobList data={data} setJobDetail={setJobDetail} />
        <JobCardDetail key={jobDetail?.job_id} job={jobDetail} />
      </div>
    </div>
  );
};

export default Home;
