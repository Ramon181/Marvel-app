import SearchBar from "../SearchBar/SearchBar";
import image from "./img/SkyLinefinal.png"
import style from "./NavBar.module.css"

const NavBar = ({setSearch,search, onSearch,setSeeCharacter,setSearchError}) =>{
    return (
        <main className={style.navbar__main}>
            <div className={style.navbar__image}>
                <img src={image.src} alt="image" />
                <h2>Hero Search</h2>
            </div>
            <nav className={style.navbar__navegation}>
                <h2 onClick={() => {
                    setSeeCharacter({});
                    setSearchError("")
                }} >Hero Search</h2>
                <SearchBar setSearch={setSearch} search={search} onSearch={onSearch}/>
            </nav>
        </main>
    )
};

export default NavBar;