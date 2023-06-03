import style from "./Carta.module.css";

export const Carta = ({ img, comics, name, series }) => {
  return (
    <div className={style.carta_body}>
      <h2 className={style.item_name}>{name}</h2>
      <div className={style.item_image}>
        <img src={img} alt="" />
      </div>
      <div className={style.item_number}>
        <div className={style.comics}>
          <h2>Comics: {comics}</h2>
        </div>
        <div className={style.series}>
          <h2>Series: {series}</h2>
        </div>
      </div>
    </div>
  );
};
