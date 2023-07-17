"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import style from "./SeachBar.module.css";

const SearchBar = ({ setSearch, search, onSearch }) => {
  const [characters, setCharacters] = useState();
  const [suggestions, setSuggestions] = useState([]);

  const fetchCharacter = async () => {
    const res = await axios.get("http://localhost:8000/characters");
    setCharacters(res.data);
  };

  useEffect(() => {
    fetchCharacter();
  }, []);
  const onClick = s => {
    setSearch(s);
    setSuggestions([]);
  };
  const onchange = e => {
    let matches = [];
    if (e.length > 0) {
      matches = characters.filter(character => {
        const regex = new RegExp(`${e}`, "gi");
        return character.name.match(regex);
      });
    }
    setSuggestions(matches);
    setSearch(e);
  };

  const sugg = suggestions.slice(0, 5);

  return (
    <div>
      <form onSubmit={e => onSearch(e)} role="search" className={style.form__search}>
        <input
          value={search}
          onChange={e => onchange(e.target.value)}
          id="search"
          type="search"
          autofocus
          required
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
      <div className={style.suggestions}>
        {sugg &&
          sugg.map((e, i) => (
            <div onClick={() => onClick(e.name)} className={style.suger} key={i}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <g transform="rotate(90 12 12)">
                  <path
                    fill="currentColor"
                    d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19zm9-12.243L19.092 17H4.908L12 6.757z"
                  />
                </g>
              </svg>
              <h4>{e.name}</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
