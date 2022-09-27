import { Routes, Route, BrowserRouter } from "react-router-dom";
import MotionRoute from "../layout/motion-route";
import LogIn from "../components/login/log-in";

import { DashboarRouter } from "./Dashboar-Router";


function RouterApp() {
 

  return (
    <BrowserRouter>
        <Routes>    
            {/* rutas publicas */}
            <Route path="/" element={<MotionRoute element="login"/>} />
            <Route index element={<LogIn />} />

            {/* rutas privadas */}
            <Route path='/*' element={
                <DashboarRouter />
            }/>

        </Routes>
    </BrowserRouter>
  );
}
export default RouterApp;
