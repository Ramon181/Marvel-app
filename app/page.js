"use client";
import { useState } from "react";
import axios from "axios";
import Character from "./components/Character/Character";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import ErrorSearch from "./components/ErrorSearch/ErrorSearch";

export default function Home() {

  const [search, setSearch] = useState("");
  const [searchError, setSearchError] = useState("");
  const [seeCharacter, setSeeCharacter] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchLoading = () => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }

  const onSearch = async (e) => {
    e.preventDefault();
    try {
      const characterInfo = await axios.get(`http://localhost:8000/characters/${search}`);
      if (characterInfo.data.name) {
        setSeeCharacter(characterInfo.data);
        setLoading(false);
        setSearch("");
        setSearchError("");
        fetchLoading();
      }else{
        setSearch("");
        setSearchError("Lamentablemente, no se pudo encontrar el personaje que estás buscando.");
      }
    } catch (error) {
      setSearchError("Lamentablemente, no se pudo encontrar el personaje que estás buscando.");
      console.log(error);
    }
  };

  console.log(searchError)
  return (
    <main className="main_charc">
      <NavBar setSearch={setSearch} setSearchError={setSearchError} setSeeCharacter={setSeeCharacter} search={search} onSearch={onSearch} />
      {
        searchError ? (
          <ErrorSearch searchError={searchError}/>
        ):!seeCharacter.name ? (
          <Landing setSeeCharacter={setSeeCharacter} setLoading={setLoading} setSearchError={setSearchError} fetchLoading={fetchLoading}/>
        ) : (
          <Character seeCharacter={seeCharacter} setLoading={setLoading} loading={loading} fetchLoading={fetchLoading} searchError={searchError} />
        )
      }
      <Footer />
    </main>
  )
}
