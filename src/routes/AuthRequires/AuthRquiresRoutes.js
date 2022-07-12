import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


export const AuthRequiresRoutes = ({children}) => {
    const {token} = useSelector(store => store?.auth)
    const location = useLocation();
    return token ? children : <Navigate to="/login" state={{ from: location?.pathname }} replace />;
}