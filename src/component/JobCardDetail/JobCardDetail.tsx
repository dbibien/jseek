import { jobType } from '../../types';
import styles from './JobCardDetail.module.css';

type propsType = {
  job: jobType;
};

const JobCardDetail = ({ job }: propsType) => {
  if (!job) return <></>;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.paddingBottom}>{job?.job_title}</h1>
        <p className={styles.paddingBottom}>
          {job?.employer_name}
          {' | Quality: '}
          {(job?.job_apply_quality_score * 100.0).toFixed(2)}%
        </p>
        <p
          className={styles.paddingBottom}
        >{`${job?.job_city}, ${job?.job_state} ${job?.job_country}`}</p>
        <p className={styles.paddingBottom}>
          {job?.job_employment_type} | ${job?.job_min_salary} - $
          {job?.job_max_salary} / {job?.job_salary_period}
        </p>

        <a
          href={job?.job_apply_link}
          target="_blank"
          className={styles.applyButton}
        >
          Apply now
        </a>
        <button className={styles.bookmarkButton}>Bookmark</button>
      </div>

      <div className={styles.detailsContainer}>
        <div className={styles.description}>
          <h4 className={styles.sectionHeading}>Description</h4>
          <p className={styles.descriptParag}>{job?.job_description}</p>
          <h4 className={styles.sectionHeading}>Qualifiation</h4>
          <ul className={styles.ul}>
            {job?.job_highlights?.Qualifications?.map((q) => (
              <li className={styles.listItem} key={q}>
                {q}
              </li>
            ))}
          </ul>
          <h4 className={styles.sectionHeading}>Responsibilities</h4>
          <ul className={styles.ul}>
            {job?.job_highlights?.Responsibilities?.map((r) => (
              <li className={styles.listItem} key={r}>
                {r}
              </li>
            ))}
          </ul>
          <button className={styles.applyButton}>Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default JobCardDetail;
