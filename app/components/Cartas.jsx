"use client";

import axios from "axios";
import { Carta } from "./Carta";
import style from "./Cartas.module.css";
import { useState } from "react";
import { Pagination } from "./Pagination";

const allPersonajes = () => {
  const res = axios.get(
    "https://gateway.marvel.com/v1/public/characters?limit=20&ts=1&apikey=957a572378f86fab746778984884581f&hash=24c043ba4094f21173bc246ee7f8b067"
  );

  return res;
};
// 24c043ba4094f21173bc246ee7f8b067


export const Cartas = async () => {
  const [currentPage, setCurrentPage] = useState(1); // Setea la Pagina Actual
  const itemsPerPage = 4;

  const personages = await allPersonajes();
  const personajes = personages.data.data.results;

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = personajes.slice(startIndex, endIndex); // Muestra todas Las Recetas de la Pagina Principal

  return (
    <div className= {style.cartas_main} >
      <div className={style.cartas_body}>
        {itemsToShow.map((personaje) => (
          <Carta
            name={personaje.name}
            img={personaje.thumbnail.path + "." + personaje.thumbnail.extension}
            comics={personaje.comics.available}
            series={personaje.series.available}
          />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={personajes} onPageChange={handlePageChange}/>
    </div>
  );
};
