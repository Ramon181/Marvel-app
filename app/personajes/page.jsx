import { Cartas } from "../components/Cartas"
import style from "./Personajes.module.css"

const PersonajesPage = () => {
    return (
        <div className={style.personajes_body} >
            <div className={style.personajes_top}>
                <div className={ style.progreso }>pogreso</div>
                <div className={style.video}> video  </div>
                <div className={style.image}> image </div>
            </div>
            <div className={style.personajes_botom}>
                <Cartas/>
            </div>
        </div>
    )
}

export default PersonajesPage