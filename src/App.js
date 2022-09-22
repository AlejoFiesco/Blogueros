import { Routes, Route } from "react-router-dom";
import MotionRoute from "./layout/motion-route";
import LogIn from "./components/login/log-in";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MotionRoute />}>
        <Route index element={<LogIn />} />
      </Route>
    </Routes>
  );
}
export default App;
