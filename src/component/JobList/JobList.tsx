import { useState } from 'react';
import { JobListType, jobType } from '../../types';
import JobCard from '../JobCard/JobCard';
import JobCardDetail from '../JobCardDetail/JobCardDetail';
import styles from './jobList.module.css';

type propsType = {
  data: jobType[];
  setJobDetail: React.Dispatch<React.SetStateAction<jobType> | undefined>;
};

const JobList = ({ data, setJobDetail }: propsType) => {
  return (
    <div className={styles.container}>
      {data?.map((job) => (
        <JobCard key={job.job_id} job={job} setJobDetail={setJobDetail} />
      ))}
    </div>
  );
};

export default JobList;
