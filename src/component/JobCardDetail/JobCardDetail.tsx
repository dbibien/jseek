import { jobType } from '../../types';
import styles from './JobCardDetail.module.css';

const JobCardDetail = (props: jobType) => {
  return (
    <div className={styles.container}>
      <h1>{props.job?.job_title}</h1>
    </div>
  );
};

export default JobCardDetail;
