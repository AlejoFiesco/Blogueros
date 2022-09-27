import { Routes, Route, BrowserRouter } from "react-router-dom";
import LogIn from "../components/pages/login/LogIn";
import { SignupForm } from "../components/pages/login/Register";
import MotionRoute from "../layout/motion-route";
import { DashboarRouter } from "./Dashboar-Router";
function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MotionRoute />}>
          <Route index element={<LogIn />} />
          <Route path="/register" element={<SignupForm />} />
          <Route path="/*" element={<DashboarRouter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default RouterApp;
