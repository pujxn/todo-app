import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "@/context/AuthContext";
import { useState } from "react";


const links = [
    { path: "/", text: "Home" },
    { path: "about", text: "About" },
    { path: "login", text: "Login" },
    { path: "profile", text: "Profile" },
]



const Navbar = () => {

    const [navMenuVisible, setNavMenuVisible] = useState(false);
    const { user, logout } = useAuthContext();
    // console.log("user", user, !user)
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    }
    return (
        <>
            <button onClick={() => setNavMenuVisible((prevState) => !prevState)}>
                {navMenuVisible ? "Close" : "Open"}
            </button>
            <nav className="navbar">
                <ul className={`menu-nav ${navMenuVisible ? ' show-menu' : ''}`}>
                    {links.map((ele, idx) => (
                        ((ele.path == "login" && !user) || (ele.path == "profile" && user) || (ele.path != "login" && ele.path != "profile")) &&
                        (<li key={idx}>
                            <NavLink to={ele.path}>{ele.text}</NavLink>
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
