import styles from './Search.module.css';

const Search = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
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
