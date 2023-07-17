import style from "./Card.module.css";
const Card = ({ title, description, img }) => {
  return (
    <div className={style.card}>
      <div className={style.card_inner}>
        <div className={style.card_front}>
          <img
            className={style.card__background}
            src={img}
            alt={title}
            width="1920"
            height="2193"
          />
        </div>
        <div className={style.card_back}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      {/* <img
        className={style.card__background}
        src={img}
        alt={title}
        width="1920"
        height="2193"
      /> */}
    </div>
  );
};

export default Card;
