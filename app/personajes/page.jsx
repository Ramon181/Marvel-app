import { Cartas } from "../components/Cartas/Cartas"
import style from "./Personajes.module.css"

const PersonajesPage = () => {
    return (
        <div className={style.personajes_body} >
            <div className={style.personajes_botom}>
                <Cartas/>
            </div>
        </div>
    )
}

export default PersonajesPage