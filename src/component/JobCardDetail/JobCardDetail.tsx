import { jobType } from '../../types';
import styles from './JobCardDetail.module.css';

const JobCardDetail = (props: jobType) => {
  if (!props.job) return '';
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.paddingBottom}>{props.job?.job_title}</h1>
        <p className={styles.paddingBottom}>
          {props.job?.employer_name}
          {' | Quality: '}
          {props.job?.job_apply_quality_score * 100.0}
        </p>
        <p
          className={styles.paddingBottom}
        >{`${props.job?.job_city}, ${props.job?.job_state} ${props.job?.job_country}`}</p>
        <button className={styles.applyButton}>Apply now</button>
        <button className={styles.bookmarkButton}>Bookmark</button>
      </div>
    </div>
  );
};

export default JobCardDetail;
