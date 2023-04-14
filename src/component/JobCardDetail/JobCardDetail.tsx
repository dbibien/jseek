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
        <p className={styles.paddingBottom}>{props.job?.job_employment_type}</p>

        <button className={styles.applyButton}>Apply now</button>
        <button className={styles.bookmarkButton}>Bookmark</button>
      </div>

      <div className={styles.detailsContainer}>
        <div className={styles.description}>
          <h4 className={styles.sectionHeading}>Description</h4>
          <p className={styles.descriptParag}>{props.job?.job_description}</p>
          <h4 className={styles.sectionHeading}>Qualifiation</h4>
          <ul className={styles.ul}>
            {props.job?.job_highlights?.Qualifications?.map((q) => (
              <li className={styles.listItem} key={q}>
                {q}
              </li>
            ))}
          </ul>
          <h4 className={styles.sectionHeading}>Responsibilities</h4>
          <ul className={styles.ul}>
            {props.job?.job_highlights?.Responsibilities?.map((r) => (
              <li className={styles.listItem} key={r}>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobCardDetail;
