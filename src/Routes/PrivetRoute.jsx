import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div><span className="loading loading-infinity loading-lg"></span>
        </div>
    }

     if(user?.email){
            return children;
        }
    return <Navigate state={location?.pathname} to="/login" replace></Navigate>;
};

export default PrivetRoute;