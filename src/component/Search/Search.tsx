import { useState } from 'react';
import styles from './Search.module.css';
import axios from 'axios';
import { jobListType, jobType } from '../../types';

type propsType = {
  setData: React.Dispatch<React.SetStateAction<jobType[] | undefined>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
};

const Search = ({ setData, setIsLoading, setError }: propsType) => {
  const [userInput, setUserInput] = useState('');
  const url = 'https://jsearch.p.rapidapi.com/search';
  const options = {
    url: 'https://jsearch.p.rapidapi.com/search-filters',
    method: 'GET',
    params: {
      query: userInput,
      page: '1',
      num_page: '1',
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST,
    },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserInput(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .get(url, options)
      .then((data) => setData(data.data.data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <input
          value={userInput}
          onChange={handleChange}
          autoFocus
          placeholder="What and where?"
          type="text"
          className={styles.formInput}
        />
        <button className={styles.searchBtn}>Search</button>
      </form>
    </div>
  );
};

export default Search;
