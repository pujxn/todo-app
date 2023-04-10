import { NavLink } from "react-router-dom";
import { useAuthContext } from "@/context/AuthContext";


const links = [
    { path: "/", text: "Home" },
    { path: "about", text: "About" },
    { path: "login", text: "Login" },
    { path: "profile", text: "Profile" },
]



const Navbar = () => {

    const { user, logout } = useAuthContext();

    return (
        <>
            <nav className="navbar">
                <ul>
                    {links.map((ele, idx) => (
                        ((ele.path == "login" && !user) || ele.path != "login") &&
                        (<li key={idx}>
                            <NavLink to={ele.path}>{ele.text}</NavLink>
                        </li>)
                    ))}
                </ul>
            </nav>
            {user && (
                <div className="logout">
                    <p>{user}</p>
                    <button onClick={logout}>Logout</button>
                </div>
            )}
        </>

    );
};
export default Navbar;
