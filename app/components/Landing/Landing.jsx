"use client";
import { useEffect, useState } from "react";
import axios from "axios";
const Landing = ({
  setSeeCharacter,
  fetchLoading,
  setLoading,
  setSearchError,
}) => {
  const url = "http://localhost:8000";
  const [characters, setCharacters] = useState([]);

  const fetchCharacter = async () => {
    const res = await axios.get("http://localhost:8000/characters");
    setCharacters(res.data);
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  const character = characters.slice(0, 1);

  return !character.length ? (
    <div className="landing__loader">
      <span class="loader"></span>
    </div>
  ) : (
    <div class="main-container">
      <div class="grid-container">
        {character &&
          character.map(e => (
            <div class="card card--featured">
              <div class="card__side-by-side--m">
                <div class="card__image">
                  <img src={url + e.path} />
                </div>
                <div class="card__content padding-large--l">
                  <div className="card__top">
                    <h2>{e.name}</h2>
                    <p>{e.description}</p>
                  </div>
                  <div className="card__botom">
                    <button
                      onClick={() => {
                        setSeeCharacter(e);
                        setLoading(false);
                        setSearchError("");
                        fetchLoading();
                      }}
                      className="card__button"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Landing;
