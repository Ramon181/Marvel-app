import SearchBar from "../SearchBar/SearchBar";
import image from "./img/SkyLinefinal.png"
import style from "./NavBar.module.css"

const NavBar = () =>{
    return (
        <main className={style.navbar__main}>
            <div className={style.navbar__image}>
                <img src={image.src} alt="image" />
            </div>
            <nav className={style.navbar__navegation}>
                <h2>Hero Search</h2>
                <SearchBar/>
            </nav>
        </main>
    )
};

export default NavBar;