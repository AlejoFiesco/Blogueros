import { Routes, Route } from "react-router-dom";
import MotionRoute from "./layout/motion-route";
import LogIn from "./components/login/log-in";
import "./App.css";
import { Follows } from "./components/pages/follows/Follows";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MotionRoute element="login"/>} />
      <Route path="/post" element={<MotionRoute element="post"/>} />
      <Route path="/newpost" element={<MotionRoute element="newpost"/>} />
      <Route index element={<LogIn />} />
      <Route path="follows" element={<Follows />} />
    </Routes>
  );
}
export default App;
