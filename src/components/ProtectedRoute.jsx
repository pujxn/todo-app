import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "@/context/AuthContext";


const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    const { user } = useAuthContext();
    if (!user) {
        return <Navigate to="/login" state={{ pathname: location.pathname }} replace />;
    }
    else {
        return children;
    }
}

export default ProtectedRoute;