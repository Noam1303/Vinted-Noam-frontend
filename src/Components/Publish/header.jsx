import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"


const Header = ({Cookies, user, setUser, input, setInput}) => {

    const navigate = useNavigate()

    // on change le input selon la value de searchbar
    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    };

    return (
        <header>
            <div className="header-container">
                <img src="logo.png" alt="Vinted logo" className="logo" onClick={() => {navigate('/')}} />
                <div className="filtre-not-home">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="glass-not-home" />
                    <input
                        className="searchbar-not-home"
                        type="text"
                        value={input}
                        placeholder="Recherche des articles"
                        onChange={handleChange}
                    />  
                </div>
                {user.length === 0 ? (
                <div className="connection-button-container">
                    <button className="connection-button" onClick={() => {navigate('/signup')}}>S'inscrire</button>
                    <button className="connection-button" onClick={() => {navigate('/login')}}>Se connecter</button>
                </div>
                ) : (
                <div className="connection-button-container">
                    <button className="deconnection-button" onClick={() => {Cookies.remove('token'); setUser([])}}>Se déconnecter</button>
                </div>
                )}
                {/* si l'utilisateur est connecter, alors il sera rediriger vers publish, sinon vers login */}
                <button className="vends" onClick={() => {user.length !== 0 ? navigate('/publish') : navigate('/login')}}>Vends tes articles</button>
            </div>
        </header>
    );
};

export default Header;
