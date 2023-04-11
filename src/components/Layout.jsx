import Navbar from '@/components/Navbar';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
const Layout = () => {
    return (
        <div className="wrapper">
            <AuthProvider>
                <Navbar />
                <Outlet />
            </AuthProvider>
            <p style={{ "textAlign": "center" }}>Made with 💖 by Pujan</p>
        </div >
    );
};
export default Layout;
