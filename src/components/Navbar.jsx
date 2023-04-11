import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "@/context/AuthContext";
import { useState, useEffect, useRef } from "react";


const links = [
    { path: "/", text: "Home" },
    { path: "about", text: "About" },
    { path: "login", text: "Login" },
    { path: "profile", text: "Profile" },
]



const Navbar = () => {


    const [navMenuVisible, setNavMenuVisible] = useState(false);
    const { user, logout } = useAuthContext();
    const ref = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {

        const handleClickOutside = (event) => {
            if (ref.current && navMenuVisible && !ref.current.contains(event.target)) {
                setNavMenuVisible(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [navMenuVisible]);


    const handleLogout = () => {
        logout();
        navigate("/login");
    }
    return (
        <>
            <button onClick={() => setNavMenuVisible((prevState) => !prevState)}>
                {navMenuVisible ? "Close" : "Open"}
            </button>
            <nav ref={ref} className="navbar">
                <ul className={`menu-nav ${navMenuVisible ? ' show-menu' : ''}`}>
                    {links.map((ele, idx) => (
                        ((ele.path == "login" && !user) || (ele.path == "profile" && user) || (ele.path != "login" && ele.path != "profile")) &&
                        (<li key={idx}>
                            <NavLink onClick={() => setNavMenuVisible(false)} to={ele.path}>{ele.text}</NavLink>
                        </li>)
                    ))}
                    {!user && (
                        <li className="log-in">
                            <span>Log in to edit to-dos</span>
                        </li>
                    )}
                </ul>
            </nav>
            {user && (
                <div className="logout">
                    <p>{user}</p>
                    {<button onClick={() => handleLogout()}>Logout</button>}
                </div>
            )}
        </>

    );
};
export default Navbar;
