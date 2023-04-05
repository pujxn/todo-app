import { NavLink } from "react-router-dom";

const links = [
    { path: "/", text: "Home" },
    { path: "about", text: "About" },
    { path: "login", text: "Login" },
    { path: "profile", text: "Profile" },
]

const Navbar = () => {
    return (
        <ul>
            {links.map((ele, idx) => (
                <li key={idx}><NavLink to={ele.path}>{ele.text}</NavLink></li>
            ))}
        </ul>
    );
};
export default Navbar;
