import Home from "@/routes/Home";
import About from "@/routes/About";
import Profile from "@/routes/Profile";
import Login from "@/routes/Login";
import { Routes, Route } from "react-router-dom";
import NotMatch from "@/routes/NotMatch";
import Layout from "./Layout";

const TodoApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="login" element={<Login />} />
                <Route path="profile" element={<Profile />} />
                <Route path="*" element={<NotMatch />} />
            </Route>
        </Routes>
    )
}

export default TodoApp;