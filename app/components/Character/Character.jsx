"use client";
import { useEffect } from "react";
import Card from "../Card/Card";
import style from "./Character.module.css";
const Character = ({ seeCharacter, fetchLoading, loading }) => {

  useEffect(()=>{
    fetchLoading()
  },[])

  const url = "http://localhost:8000";
  return !loading ? (
    <div className={style.character__loader}>
      <span class={style.loader}></span>
    </div>
  ) : (
    <section className={style.character__section}>
      <header className={style.character__header}>
        <figure className={style.movie}>
          <div className={style.movie__hero}>
            <img
              src={url + seeCharacter.path}
              alt={seeCharacter.name}
              className={style.movie__img}
            />
          </div>
          <div className={style.movie__content}>
            <div className={style.movie__title}>
              <h1 className={style.heading__primary}>
                {seeCharacter.name} <i className="fas fa-fire"></i>
              </h1>
            </div>
            <p className={style.movie__description}>
              {seeCharacter.description}
            </p>
          </div>
        </figure>
      </header>
      <article className={style.character__article}>
        {seeCharacter.comics.map(e => (
          <Card
            key={e.id}
            title={e.title}
            description={e.description}
            img={url + e.path}
          />
        ))}
      </article>
    </section>
  );
};

export default Character;
