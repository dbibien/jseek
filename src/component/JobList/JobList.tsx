import { JobListType } from '../../types';

const JobList = ({ data }: JobListType) => {
  //   console.log('d: ', data);
  return (
    <div>
      {data.map((item) => (
        <h1>{item.job_title}</h1>
      ))}
    </div>
  );
};

export default JobList;
