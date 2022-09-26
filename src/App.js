import { Routes, Route } from "react-router-dom";
import MotionRoute from "./layout/motion-route";
import LogIn from "./components/pages/login/log-in";
import "./App.css";
import { Follows } from "./components/pages/follows/Follows";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MotionRoute />}>
        <Route index element={<LogIn />} />
        <Route path="follows" element={<Follows />} />
      </Route>
    </Routes>
  );
}
export default App;
