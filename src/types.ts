export type jobType = {
  employer_name: string;
  employer_logo: string;
  employer_website: string;

  job_id: string;
  job_apply_quality_score: number;
  job_apply_link: string;
  job_city: string;
  job_state: string;
  job_country: string;
  job_description: string;
  job_employment_type: string;
  job_is_remote: boolean;
  job_title: string;
  job_max_salary: number;
  job_min_salary: number;
  job_offer_expiration_datetime_utc: string;
  job_posted_at_datetime_utc: string;
  job_publisher: string;
  job_salary_currency: string;
  job_salary_period: string;
  job_highlights: {
    Qualifications: string[];
    Responsibilities: string[];
  };
}

export type jobListType = {
    data: jobType[];
  };