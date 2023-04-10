import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "@/context/AuthContext";


const links = [
    { path: "/", text: "Home" },
    { path: "about", text: "About" },
    { path: "login", text: "Login" },
    { path: "profile", text: "Profile" },
]



const Navbar = () => {

    const { user, logout } = useAuthContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");

    }
    return (
        <>
            <nav className="navbar">
                <ul>
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
                    <button onClick={() => handleLogout()}>Logout</button>
                </div>
            )}
        </>

    );
};
export default Navbar;
