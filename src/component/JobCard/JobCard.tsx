import { jobType } from '../../types';
import styles from './jobCard.module.css';

type propsType = {
  job: jobType;
  setJobDetail: React.Dispatch<React.SetStateAction<jobType> | undefined>;
};

const JobCard = ({ job, setJobDetail }: propsType) => {
  const handleClick = (theJob: jobType) => {
    // console.log('theJob: ', theJob);
    setJobDetail(theJob);
  };
  return (
    <div className={styles.container} onClick={() => handleClick(job)}>
      <h2>{job.job_title}</h2>
      <p>{job.employer_name}</p>
      <p>{`${job.job_city}, ${job.job_state} ${job.job_country}`}</p>
    </div>
  );
};

export default JobCard;
