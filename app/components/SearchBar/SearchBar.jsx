import style from "./SeachBar.module.css";

const SearchBar = () => {
  return (
    <form className={style.form__search}>
      <input type="search" placeholder="Search..." />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
