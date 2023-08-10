import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
import Logo from "../../assets/tulip.png";


const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);


    return (
        <>
            <div className="top"><div class="body" data-v-1a46aacb="" bis_skin_checked="1"><p>Testing Tulip Protocol on <strong className="new">Spherical testnet</strong> is now possible </p></div></div>
            <header
                className={`main-header ${scrolled ? "sticky-header" : ""}`}
            >
                <div className="header-content">
                    <img className="logo" src={Logo} alt="AK" />
                    <ul className="center">
                        <li class="dropdown">
                            Developers
                            <ul class="dropdown-menu">
                                <li>Docs</li>
                                <li>Tulip Explorer</li>
                                <li>Github</li>
                                <li>Use Cases</li>
                            </ul>
                        </li>
                        <li>Community</li>
                    </ul>
                    <div className="right">
                        <button className="btn" href="/#">View Demo</button>
                        <button className="btn-1" href="/#">Launch App</button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
