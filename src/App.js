import { Routes, Route } from "react-router-dom";
import MotionRoute from "./layout/motion-route";
//import LogIn from "./components/login/log-in";
import "./App.css";
import { Follows } from "./components/pages/follows/Follows";
import { Header } from "./components/header/Header";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MotionRoute>
            <Header />
            {/* <LogIn /> */}
            <Follows />
          </MotionRoute>
        }
      />
    </Routes>
  );
}

export default App;
